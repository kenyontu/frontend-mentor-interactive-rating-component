;(function (window) {
  const rating = window.document.getElementById('rating')
  const submitButton = window.document.getElementById('submit')
  const ratingSelector = window.document.getElementById('rating-selector')

  // Hold the previous selected rating index
  let prevSelectedRatingIndex = -1

  // Listens for the click event on all rating buttons
  const ratingButtons = Array.from(ratingSelector.childNodes)

  ratingButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (prevSelectedRatingIndex >= 0)
        ratingButtons[prevSelectedRatingIndex].classList.remove('active')

      ratingButtons[index].classList.add('active')
      prevSelectedRatingIndex = index

      // Since there is now a selected rating, we can
      // now enable the submit button
      submitButton.classList.remove('disabled')

      // Assigns the selected rating to the message in
      // the thank you page
      rating.innerHTML = button.innerHTML
    })
  })

  const prompt = window.document.getElementById('prompt')
  const thankYou = window.document.getElementById('thank-you')

  submitButton.addEventListener('click', () => {
    prompt.classList.add('hide')
    thankYou.classList.add('show')
  })
})(window)
