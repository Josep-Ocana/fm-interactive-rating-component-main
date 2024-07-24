import './styles/main.scss';

// Selectors
const submitBtn = document.querySelector('#submit-btn');
const ratingButtons = document.querySelectorAll('.rating');
const ratingSection = document.querySelector('#rating-sect');
const thankSection = document.querySelector('#thank-sect');
let selectedRating = null;



document.addEventListener('DOMContentLoaded', function () {

    ratingButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove 'selected' class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove('selected', 'button-selected'));
            // Add 'selected' class to the clicked button
            button.classList.add('selected');
            button.classList.add('button-selected');
            // Set the selected rating value
            selectedRating = button.value;
            console.log('object');
        });
    });
});

// Handle form submit event
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Selectors
    const valueSpan = document.querySelector('.value');

    if (selectedRating) {
        valueSpan.textContent = selectedRating;
        ratingSection.classList.add('hidden');
        thankSection.classList.remove('hidden');
    } else {
        console.log('no rating submitted');
    }
});

