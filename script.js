let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;
addCount.addEventListener('click',IC);
lowerCount.addEventListener('click',LC);
function IC(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML >0){
        counter.style.color = '#4caf50';
    }
    else if(counter.innerHTML == 0){
        counter.style.color = 'white';
    }
    else{
        counter.style.color = 'red';
    }
    counter.animate([{opacity:0.2},{opacity:1}],{duration:500,fill:'forwards'}); /* keyframes, {} */
}

function LC(){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML >0){
        counter.style.color = '#4caf50';
    }
    else if(counter.innerHTML == 0){
        counter.style.color = 'white';
    }
    else{
        counter.style.color = 'red';
    }
    counter.animate([{opacity:0.2},{opacity:1}],{duration:500,fill:'forwards'}); /* keyframes, {} */
}
