const sky = document.querySelector('.sky');

// Función para crear estrellas de forma aleatoria
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Posición y tamaño aleatorios para la estrella
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.width = `${Math.random() * 2 + 0.5}px`; // Tamaño pequeño
  star.style.height = star.style.width;

  // Añade la estrella al cielo
  sky.appendChild(star);
}

// Crear múltiples estrellas con diferentes tamaños y posiciones
for (let i = 0; i < 100; i++) {
  createStar();
}

// Función para crear meteoros de forma aleatoria
function createMeteor() {
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');

  // Posición aleatoria para iniciar el meteoro en la parte superior izquierda
  meteor.style.left = `${Math.random() * 20}vw`; // Comienza en el primer 20% de la pantalla en ancho
  meteor.style.top = `${Math.random() * -10}vh`; // Comienza fuera de la pantalla en la parte superior

  // Tamaño y duración de animación aleatorios para variabilidad
  meteor.style.width = `${Math.random() * 2 + 1}px`; // Meteoro fino
  meteor.style.height = `${Math.random() * 80 + 50}px`; // Longitud del meteoro
  const duration = Math.random() * 1.5 + 1.5; // Duración entre 1.5s y 3s
  meteor.style.animationDuration = `${duration}s`;

  // Añade el meteoro al cielo
  sky.appendChild(meteor);

  // Elimina el meteoro después de que termine la animación
  meteor.addEventListener('animationend', () => {
    meteor.remove();
  });
}

// Genera un nuevo meteoro cada 300 ms para una lluvia continua
setInterval(createMeteor, 300);
