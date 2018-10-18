function allevents() {

let first=document.getElementById('boundary1');

first.addEventListener('mouseover',lose);

    
function lose(){
    first.classList.add('youlose');

}

}




window.onload=function(){
    
    allevents();
    
}