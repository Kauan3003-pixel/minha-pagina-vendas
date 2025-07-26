document.querySelectorAll('.faq dt').forEach(item => {
    item.addEventListener('click', () => {
        const dd = item.nextElementSibling;
        if(dd.style.display === 'block'){
            dd.style.display = 'none';
        } else {
            dd.style.display = 'block';
        }
    });
});