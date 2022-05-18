'use strict'
;(function (window) {
  const rating = window.document.getElementById('rating')
  const submitButton = window.document.getElementById('submit')
  const ratingRadioButtons = window.document.querySelectorAll(
    '.rating-selector input[type="radio"]'
  )

  ratingRadioButtons.forEach((radio) => {
    radio.addEventListener('click', () => {
      // Since there is now a selected rating, we can
      // now enable the submit button
      submitButton.classList.remove('disabled')
    })
  })

  const prompt = window.document.getElementById('prompt')
  const thankYou = window.document.getElementById('thank-you')
  const ratingForm = window.document.getElementById('rating-form')

  ratingForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const selectedRating = ratingForm.rating.value
    // Since we are dealing with a form, a submit can be triggered
    // in many ways (eg. clicking the enter key while the focus is within
    // the form), this is to make sure we have a selected rating
    // before proceeding
    if (selectedRating == '') return false

    rating.innerHTML = selectedRating
    prompt.classList.add('hide')
    thankYou.classList.add('show')
  })
})(window)
