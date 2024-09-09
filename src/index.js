document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');

  // Array con las URLs de las imágenes
  const imageUrls = [
    'ItachiFigura1.jpeg',
    'image2.jpg',
    'image3.jpg'
    // Agrega tantas imágenes como desees mostrar
  ];

  // Función para crear imágenes flotantes
  function createFloatingImage(url, delay) {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('floating-image');
    img.style.left = `${Math.random() * 80}%`; // Posición horizontal aleatoria
    img.style.top = `${Math.random() * 80}%`; // Posición vertical aleatoria
    setTimeout(() => img.classList.add('appear'), delay); // Aparece después de un retraso
    root.appendChild(img);

    // Programa la desaparición después de cierto tiempo
    setTimeout(() => {
      img.classList.remove('appear');
      img.classList.add('disappear');
      setTimeout(() => img.remove(), 1000); // Elimina la imagen después de la transición
    }, delay + 3000); // Desaparece después de 3 segundos
  }

  // Función para iniciar la animación
  function startAnimation() {
    let delay = 0;
    imageUrls.forEach(url => {
      setTimeout(() => createFloatingImage(url, delay), delay);
      delay += 4000; // Añade un nuevo elemento cada 4 segundos (4000 milisegundos)
    });
  }

  // Inicia la animación cuando la página esté completamente cargada
  startAnimation();
});
