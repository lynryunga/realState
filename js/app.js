
const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () => {

  const scroll = this.scrollY / -30;

  imagenes.forEach( (imagen) => {
    imagen.style.backgroundPositionY = `${scroll}px`;
  })
})