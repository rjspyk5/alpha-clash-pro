class typingGame{
    constructor(play) {
        this.play=document.getElementsByClassName(play);
        this.score=document.getElementById("score");
        this.result=document.getElementById('result');
        this.lifeContainer=document.getElementById("lifeContainer");
        this.lifeField=document.getElementById("life");  
        this.playground=document.getElementById("playground")
        this.charShoingPlace= document.getElementById("place");
        this.playAgain=document.getElementById("playAgain")
        this.play=document.getElementById("play")
        this.keyboard=document.getElementById("keyboard")
        this.clickSound=new Audio("/audio/mouseCllick.wav");
        this.gameOver=document.getElementById("gameover") 
        this.currentScore= parseInt(this.score.innerText);
        this.lifeCount=this.lifeField.innerText; 
        this.play.addEventListener("click",this.handleClick.bind(this));     
        this.playAgain.addEventListener("click",this.handleClick.bind(this));  
        document.addEventListener("keyup",this.handleKeyboardClick.bind(this)) ;   
        
    }
 
    handleClick(e){
        this.setRandomLetterOnScreen();
        this.clickSound.play();
        this.playy(e);
        this.reset();
    }
    handleKeyboardClick(e){
        this.clickSound.play();
    if (e.key===this.charShoingPlace.innerText   && this.lifeCount>0) {
        this.currentScore+=1;
        this.score.innerText=this.currentScore;
        this.setRandomLetterOnScreen();
    }else if(e.key!=this.charShoingPlace  && !this.playground.className.includes("hidden")){
        this.lifeCount=this.lifeCount-1;
        this.lifeField.innerText=this.lifeCount;
        if (this.lifeCount==2) {
            this.lifeContainer.style.backgroundColor="salmon"  
        }
        if (this.lifeCount==1) {
            this.lifeContainer.style.backgroundColor="red" 
        }
        if (this.lifeCount<1) {
            this.gameOverr()
        } 
    }
}
   gameOverr(){
       this.playground.classList.add("hidden");
       this.gameOver.classList.remove("hidden");
       this.result.innerText=this.currentScore;
       
    }
    reset(){
        this.lifeField.innerText=3;
        this.score.innerText=0;
        this.lifeCount=3;
        this.currentScore=0;
        this.lifeContainer.style.backgroundColor="#22c55e" 
    }


    playy(e){
        const removeClassEl=e.target.parentNode.parentNode;
        removeClassEl.classList.add("hidden");
        this.playground.classList.remove("hidden")
        
       
    }

    setRandomLetterOnScreen(){
        const randomNumber=Math.random()*25;
        const randomIndex=Math.round(randomNumber);
        const allLetters="abcdefghijklmnopqrstuvwxyz"
        const randomLetter=allLetters.charAt(randomIndex);
        this.charShoingPlace.innerText=randomLetter;
    }

  
   
}

const firstVersion=new typingGame("play")

// const startSound=new Audio("/audio/Games of Thrones __ Ringtone 2015 __ Theme Music(MP3_160K)_1.mp3");
