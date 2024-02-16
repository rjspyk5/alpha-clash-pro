class typingGame{
    constructor(play,main) {
        this.mainContainer=document.getElementById(main)
        this.play=document.getElementsByClassName(play);
        this.score=document.getElementById("score")
   
       this.result=document.getElementById('result');
        this.lifeContainer=document.getElementById("lifeContainer")
        this.lifeField=document.getElementById("life")
        this.playground=document.getElementById("playground")
        this.charShoingPlace= document.getElementById("place");
        this.keyboard=document.getElementById("keyboard")
        this.clickSound=new Audio("/audio/mouseCllick.wav");
        this.gameOver=document.getElementById("gameover")  
        this.mainContainer.addEventListener("click",this.handleClick.bind(this))  
        
    }
    handleClick(e){
        if (e.target.className.includes("play")) {
        this.setRandomLetterOnScreen()
        this.clickSound.play()
        this.playy(e)
        this.keyboard.addEventListener("click",this.handleKeyboardClick.bind(this)) 
        }      
    }
    handleKeyboardClick(e){
        this.lifeCount=this.lifeField.innerText
    if (e.target.innerText===this.charShoingPlace.innerText && this.lifeCount>0) {
        this.currentScore= parseInt(this.score.innerText);
        this.score.innerText=this.currentScore+1;
        this.setRandomLetterOnScreen()   
    }else if(e.target.className.includes("letter")){
         this.lifeCount-=1;
        if (this.lifeCount==2) {
            this.lifeContainer.style.backgroundColor="salmon"  
        }
        if (this.lifeCount==1) {
            this.lifeContainer.style.backgroundColor="red" 
        }
        if (this.lifeCount<1) {
            this.gameOverr()
        } 
        this.lifeField.innerText=this.lifeCount;
    }
}
   gameOverr(){
       this.playground.classList.add("hidden");
       this.gameOver.classList.remove("hidden");
       this.result.innerText=this.currentScore;
       
    }



    playy(e){
        const removeClassEl=e.target.parentNode.parentNode;
        removeClassEl.classList.add("hidden");
        this.playground.classList.remove("hidden")
        this.lifeField.innerText=3;
        this.score.innerText=0;
        this.lifeCount=3;
        this.currentScore=0;
    }

    setRandomLetterOnScreen(){
        const randomNumber=Math.random()*26;
        const randomIndex=Math.round(randomNumber);
        const allLetters="abcdefghijklmnopqrstuvwxyz"
        const randomLetter=allLetters.charAt(randomIndex);
        this.charShoingPlace.innerText=randomLetter;
    }

  
   
}

const firstVersion=new typingGame("play","main")

// const startSound=new Audio("/audio/Games of Thrones __ Ringtone 2015 __ Theme Music(MP3_160K)_1.mp3");
