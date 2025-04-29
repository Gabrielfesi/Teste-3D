/**
 * Gerenciador do Menu Mobile
 * 
 * Este script implementa a funcionalidade do menu mobile usando o padrão Module.
 * O padrão Module permite encapsular funcionalidades e declarar variáveis privadas.
 */

// Mobile Menu Manager - Padrão Module para encapsular variáveis e funções privadas
const MobileMenuManager = (function() {
    // Variáveis privadas
    let mobileMenu = null;
    let overlay = null;
    let isMenuOpen = false;

    // Função para abrir o menu
    function openMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impede rolagem da página quando menu está aberto
            isMenuOpen = true;
        }
    }

    // Função para fechar o menu
    function closeMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Restaura rolagem da página
            isMenuOpen = false;
        }
    }

    // Função para criar o menu mobile dinamicamente
    function createMobileMenu() {
        // Remover menu existente para evitar duplicação
        const existingMenu = document.getElementById('mobile-nav');
        if (existingMenu) {
            existingMenu.remove();
        }

        // Criar novo menu mobile
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-nav';
        mobileMenu.id = 'mobile-nav';

        // Adicionar botão de fechar
        const closeButton = document.createElement('div');
        closeButton.className = 'close-menu';
        closeButton.innerHTML = '<i class="fas fa-times"></i>';
        closeButton.addEventListener('click', closeMenu);
        mobileMenu.appendChild(closeButton);

        // Criar lista de navegação
        const navList = document.createElement('ul');

        // Obter os links da navegação principal do header
        const mainNavLinks = document.querySelectorAll('header nav.desktop-nav ul li a');
        
        // Se a navegação principal já foi carregada, use os mesmos links
        if (mainNavLinks && mainNavLinks.length > 0) {
            console.log('Usando links do header para o menu mobile');
            
            // Adicionar cada link do header ao menu mobile
            mainNavLinks.forEach(link => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = link.href;
                anchor.textContent = link.textContent;
                
                // Verificar se o link está ativo
                if (link.classList.contains('active')) {
                    anchor.classList.add('active');
                }
                
                // Fechar o menu ao clicar em um link
                anchor.addEventListener('click', closeMenu);
                
                listItem.appendChild(anchor);
                navList.appendChild(listItem);
            });
        } else {
            // Fallback se o header ainda não foi carregado
            console.log('Header não encontrado, usando estrutura fixa para o menu mobile');
            
            // Obter o caminho atual para determinar a página ativa
            const currentPath = window.location.pathname.toLowerCase();
            const isInSubfolder = currentPath.includes('/pages/');
            const prefix = isInSubfolder ? '../' : '';
            const pagesPrefix = isInSubfolder ? '' : 'pages/';

            // Função para verificar se um link está ativo
            function isActive(path) {
                if (path === 'index.html' || path === '') {
                    return currentPath.endsWith('/') || 
                           currentPath.endsWith('/index.html') || 
                           currentPath === '/';
                }
                return currentPath.includes(path.toLowerCase());
            }

            // Estrutura de navegação (mesmo que header.js)
            const navLinks = [
                { text: 'Início', href: prefix + 'index.html', active: isActive('index.html') },
                { text: 'Sobre', href: prefix + pagesPrefix + 'sobre.html', active: isActive('sobre.html') },
                { text: 'Serviços', href: prefix + pagesPrefix + 'servicos.html', active: isActive('servicos.html') },
                { text: 'Projetos', href: prefix + pagesPrefix + 'projetos.html', active: isActive('projetos.html') },
                { text: 'Loja', href: prefix + pagesPrefix + 'loja.html', active: isActive('loja.html') },
                { text: 'B2B', href: prefix + pagesPrefix + 'b2b.html', active: isActive('b2b.html') },
                { text: 'Personalizados', href: prefix + pagesPrefix + 'personalizados.html', active: isActive('personalizados.html') },
                { text: 'Materiais', href: prefix + pagesPrefix + 'materiais.html', active: isActive('materiais.html') },
                { text: 'Blog', href: prefix + pagesPrefix + 'blog.html', active: isActive('blog.html') },
                { text: 'Contato', href: prefix + pagesPrefix + 'contato.html', active: isActive('contato.html') }
            ];

            // Adicionar links à lista
            navLinks.forEach(link => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = link.href;
                anchor.textContent = link.text;
                
                if (link.active) {
                    anchor.classList.add('active');
                }
                
                // Fechar o menu ao clicar em um link
                anchor.addEventListener('click', closeMenu);
                
                listItem.appendChild(anchor);
                navList.appendChild(listItem);
            });
        }

        mobileMenu.appendChild(navList);
        document.body.appendChild(mobileMenu);

        console.log('Menu mobile criado dinamicamente');
        return mobileMenu;
    }

    // Função de inicialização do menu mobile
    function init() {
        try {
            // Aguardar um breve momento para garantir que o header foi carregado
            setTimeout(() => {
                // Criar o menu mobile dinamicamente
                mobileMenu = createMobileMenu();

                // Verificar se o elemento do menu toggle existe
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                if (!menuToggle) {
                    console.log('Criando botão de menu mobile');
                    // Criar toggle de menu se não existir
                    const header = document.querySelector('header');
                    if (header) {
                        const toggle = document.createElement('div');
                        toggle.className = 'mobile-menu-toggle';
                        toggle.innerHTML = '<i class="fas fa-bars"></i>';
                        header.appendChild(toggle);
                        
                        // Adicionar evento de click
                        toggle.addEventListener('click', openMenu);
                    }
                } else {
                    // Adicionar evento de click ao toggle existente
                    menuToggle.addEventListener('click', openMenu);
                }

                console.log('Menu mobile inicializado com sucesso');
            }, 100); // Pequeno delay para garantir que o header foi carregado
        } catch (error) {
            console.error('Erro ao inicializar o menu mobile:', error);
        }
    }

    // Retornar API pública
    return {
        init: init,
        open: openMenu,
        close: closeMenu
    };
})();

// Inicializar o menu quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    MobileMenuManager.init();
}); 