let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h=0;
document.addEventListener('keypress',function(event){
    if(started==false){
        console.log('game is started');
        started=true;
        levelUp();
    }
})

let h2=document.querySelector('h2');
let h3=document.querySelector('h3');
function levelUp(){
    userSeq=[];
    level++;
    if(h<level){
        h=level;
        h3.innerText=`Highest Score : ${h}`;
    }
    

    h2.innerText=`Level ${level}`
    let ran=Math.floor(Math.random()*4);
    let ranCol=btns[ran];
    let ranBtn=document.querySelector(`.${ranCol}`);
    console.log(ran,ranCol,ranBtn);
    gameSeq.push(ranCol);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

}

function userbuttonFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);

}

function checkAns(idx){
    console.log("current level : ",level);
  
    if(gameSeq[idx]==userSeq[idx]){
       if(userSeq.length==gameSeq.length){
         setTimeout(()=>{
            levelUp();
         },1000)
       }

       
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b>. <br> press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }

}
function btnPress(){
    console.log("button flashed");
    let btn=this;
    userbuttonFlash(btn);
    let userCol=btn.getAttribute("id");
    
    userSeq.push(userCol);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll('.box');
for(btn of allBtn){
    btn.addEventListener('click',btnPress)
        
        
   
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}