function iniciarJuego() {
    let buttonMascotaJugador = document.getElementById('button-mascota')
    buttonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    if (document.getElementById('hipodoge').checked) {
        alert("Selecionaste a ipodoge")
    }
}

window.addEventListener('load', iniciarJuego)