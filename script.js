const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px';
    } else {
        sidebar.style.right = '0px';
    }
});

// ページ読み込み時に各セクションにアニメーションを適用
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
});
