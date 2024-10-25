const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const indicators = document.querySelectorAll(".indicator"); // インジケーターの要素を取得

menuBtn.addEventListener('click', () => {
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px';
    } else {
        sidebar.style.right = '0px';
    }
});

// スライドショーの処理
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        indicators[i].classList.remove("active"); // 全てのインジケーターを非アクティブにする
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;    
    }

    const currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = "block";  
    currentSlide.style.opacity = 0; // 初期状態は透明に
    currentSlide.style.transform = 'scale(0.9)'; // 初期スケール
    fadeIn(currentSlide); // フェードイン処理
    
    indicators[slideIndex - 1].classList.add("active"); // 現在のインジケーターをアクティブにする

    setTimeout(showSlides, 5000); // 5秒ごとにスライドを切り替え
}

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05; // 透明度を徐々に上げる
            element.style.opacity = opacity;
            element.style.transform = `scale(${1 + opacity * 0.1})`; // スケールを調整
        } else {
            clearInterval(interval);
        }
    }, 50); // 50msごとに実行
}
