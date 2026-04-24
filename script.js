// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.className = 'dark-mode-toggle'; // tambahkan class
document.body.appendChild(darkModeToggle);

let isDarkMode = false;

// dark mode ke semua elemen
function applyDarkMode() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
        darkModeToggle.style.backgroundColor = '#f1f1f1';
        darkModeToggle.style.color = 'black';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = 'Dark Mode';
        darkModeToggle.style.backgroundColor = '#2c3e50';
        darkModeToggle.style.color = 'white';
    }
}

darkModeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    applyDarkMode();
});

// Contact Form Handler 
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const existingError = document.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        const existingSuccess = document.querySelector('.success-message');
        if (existingSuccess) existingSuccess.remove();
        
        if (!name || !email || !message) {
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'Semua field harus diisi!';
            contactForm.appendChild(errorMsg);
            return;
        }
        
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Pesan berhasil dikirim!';
        successMsg.style.fontWeight = 'bold';
        contactForm.appendChild(successMsg);
        
        contactForm.reset();
    });
}

// Foto Profile Toggle 
const aboutImage = document.querySelector('.about-image');
if (aboutImage) {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Sembunyikan Foto';
    toggleButton.className = 'photo-toggle-btn'; // tambahkan class
    
    aboutImage.parentNode.insertBefore(toggleButton, aboutImage.nextSibling);
    
    let isPhotoVisible = true;
    toggleButton.addEventListener('click', function() {
        isPhotoVisible = !isPhotoVisible;
        aboutImage.style.display = isPhotoVisible ? 'block' : 'none';
        toggleButton.textContent = isPhotoVisible ? 'Sembunyikan Foto' : 'Tampilkan Foto';
        toggleButton.style.backgroundColor = isPhotoVisible ? '#e74c3c' : '#27ae60';
    });
}