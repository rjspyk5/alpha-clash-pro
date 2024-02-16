class typingGame{
    constructor(play,main) {
        this.mainContainer=document.getElementById(main)
      this.play=document.getElementsByClassName(play);
      this.charShoingPlace= document.getElementById("place");
      this.keyboard=document.getElementById("keyboard")
      this.clickSound=new Audio("/audio/mouseCllick.wav");  
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
    if (e.target.innerText===this.charShoingPlace.innerText) {
        this.setRandomLetterOnScreen()   
    }
}
    targetClickFinder(e){
        e.target

    }

    playy(e){
        const removeClassEl=e.target.parentNode.parentNode;
        removeClassEl.classList.add("hidden");
        const  playground=document.getElementById("playground")
        playground.classList.remove("hidden")
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
