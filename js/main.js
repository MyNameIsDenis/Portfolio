window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrolPos = 200;
    let header = document.querySelector("header");

    if(document.body.scrollTop > scrolPos || document.documentElement.scrollTop > scrolPos) {
        header.classList.add('active');
    } else{
        header.classList.remove('active');
    }
}