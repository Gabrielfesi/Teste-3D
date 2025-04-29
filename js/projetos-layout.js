/**
 * Script específico para corrigir o layout da página de projetos
 * Este script garante que os cards de projetos fiquem bem distribuídos na tela
 */

document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um breve momento para garantir que todo o CSS foi carregado
    setTimeout(function() {
        fixProjectLayout();
    }, 100);
});

/**
 * Função principal para corrigir o layout dos projetos
 */
function fixProjectLayout() {
    console.log('Iniciando correção do layout dos projetos');
    
    // Obter o contêiner de projetos
    const projectsContainer = document.querySelector('.projects');
    
    if (!projectsContainer) {
        console.error('Container de projetos não encontrado');
        return;
    }
    
    // Obter todos os cards de projetos
    const projectCards = document.querySelectorAll('.content-card');
    
    if (projectCards.length === 0) {
        console.error('Nenhum card de projeto encontrado');
        return;
    }
    
    console.log(`Encontrados ${projectCards.length} cards de projetos`);
    
    // Aplicar estilos ao container para garantir distribuição adequada
    applyContainerStyles(projectsContainer);
    
    // Ajustar cada card para garantir que eles fiquem bem distribuídos
    projectCards.forEach((card, index) => {
        applyCardStyles(card, index);
    });
    
    // Verificar a largura da tela e ajustar a grade em tempo real
    adjustGridBasedOnScreenWidth();
    
    // Adicionar listener para reajustar em caso de redimensionamento da janela
    window.addEventListener('resize', debounce(function() {
        adjustGridBasedOnScreenWidth();
    }, 250));
    
    console.log('Correção do layout concluída');
}

/**
 * Aplica estilos ao container de projetos
 */
function applyContainerStyles(container) {
    // Resetar qualquer estilo anterior que possa estar causando o problema
    container.style.cssText = `
        display: grid;
        width: 100%;
        gap: 25px;
        justify-content: center;
    `;
    
    // Forçar atualização do layout
    container.offsetHeight;
}

/**
 * Aplica estilos a cada card de projeto
 */
function applyCardStyles(card, index) {
    // Garantir que cada card tenha estilos adequados
    card.style.cssText = `
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: 0;
        box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        border-radius: 8px;
        overflow: hidden;
        background-color: #ffffff;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    `;
    
    // Efeito de aparecimento gradual para cada card
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    // Animação com delay progressivo
    setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100 + (index * 100)); // Delay progressivo
    
    // Adicionar evento de hover
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.08)';
    });
}

/**
 * Ajusta a grade com base na largura da tela
 */
function adjustGridBasedOnScreenWidth() {
    const projectsContainer = document.querySelector('.projects');
    if (!projectsContainer) return;
    
    const containerWidth = projectsContainer.clientWidth;
    let columns = 3; // Padrão para desktop
    
    if (containerWidth < 768) {
        columns = 1; // Celulares
    } else if (containerWidth < 992) {
        columns = 2; // Tablets
    }
    
    projectsContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    console.log(`Ajustando para ${columns} colunas (largura: ${containerWidth}px)`);
}

/**
 * Função para limitar a frequência de execução de uma função
 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
} 