const slide = document.querySelector('.banner');

const prevbtn = document.querySelector('#prevbtn');
const nextbtn =  document.querySelector('#nextbtn');

let counter = 0;
let arrayOfImages = ['url(images/envPhoto2.jpg)','url(images/envPhoto3.jpg)', 'url(images/envPhoto4.jpg)', 'url(images/envPhoto1.jpg)', 'url(images/envPhoto5.jpg)'];
const array_size =5;

function image_slide(count){
    slide.style.backgroundImage = arrayOfImages[count];
}

nextbtn.addEventListener('click', ()=>{
    counter ++;
    counter = counter % array_size;
    image_slide(counter);
});

prevbtn.addEventListener('click', ()=>{
    counter --;
    if(counter<0) counter = array_size-1;
    counter = counter % array_size;
    image_slide(counter);
});



