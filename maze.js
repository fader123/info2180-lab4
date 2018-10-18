function allevents() {

let first=document.getElementById('boundary1');
let walls=document.querySelectorAll('#maze > .boundary');
console.log(walls);
    
//first.addEventListener('mouseover',lose);
for (let x=0;x<walls.length;x++){
 walls[x].addEventListener('mouseover',lose);
}
function lose(){
     for (let x=0;x<walls.length;x++){
        walls[x].classList.add('youlose');
     }
}

}




window.onload=function(){
    
    allevents();
    
}