function showContent(id) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    // メニューアイテムのアクティブ状態を管理
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector(`[onclick="showContent('${id}')"]`).classList.add('selected');
}
