document.addEventListener('DOMContentLoaded', function() {
    // Determinar se estamos na pasta principal ou em uma subpasta
    const currentPath = window.location.pathname;
    const isSubfolder = currentPath.includes('/pages/');
    const homePrefix = isSubfolder ? '../' : '';
    const pagesPrefix = isSubfolder ? '' : 'pages/';
    
    // Criar o HTML do rodapé
    const footerHTML = `
    <div class="container">
        <div class="footer-content">
            <div class="footer-logo">
                <h2>Impressões 3D do Gabriel</h2>
                <p>Transformando ideias em realidade</p>
            </div>
            <div class="footer-contact">
                <h3>Contato</h3>
                <p><i class="fas fa-map-marker-alt"></i> Av. Tecnologia, 1000 - Belo Horizonte, MG</p>
                <p><i class="fas fa-phone"></i> (31) 3333-3333</p>
                <p><i class="fas fa-envelope"></i> contato@gabriel3d.com.br</p>
            </div>
            <div class="footer-links">
                <h3>Links Rápidos</h3>
                <ul>
                    <li><a href="${homePrefix}index.html">Home</a></li>
                    <li><a href="${pagesPrefix}servicos.html">Serviços</a></li>
                    <li><a href="${pagesPrefix}projetos.html">Projetos</a></li>
                    <li><a href="${pagesPrefix}loja.html">Loja</a></li>
                    <li><a href="${pagesPrefix}b2b.html">B2B</a></li>
                    <li><a href="${pagesPrefix}blog.html">Blog</a></li>
                    <li><a href="${pagesPrefix}sobre.html">Sobre</a></li>
                    <li><a href="${pagesPrefix}contato.html">Contato</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <h3>Redes Sociais</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Impressões 3D do Gabriel. Todos os direitos reservados.</p>
        </div>
    </div>
    `;
    
    // Injetar o rodapé no elemento <footer>
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}); 