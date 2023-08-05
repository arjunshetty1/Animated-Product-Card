const color1 = document.querySelector('.card__color--option1')

const color2 = document.querySelector('.card__color--option2')

const image = document.querySelector('.card__img')

const card = document.querySelector('.card')

const price  = document.querySelector('.card__price')

const btn = document.querySelector('.card__btn');




color1.addEventListener('click', () => {

  image.src = '/images/shoe1.png'
  card.style.backgroundColor = 'var(--bg-color-option1)'
  price.textContent = ('$12249.99');
  btn.style.backgroundColor = 'white'
  

})


color2.addEventListener('click', () => {

  image.src = '/images/shoe2.png'
  card.style.backgroundColor = 'var(--bg-color-option2)'
  price.innerHTML = ('Free');
  btn.style.backgroundColor = 'lightgreen'

})


