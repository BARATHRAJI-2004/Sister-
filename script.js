document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.getElementById('confetti-container');
    const wishesContainer = document.getElementById('wishes-container');
    const wishes = [
        "A very happy birthday to you, Shivaranjini!",
        "Best wishes on your special day, Shivaranjini!",
        "Celebrate your day with joy, Shivaranjini!",
        "Delight in every moment of your birthday, Shivaranjini!",
        "Enjoy your birthday to the fullest, Shivaranjini!",
        "Fabulous birthday wishes to you, Shivaranjini!",
        "Great celebrations for your birthday, Shivaranjini!",
        "Happy birthday to a wonderful person, Shivaranjini!",
        "Joy and happiness on your birthday, Shivaranjini!",
        "Kindest birthday wishes to you, Shivaranjini!",
        "Love and best wishes on your birthday, Shivaranjini!",
        "Many happy returns, Shivaranjini!",
        "Nothing but the best for your birthday, Shivaranjini!",
        "Outstanding birthday wishes to you, Shivaranjini!",
        "Pleasant moments on your birthday, Shivaranjini!",
        "Quality time and fun on your birthday, Shivaranjini!",
        "Remarkable birthday celebrations, Shivaranjini!",
        "Special birthday wishes for you, Shivaranjini!",
        "Tons of birthday wishes, Shivaranjini!",
        "Unforgettable moments on your birthday, Shivaranjini!",
        "Vibrant birthday celebrations, Shivaranjini!",
        "Wishing you a fantastic birthday, Shivaranjini!",
        "Xtraordinary birthday moments for you, Shivaranjini!",
        "Your birthday should be filled with joy, Shivaranjini!",
        "Zest and zeal on your birthday, Shivaranjini!"
    ];

    wishes.sort(); // Sort wishes alphabetically
    let wishIndex = 0;

    function showNextWish() {
        if (wishIndex < wishes.length) {
            wishesContainer.innerHTML = wishes[wishIndex];
            wishesContainer.style.opacity = 1;
            setTimeout(() => {
                wishesContainer.style.opacity = 0;
                wishIndex++;
                setTimeout(showNextWish, 1000); // Show the next wish after 1 second
            }, 3000); // Keep each wish displayed for 3 seconds
        }
    }

    showNextWish();

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
