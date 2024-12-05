const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
const textContainer = document.getElementById('textContainer');

// Configurações do Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Função para desenhar o coração
function drawHeart(t, x, y, size) {
  ctx.beginPath();

  // Fórmula paramétrica para desenhar um coração
  for (let i = 0; i < Math.PI * 2; i += 0.02) {
    const scale = 16 * Math.pow(Math.sin(i), 3);
    const dx = x + size * scale;
    const dy = y - size * (13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i));
    ctx.lineTo(dx, dy);
  }

  ctx.strokeStyle = `rgba(255, 0, 0, ${Math.random() * 0.6 + 0.4})`; // Vermelho aleatório com transparência
  ctx.lineWidth = Math.random() * 3 + 1; // Linhas de espessura aleatória
  ctx.stroke();
}

// Animação do coração
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Desenha várias camadas do coração
  for (let i = 0; i < 30; i++) {
    drawHeart(i, centerX, centerY, 10 + i / 2);
  }

  requestAnimationFrame(animate);
}

// Função para exibir texto letra por letra
function typeText(text, element, delay) {
  let index = 0;
  element.textContent = '';

  function type() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, delay);
    }
  }

  type();
}

// Inicia a animação
animate();

// Inicia a escrita do texto
setTimeout(() => {
  typeText('Amo-te Beatriz', textContainer, 200); // 200ms por letra
}, 3000); // Delay para começar o texto após o coração animar