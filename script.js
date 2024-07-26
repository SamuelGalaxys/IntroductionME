document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const message = button.getAttribute('data-message');
            popupMessage.textContent = message;
            popup.classList.add('fade-up');
            
            setTimeout(() => {
                popup.classList.remove('fade-up');
            }, 4000); // 2 seconds for fade-in, 2 seconds for display
        });
    });

    popup.addEventListener('click', () => {
        popup.classList.remove('fade-up');
    });
});
