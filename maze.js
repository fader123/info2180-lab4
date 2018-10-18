function allevents() {

let first=document.getElementById('boundary1');
let walls=document.querySelectorAll('#maze > .boundary');
let start=document.getElementById('start');
let head=document.getElementById('status');
let maze=document.getElementById('maze');
let num=0;

start.addEventListener('click',reset);
let end=document.getElementById('end');
end.addEventListener('mouseover',win);
    
//first.addEventListener('mouseover',lose);
for (let x=0;x<walls.length;x++){
 walls[x].addEventListener('mouseover',lose);
}
function lose(){
     for (let x=0;x<walls.length;x++){
        walls[x].classList.add('youlose');
     }
    num=1;
    head.textContent='You Lose';
}
   
function win(){
    //console.log(num);
    if (num===0){
        head.textContent='You Win';
    }
    
}
function reset(){
    for (let x=0;x<walls.length;x++){
        walls[x].classList.remove('youlose');
     }
    num=0;
    head.textContent='Move your mouse over the "S" to begin.';
    maze.addEventListener('mouseleave',lose);
}

}




window.onload=function(){
    
    allevents();
    
}