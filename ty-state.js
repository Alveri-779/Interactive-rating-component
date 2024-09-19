window.addEventListener('DOMContentLoaded', () => {
  const ratingCount = document.querySelector('.js-rating-count');
  const selectedRating = localStorage.getItem('selectedRating');

  if (selectedRating) {
    ratingCount.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    ratingCount = `Error`
  }
})