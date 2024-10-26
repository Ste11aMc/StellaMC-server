const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px';
    } else {
        sidebar.style.right = '0px';
    }
});

let slideIndex = 0; // スライドインデックスを0から開始
const slides = document.querySelectorAll(".mySlides");
const slideshowContainer = document.querySelector(".slideshow-container");

function showSlides() {
    slides.forEach((slide) => {
        slide.style.transform = "translateX(100%)"; // 全てのスライドを右に移動
        slide.style.opacity = 0; // スライドを非表示にする
    });

    slideIndex++; // スライドインデックスをインクリメント
    if (slideIndex >= slides.length) {
        slideIndex = 0; // インデックスをリセット
    }

    slides[slideIndex].style.transform = "translateX(0)"; // 現在のスライドを表示
    slides[slideIndex].style.opacity = 1; // 現在のスライドを表示

    setTimeout(showSlides, 5000); // 5秒後に次のスライドへ
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showSlides, 5000); // ページ読み込み時にスライドショーを開始
});
