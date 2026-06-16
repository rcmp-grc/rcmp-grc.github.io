window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const srText = loader.querySelector('.sr-only');
    srText.textContent = 'Page loaded successfully';
    loader.classList.add('hidden');
    
    setTimeout(() => {
        loader.setAttribute('aria-hidden', 'true');
        loader.style.display = 'none';
        const mainContent = document.querySelector('h1');
        if (mainContent) {
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
        }
    }, 300);
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const spinner = document.querySelector('.spinner');
    if (spinner) spinner.style.animation = 'none';
}