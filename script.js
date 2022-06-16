let heroImageColOne = document.querySelectorAll(".hero-image");
let resetBTN = document.querySelector(".reset");
let stopGame = false;
let heroImageColTwo = document.querySelectorAll(".hero-image2");
let gameBoard = document.querySelector(".game-board");
let chooseBoard = document.querySelector(".choose-hero");
let oneVoneBTN = document.querySelector(".onevone");
let oneVaiBTN = document.querySelector(".onevai");
let count = 0;
let heroimgOne = " ";
let heroimgTwo= " ";
let heroImgOneDiv = document.querySelector(".hero-one");
let heroTextOne = document.querySelector(".hero-text-one");
let heroImgTwoDiv = document.querySelector(".hero-two");
let heroTextTwo = document.querySelector(".hero-text-two");
let text = document.querySelector(".leText");
let boardPiece = document.querySelectorAll(".circle");
heroImageColOne.forEach((img)=>{
    img.addEventListener("click",(event)=>{


        heroImageColOne.forEach((img)=>{
            if(img.classList.contains("active")){
                img.classList.remove("active");
            }
        })

     event.target.classList.add("active");

    })
})





heroImageColTwo.forEach((img)=>{
    img.addEventListener("click",(event)=>{


        heroImageColTwo.forEach((img)=>{
            if(img.classList.contains("active")){
                img.classList.remove("active");
            }
        })

     event.target.classList.add("active");

    })
})


oneVoneBTN.addEventListener("click",()=>{

    stopGame=false;
let playOne =true;
let playTwo = false;

    heroImageColOne.forEach((img)=>{
         
        if(img.classList.contains("active")){
            heroimgOne=  ( img.getAttribute("data-id"));
        }

    })

    heroImageColTwo.forEach((img)=>{
         
        if(img.classList.contains("active")){
            heroimgTwo=  ( img.getAttribute("data-id"));
        }

    })

if(heroimgOne===" "  || heroimgTwo === " "){
    text.textContent = "Choose a hero"
}else{
    chooseBoard.style.display = "none";
gameBoard.style.display  = "flex";
 
text.textContent = "Let the game BEGIN"


    heroImgOneDiv.style.backgroundImage =  ` url('img/${heroimgOne}.jpg') `;
    heroTextOne.textContent = heroimgOne;
    heroImgTwoDiv.style.backgroundImage =  ` url('img/${heroimgTwo}.jpg') `;
    heroTextTwo.textContent = heroimgTwo;

boardPiece.forEach((piece)=>{
 
    if(stopGame == true){

        console.log("pico");
    }else{
        piece.addEventListener("click",(event)=>{

            if(stopGame === true){
                text.textContent= "you need to restart game";
            }else{
                if(piece.classList.contains("fa-o") ||piece.classList.contains("fa-x")){
              
                }else{
                
                        if (playOne === true &&   playTwo === false){
                            event.target.classList.add("fa-x");
                            playOne= false;
                            playTwo = true;
                            count++;
                        } 
                       else if (playOne === false &&   playTwo === true){
                        event.target.classList.add("fa-o");
                            playOne= true;
                            playTwo = false;
                            count++;
                        } 
                   
                    
                }
            }
            
            checkForWinner()
        })
    }

})


}




})




resetBTN.addEventListener("click",()=>{
 document.location.reload();
})







oneVaiBTN.addEventListener("click",()=>{
count=0;
let randomHero = randomInteger(1,4);
    stopGame=false;

if(randomHero === 1 ){
    heroimgTwo = "Arminius";
}if(randomHero ===2 ){
    heroimgTwo = "Germanicus";
}
if(randomHero === 3 ){
    heroimgTwo = "Caesar";
}if(randomHero === 1 ){
    heroimgTwo = "Spartacus";
}
heroImageColOne.forEach((img)=>{
         
    if(img.classList.contains("active")){
        heroimgOne=  ( img.getAttribute("data-id"));
    }

})

if(heroimgOne===" "  || heroimgTwo === " "){
    text.textContent = "Choose a hero"
}else{
    chooseBoard.style.display = "none";
gameBoard.style.display  = "flex";
 
text.textContent = "Let the game BEGIN"


    heroImgOneDiv.style.backgroundImage =  ` url('img/${heroimgOne}.jpg') `;
    heroTextOne.textContent = heroimgOne;
    heroImgTwoDiv.style.backgroundImage =  ` url('img/${heroimgTwo}.jpg') `;
    heroTextTwo.textContent = heroimgTwo;}









    boardPiece.forEach((piece)=>{
 
            piece.addEventListener("click",(event)=>{
    if (stopGame === true){
        text.textContent= "you need to restart game";
    }else{
       let whileCount = 0;
                    if(piece.classList.contains("fa-o") ||piece.classList.contains("fa-x")){
                  
                    }else{
                        let randomBoardPiece = randomInteger(0,8);
                        event.target.classList.add("fa-x")
                        if(whileCount<1000){
                            while (boardPiece[randomBoardPiece].classList.contains("fa-o")||boardPiece[randomBoardPiece].classList.contains("fa-x")) {
                                randomBoardPiece = randomInteger(0,8);
                              }
                              boardPiece[randomBoardPiece].classList.add("fa-o");
                        }
                        
                    }
                
                
                checkForWinner() 
    }
               
            })
       
    
    })











})




