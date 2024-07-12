document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
});

function getRandomColor() {
    const colors = ['#ff0', '#f00', '#0f0', '#00f', '#0ff', '#f0f'];
    return colors[Math.floor(Math.random() * colors.length)];
}
