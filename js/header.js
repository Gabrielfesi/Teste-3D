document.addEventListener('DOMContentLoaded', function() {
    // Obter o caminho atual para determinar a página ativa
    const currentPath = window.location.pathname;
    
    // Função para determinar se um link deve ter a classe "active"
    function isActive(path) {
        if (path === '/' || path === '/index.html') {
            return currentPath === '/' || currentPath.includes('index.html');
        }
        return currentPath.includes(path);
    }
    
    // Determinar se estamos na pasta principal ou em uma subpasta
    const isSubfolder = currentPath.includes('/pages/');
    const homePrefix = isSubfolder ? '../' : '';
    const pagesPrefix = isSubfolder ? '' : 'pages/';
    
    // Criar o HTML do cabeçalho
    const headerHTML = `
    <div class="container">
        <div class="logo">
            <h1>Impressões 3D do Gabriel</h1>
        </div>
        <nav class="desktop-nav">
            <ul>
                <li><a href="${homePrefix}index.html" class="${isActive('/index.html') ? 'active' : ''}">Início</a></li>
                <li><a href="${pagesPrefix}sobre.html" class="${isActive('sobre.html') ? 'active' : ''}">Sobre</a></li>
                <li><a href="${pagesPrefix}servicos.html" class="${isActive('servicos.html') ? 'active' : ''}">Serviços</a></li>
                <li><a href="${pagesPrefix}projetos.html" class="${isActive('projetos.html') ? 'active' : ''}">Projetos</a></li>
                <li><a href="${pagesPrefix}loja.html" class="${isActive('loja.html') ? 'active' : ''}">Loja</a></li>
                <li><a href="${pagesPrefix}b2b.html" class="${isActive('b2b.html') ? 'active' : ''}">B2B</a></li>
                <li><a href="${pagesPrefix}personalizados.html" class="${isActive('personalizados.html') ? 'active' : ''}">Personalizados</a></li>
                <li><a href="${pagesPrefix}materiais.html" class="${isActive('materiais.html') ? 'active' : ''}">Materiais</a></li>
                <li><a href="${pagesPrefix}blog.html" class="${isActive('blog.html') ? 'active' : ''}">Blog</a></li>
                <li><a href="${pagesPrefix}contato.html" class="${isActive('contato.html') ? 'active' : ''}">Contato</a></li>
            </ul>
        </nav>
        <div class="cart-user">
            <a href="${pagesPrefix}carrinho.html" class="cart-icon"><i class="fas fa-shopping-cart"></i> <span class="cart-count">0</span></a>
            <a href="${pagesPrefix}login.html" class="user-icon"><i class="fas fa-user"></i></a>
        </div>
    </div>
    `;
    
    // Injetar o cabeçalho no elemento <header>
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }
}); 