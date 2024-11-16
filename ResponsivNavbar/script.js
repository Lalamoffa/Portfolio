// Toggle düyməsinə kliklədikdə menyunun açılıb-bağlanması
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.center ul');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
