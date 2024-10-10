let currentStage = 0;

function nextStage() {
    const circles = document.querySelectorAll('.circle');
    const progressBar = document.getElementById('progress-bar');
    const stages = document.querySelectorAll('.stages p');

    if (currentStage < circles.length) {
        circles[currentStage].classList.remove('active');
        stages[currentStage].classList.remove('active');

        currentStage++;

        if (currentStage < circles.length) {
            circles[currentStage].classList.add('active');
            stages[currentStage].classList.add('active');
            progressBar.style.width = (currentStage / circles.length) * 100 + '%';
        }
    }
}
