document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const images = [
        './static/images/background/background1.webp',
        './static/images/background/background2.webp',
        './static/images/background/background3.webp',
        './static/images/background/background4.webp',
        './static/images/background/background5.webp',
        './static/images/background/background6.webp'
    ];
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    changeBackground();
    setInterval(changeBackground, 10000);

    const menuToggle = document.querySelector('.menu-toggle');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalContent = document.querySelector('.modal-content');

    menuToggle.style.display = 'block';

    menuToggle.addEventListener('click', function () {
        modal.style.display = 'block'; // 显示模态窗口
        setTimeout(() => {
            modalContent.classList.add('show'); // 添加弹出动画
        }, 20); // 延迟以确保显示了后再添加类
        menuToggle.style.display = 'none'; // 隐藏按钮
    });

    closeButton.addEventListener('click', function () {
        modalContent.classList.remove('show'); // 移除弹出动画
        setTimeout(() => {
            modal.style.display = 'none'; // 隐藏模态窗口
            menuToggle.style.display = 'block'; // 显示按钮
        }, 400); // 等待动画结束后再隐藏
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modalContent.classList.remove('show'); // 移除弹出动画
            setTimeout(() => {
                modal.style.display = 'none'; // 隐藏模态窗口
                menuToggle.style.display = 'block'; // 显示按钮
            }, 400); // 等待动画结束后再隐藏
        }
    });
});
