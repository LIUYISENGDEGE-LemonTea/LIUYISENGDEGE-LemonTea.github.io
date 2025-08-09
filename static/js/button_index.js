document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalContent = document.querySelector('.modal-content');
    const dynamicMenu = document.getElementById('dynamic-menu'); 

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

    fetch('./button_index.json')
        .then(response => response.json())
        .then(config => {
            config.links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.text;
                li.appendChild(a);
                dynamicMenu.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading button:', error));
});
