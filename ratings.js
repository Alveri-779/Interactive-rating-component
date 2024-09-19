const ratingBtns = document.querySelectorAll('.js-rating-btns');
const submitBtn = document.querySelector('.js-submit-btn');

let selectedRating = null;

ratingBtns.forEach((button) => {
  button.addEventListener('click', () => {
    ratingBtns.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedRating = button.dataset.rating;
    localStorage.setItem('selectedRating', selectedRating);
  })
})

submitBtn.addEventListener('click', (event) => {
  if (!selectedRating) {
    alert('Please select a rating before submitting!');
    event.preventDefault();
  }
});