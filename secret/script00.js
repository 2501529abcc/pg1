document.addEventListener('DOMContentLoaded', () => {
    const secretTrigger = document.getElementById('secret-trigger');
    const resultContainer = document.getElementById('result-container');
    const niconicoLink = document.getElementById('niconico-link');

    secretTrigger.addEventListener('click', () => {
        // User text prompt
        const answer = prompt("ニコニコを数字に変えると...?");

        // Validation (Exact match for '2525')
        if (answer === '2525') {
            // Hide the trigger
            secretTrigger.style.display = 'none';

            // Show the result
            resultContainer.classList.remove('hidden');
            resultContainer.classList.add('visible');
        }
    });
});
