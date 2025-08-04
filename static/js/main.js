
    const menuToggle = document.querySelector('.menu-toggle');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalContent = document.querySelector('.modal-content');

    menuToggle.style.display = 'block';

    menuToggle.addEventListener('click', function () {
        modal.style.display = 'block';
        setTimeout(() => {
            modalContent.classList.add('show');
        }, 20); 
        menuToggle.style.display = 'none'; 
    });

    closeButton.addEventListener('click', function () {
        modalContent.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none'; 
            menuToggle.style.display = 'block'; 
        }, 400); 
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modalContent.classList.remove('show'); 
            setTimeout(() => {
                modal.style.display = 'none'; 
                menuToggle.style.display = 'block';
            }, 400);
        }
    });
