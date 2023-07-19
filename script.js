const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
};

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

const smallImg = document.getElementsByClassName('small-img');
const Main = document.getElementById('MainImg');

if(Main){
    smallImg[0].addEventListener('click',()=>{
        Main.src = smallImg[0].src
    })
    smallImg[1].addEventListener('click',()=>{
        Main.src = smallImg[1].src
    })
    smallImg[2].addEventListener('click',()=>{
        Main.src = smallImg[2].src
    })
    smallImg[3].addEventListener('click',()=>{
        Main.src = smallImg[3].src
    })
}

 const cha = document.getElementById('pro-1')
if(cha){
    cha.addEventListener("click", ()=>{
       window.location.href = 'sproduct.html';
    })
}
