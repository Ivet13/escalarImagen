'use strict'

// creamos una asociacion entre el icono y nuestro JS
const icono = document.getElementById('pareja')

// para poder manipular el funcionamiento del codigo necesitamos una variable booleana para decidir si el icono esta clicado o no
var clicado = false

// anadimos el eventListener a nuesto icono, llamamos una funcion anonima que simplemente verifia el estado de la booleana y anade
// la clase css "scaled" que se ocupa de aplicarle una transformacion del tamano al icono, y luego cambiamos el valor de la booleana
icono.addEventListener('click', function () {
  if (clicado === false) {
    icono.classList.add('scaled')
    clicado = true
  } else {
    icono.classList.remove('scaled')
    clicado = false
  }
})
