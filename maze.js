function allevents() {

let first=document.getElementById('boundary1');
let walls=document.querySelectorAll('#maze > .boundary');
let num=0;

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
}
   
function win(){
    //console.log(num);
    if (num===0){
        alert('You win!');
    }
}

}




window.onload=function(){
    
    allevents();
    
}