document.querySelectorAll('.plan button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`You selected the ${button.parentElement.querySelector('h2').textContent} plan`);
    });
});
