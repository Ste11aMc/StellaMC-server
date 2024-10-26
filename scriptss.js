const donateBtn = document.getElementById('donateBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

donateBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// 背景をクリックするとポップアップを閉じる
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
