const cajasContenedor = document.getElementById('cajas');
const boton = document.getElementById('btn');

boton.addEventListener('click', () => cajasContenedor.classList.toggle('grandes'));

function createCajas() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const caja = document.createElement('div');
      caja.classList.add('caja');
      caja.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      cajasContenedor.appendChild(caja);
    }
  }
}

createCajas();