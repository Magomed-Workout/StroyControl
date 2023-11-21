new Swiper('.comments', {
    loop: false,
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 90,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});


const slider = document.querySelector('.slider');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 1024 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slideClass: 'slide',
            wrapperClass: 'slider-wrap',

            slidesPerView: 1,
            spaceBetween: 90,
            loop: false,
            lazy: true,

            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pag',
                type: 'bullets',
                clickable: true,
            },
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 1024) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

    mobileSlider();

    window.addEventListener('resize', () => {
        mobileSlider();
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open')
    })
});

document.getElementById('nav').addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

document.getElementById('burger').addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector('.header').classList.remove('open')
});

function onscroll(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
    change.target.classList.add('active');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onscroll, options);
let elements = document.querySelectorAll('.anim.header, .anim.section-1, .anim.section-2, .anim.section-3, .anim.section-4, .anim.section-left-5, .anim.section-right-5, .anim.section-6, .anim.title-sect-7, .anim.description-sect-7, .anim.section-left-1, .anim.section-right-1, .anim.section-left-2, .anim.section-right-2, .anim.section-left-3, .anim.section-right-3, .anim.section-8, .anim.petal, .anim.section-9, .anim.section-left-10, .anim.section-right-10, .anim.container-10, .anim.section-left-11, .anim.section-right-11, .anim.title-sect-12, .anim.description-sect-12, .anim.section-left-12, .anim.section-right-12, .anim.container-contech, .anim.section-13, .anim.footer');

for (let elm of elements) {
    observer.observe(elm);
}