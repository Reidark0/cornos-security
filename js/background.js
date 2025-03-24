document.addEventListener('mousemove', (e) => {
    // Calcula a posição do mouse em porcentagem relativa ao tamanho da janela
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    // Atualiza as variáveis CSS
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
}); 