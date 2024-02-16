class typingGame{
    constructor(play,main) {
        this.mainContainer=document.getElementById(main)
      this.play=document.getElementsByClassName(play);
      this.clickSound=new Audio("/audio/mouseCllick.wav");
     
      this.mainContainer.addEventListener("click",this.handleClick.bind(this))
        
    }
    handleClick(e){

        if (e.target.className.includes("play")) {
            this.clickSound.play()
           this.playy(e)
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
   
}

const firstVersion=new typingGame("play","main")
// const startSound=new Audio("/audio/Games of Thrones __ Ringtone 2015 __ Theme Music(MP3_160K)_1.mp3");
