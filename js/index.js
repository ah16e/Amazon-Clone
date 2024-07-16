const imgs = document.querySelectorAll('.header-Slider ul img');
const control_prev = document.querySelector('.control_prev');
const control_next = document.querySelector('.control_next');

let n = 0;
function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';

}
changeSlide();

control_prev.addEventListener('click', (e) =>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

control_next.addEventListener('click', (e) =>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.product');
for(const item of scrollContainer){
    item.addEventListener('wheel',  (e) =>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}