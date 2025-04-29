/**
 * Script para garantir que o arquivo de alinhamento CSS seja carregado em todas as páginas
 * Adiciona a referência caso ela não exista
 */
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o arquivo CSS de alinhamento já está incluído
    const cssLinkExists = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .some(link => link.href.includes('alignment.css'));
    
    // Se não existir, adiciona a referência
    if (!cssLinkExists) {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        
        // Determina o caminho correto baseado na localização da página atual
        const isInSubfolder = window.location.pathname.includes('/pages/');
        cssLink.href = isInSubfolder ? '../css/alignment.css' : 'css/alignment.css';
        
        // Insere após o arquivo style.css principal
        const styleLink = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
            .find(link => link.href.includes('style.css'));
            
        if (styleLink) {
            styleLink.parentNode.insertBefore(cssLink, styleLink.nextSibling);
        } else {
            // Caso não encontre o style.css, adiciona à head
            document.head.appendChild(cssLink);
        }
    }
}); 