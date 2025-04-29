document.addEventListener('DOMContentLoaded', function() {
    // Determinar se estamos na pasta principal ou em uma subpasta
    const currentPath = window.location.pathname;
    const isSubfolder = currentPath.includes('/pages/');
    const homePrefix = isSubfolder ? '../' : '';
    const pagesPrefix = isSubfolder ? '' : 'pages/';
    
    // Criar o HTML do rodapé
    const footerHTML = `
    <div class="container">
        <div class="footer__grid">
            <div class="footer__col">
                <h3 class="footer__col-title">Impressões 3D do Gabriel</h3>
                <p class="footer__col-text">Transformando ideias em realidade</p>
                <div class="footer__social">
                    <a href="#" class="footer__social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="footer__social-link"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="footer__social-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="footer__social-link"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="footer__social-link"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">Links Rápidos</h3>
                <ul class="footer__nav">
                    <li class="footer__nav-item"><a href="${homePrefix}index.html" class="footer__nav-link">Home</a></li>
                    <li class="footer__nav-item"><a href="${pagesPrefix}servicos.html" class="footer__nav-link">Serviços</a></li>
                    <li class="footer__nav-item"><a href="${pagesPrefix}projetos.html" class="footer__nav-link">Projetos</a></li>
                    <li class="footer__nav-item"><a href="${pagesPrefix}loja.html" class="footer__nav-link">Loja</a></li>
                </ul>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">Mais Links</h3>
                <ul class="footer__nav">
                    <li class="footer__nav-item"><a href="${pagesPrefix}b2b.html" class="footer__nav-link">B2B</a></li>
                    <li class="footer__nav-item"><a href="${pagesPrefix}sobre.html" class="footer__nav-link">Sobre</a></li>
                    <li class="footer__nav-item"><a href="${pagesPrefix}contato.html" class="footer__nav-link">Contato</a></li>
                </ul>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">Contato</h3>
                <ul class="footer__contact-list">
                    <li class="footer__contact-item"><i class="footer__contact-icon fas fa-map-marker-alt"></i> Av. Tecnologia, 1000 - Belo Horizonte, MG</li>
                    <li class="footer__contact-item"><i class="footer__contact-icon fas fa-phone"></i> (31) 3333-3333</li>
                    <li class="footer__contact-item"><i class="footer__contact-icon fas fa-envelope"></i> contato@gabriel3d.com.br</li>
                </ul>
            </div>
        </div>
        <div class="footer__copyright">
            <p>&copy; 2023 Impressões 3D do Gabriel. Todos os direitos reservados.</p>
        </div>
    </div>
    `;
    
    // Injetar o rodapé no elemento <footer>
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
        footerElement.classList.add('footer');
    }
}); 