function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  
}function checkForWinner(){

    if(stopGame == true){
        text.textContent= "you need to restart game";
    }
    else{

if(boardPiece[0].classList.contains("fa-x") &&  boardPiece[1].classList.contains("fa-x") &&boardPiece[2].classList.contains("fa-x")){
    text.textContent=`${heroimgOne} wins`;  
      stopGame=true;

}
if(boardPiece[3].classList.contains("fa-x") &&  boardPiece[4].classList.contains("fa-x") &&boardPiece[5].classList.contains("fa-x")){
    text.textContent=`${heroimgOne} wins`;
    stopGame=true;

}if(boardPiece[6].classList.contains("fa-x") &&  boardPiece[7].classList.contains("fa-x") &&boardPiece[8].classList.contains("fa-x")){
    text.textContent=`${heroimgOne} wins`;
    stopGame=true;

}
if(boardPiece[0].classList.contains("fa-x") &&  boardPiece[3].classList.contains("fa-x") &&boardPiece[6].classList.contains("fa-x")){
    text.textContent=`${heroimgOne} wins`;
    stopGame=true;

}
if(boardPiece[1].classList.contains("fa-x") &&  boardPiece[4].classList.contains("fa-x") &&boardPiece[7].classList.contains("fa-x")){
    text.textContent=`${heroimgOne} wins`;
    stopGame=true;

}if(boardPiece[2].classList.contains("fa-x") &&  boardPiece[5].classList.contains("fa-x") &&boardPiece[8].classList.contains("fa-x")){
    text.textContent=`${heroimgOne} wins`;
    stopGame=true;

}
if(boardPiece[0].classList.contains("fa-x") &&  boardPiece[4].classList.contains("fa-x") &&boardPiece[8].classList.contains("fa-x")){
    text.textContent=`${heroimgOne} wins`;
    stopGame=true;

}
if(boardPiece[2].classList.contains("fa-x") &&  boardPiece[4].classList.contains("fa-x") &&boardPiece[6].classList.contains("fa-x")){
    text.textContent=`${heroimgOne} wins`;  
      stopGame=true;

}

if(boardPiece[0].classList.contains("fa-o") &&  boardPiece[1].classList.contains("fa-o") &&boardPiece[2].classList.contains("fa-o")){
    text.textContent=`${heroimgTwo} wins`;
    stopGame=true;
}
if(boardPiece[3].classList.contains("fa-o") &&  boardPiece[4].classList.contains("fa-o") &&boardPiece[5].classList.contains("fa-o")){
    text.textContent=`${heroimgOne} wins`;
}if(boardPiece[6].classList.contains("fa-o") &&  boardPiece[7].classList.contains("fa-o") &&boardPiece[8].classList.contains("fa-o")){
    text.textContent=`${heroimgTwo} wins`;
    stopGame=true;
}
if(boardPiece[0].classList.contains("fa-o") &&  boardPiece[3].classList.contains("fa-o") &&boardPiece[6].classList.contains("fa-o")){
    text.textContent=`${heroimgTwo} wins`;
    stopGame=true;
}
if(boardPiece[1].classList.contains("fa-o") &&  boardPiece[4].classList.contains("fa-o") &&boardPiece[7].classList.contains("fa-o")){
    text.textContent=`${heroimgTwo} wins`
}if(boardPiece[2].classList.contains("fa-o") &&  boardPiece[5].classList.contains("fa-o") &&boardPiece[8].classList.contains("fa-o")){
    text.textContent=`${heroimgTwo} wins`;
    stopGame=true;
}
if(boardPiece[0].classList.contains("fa-o") &&  boardPiece[4].classList.contains("fa-o") &&boardPiece[8].classList.contains("fa-o")){
    text.textContent=`${heroimgOne} wins`;
    stopGame=true;
}
if(boardPiece[2].classList.contains("fa-o") &&  boardPiece[4].classList.contains("fa-o") &&boardPiece[6].classList.contains("fa-o")){
    text.textContent=`${heroimgTwo} wins`;
    stopGame=true;
}

if (count > 9){
    text.textContent = "Lads it is a draw"
    stopGame=true;
}


    }

}