// Get the rating element
const rateBtn = document.getElementById('rate-btn')
const btns = rateBtn.getElementsByClassName('card-rate__list')

// Get submit button & the cards
const submitBtn = document.getElementById('submit-btn')

// Get submitted rating element
const submittedRating = document.getElementById('rating')

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    const currentActiveBtn = document.getElementsByClassName('active')

    if (currentActiveBtn.length > 0) {
      currentActiveBtn[0].className = currentActiveBtn[0].className.replace(
        ' active',
        ''
      )
    }

    this.className += ' active'

    // Parse rating
    submittedRating.innerHTML = i + 1
  })
}

// Submit user's rating
submitBtn.addEventListener('click', submition)

function submition() {
  const rateCard = document.getElementById('rate')
  const thankYouCard = document.getElementById('thank-you')
  rateCard.classList.toggle('hidden')
  thankYouCard.classList.toggle('hidden')
}
