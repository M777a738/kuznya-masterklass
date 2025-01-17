document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.header__menu');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            document.body.classList.toggle('_lock');
            menuIcon.classList.toggle('active');
            menuBody.classList.toggle('active');
        });
    }

    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuIcon.classList.contains('active')) {
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('active');
                menuBody.classList.remove('active');
            }
        });
    });
});

function toggleText(button) {
    const card = button.closest('.card');
    const dots = card.querySelector('.dots');
    const moreText = card.querySelector('.more');
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        button.innerHTML = "Подробнее";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        button.innerHTML = "Скрыть";
        moreText.style.display = "inline";
    }
} 