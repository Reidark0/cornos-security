// Posição atual do mouse
let currentX = 50;
let currentY = 50;

// Posição alvo (para onde o mouse está)
let targetX = 50;
let targetY = 50;

// Velocidade da interpolação (quanto menor, mais suave)
const smoothness = 0.1;

document.addEventListener('mousemove', (e) => {
    // Atualiza a posição alvo
    targetX = (e.clientX / window.innerWidth) * 100;
    targetY = (e.clientY / window.innerHeight) * 100;
});

// Função de animação
function animate() {
    // Interpola suavemente entre a posição atual e a posição alvo
    currentX += (targetX - currentX) * smoothness;
    currentY += (targetY - currentY) * smoothness;
    
    // Atualiza as variáveis CSS
    document.documentElement.style.setProperty('--mouse-x', `${currentX}%`);
    document.documentElement.style.setProperty('--mouse-y', `${currentY}%`);
    
    // Continua a animação
    requestAnimationFrame(animate);
}

// Inicia a animação
animate(); 