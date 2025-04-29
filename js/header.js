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
    <div class="header__container container">
        <div class="header__logo">
            <h1>Impressões 3D do Gabriel</h1>
        </div>
        <nav class="header__nav desktop-nav">
            <ul>
                <li class="header__nav-item"><a href="${homePrefix}index.html" class="header__nav-link ${isActive('/index.html') ? 'header__nav-link--active' : ''}">Início</a></li>
                <li class="header__nav-item"><a href="${pagesPrefix}sobre.html" class="header__nav-link ${isActive('sobre.html') ? 'header__nav-link--active' : ''}">Sobre</a></li>
                <li class="header__nav-item"><a href="${pagesPrefix}servicos.html" class="header__nav-link ${isActive('servicos.html') ? 'header__nav-link--active' : ''}">Serviços</a></li>
                <li class="header__nav-item"><a href="${pagesPrefix}projetos.html" class="header__nav-link ${isActive('projetos.html') ? 'header__nav-link--active' : ''}">Projetos</a></li>
                <li class="header__nav-item"><a href="${pagesPrefix}loja.html" class="header__nav-link ${isActive('loja.html') ? 'header__nav-link--active' : ''}">Loja</a></li>
                <li class="header__nav-item"><a href="${pagesPrefix}b2b.html" class="header__nav-link ${isActive('b2b.html') ? 'header__nav-link--active' : ''}">B2B</a></li>
                <li class="header__nav-item"><a href="${pagesPrefix}personalizados.html" class="header__nav-link ${isActive('personalizados.html') ? 'header__nav-link--active' : ''}">Personalizados</a></li>
                <li class="header__nav-item"><a href="${pagesPrefix}materiais.html" class="header__nav-link ${isActive('materiais.html') ? 'header__nav-link--active' : ''}">Materiais</a></li>
                <li class="header__nav-item"><a href="${pagesPrefix}contato.html" class="header__nav-link ${isActive('contato.html') ? 'header__nav-link--active' : ''}">Contato</a></li>
            </ul>
        </nav>
        <div class="header__cart-user">
            <a href="${pagesPrefix}carrinho.html" class="header__cart-icon"><i class="fas fa-shopping-cart"></i> <span class="header__cart-count">0</span></a>
            <a href="${pagesPrefix}login.html" class="header__user-icon"><i class="fas fa-user"></i></a>
        </div>
    </div>
    `;
    
    // Injetar o cabeçalho no elemento <header>
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
        headerElement.classList.add('header');
    }
}); 