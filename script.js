const prevBtn = document.querySelector('#prevBtn');
const nxtBtn = document.querySelector('#nxtBtn');
const bodyBcg = document.querySelector('body');
const containerC = document.querySelector('.container');

prevBtn.addEventListener('click',prevImg);
nxtBtn.addEventListener('click',nxtImg);
let count= 1;
function prevImg(){
    count--;
    if(count === 0 || count <0){
        count = 5;
    }
    containerC.style.backgroundImage = `url(image/img${count}.jpg)`;
}

function nxtImg(){
    count++;
    if(count === 5 || count >5){
        count = 1;
    }
    containerC.style.backgroundImage = `url(image/img${count}.jpg)`;
}