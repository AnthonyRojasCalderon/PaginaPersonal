$(function () {
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if(screen.width >= 481){
    if (winTop >= 30) {
      $('body').addClass('sticky-header')
    } else {
      $('body').removeClass('sticky-header')
    }
  }
  })
})

const $check = document.getElementById('menu')
let $item = document.querySelectorAll('.item__navegacion')
 $item.forEach((item) => {
  item.addEventListener('click', () => {
    $check.checked = false
  })
})

/*$(window).on('beforeunload', function() {

    window.setTimeout(function() {
     $(window).scrollTop(0); 
 }, 0); 
 });*/

const correo = document.getElementById('input-correo')
const small = document.querySelector('small')

let cerrar = document.querySelectorAll('.close')[0]
let modal = document.querySelectorAll('.modal')[0]
let modalC = document.querySelectorAll('.modal-container')[0]

const $form = document.querySelector('#contenedor__contacto-formulario')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: 'application/json',
    },
  })
  if (response.ok) {
    this.reset()
    modalC.style.opacity = '1'
    modalC.style.visibility = 'visible'
    modal.classList.toggle('modal-close')
  }
}

cerrar.addEventListener('click', function () {
  modal.classList.toggle('modal-close')
  setTimeout(function () {
    modalC.style.opacity = '0'
    modalC.style.visibility = 'hidden'
  }, 650)
})

window.addEventListener('click', function (e) {
  if (e.targer == modalC) {
    modal.classList.toggle('modal-close')
    setTimeout(function () {
      modalC.style.opacity = '0'
      modalC.style.visibility = 'hidden'
    }, 650)
  }
})

function esEmail(email) {
  return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
    email,
  )
}
