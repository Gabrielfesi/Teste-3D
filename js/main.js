document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo para dispositivos móveis
    const setupMobileMenu = () => {
        const header = document.querySelector('header');
        
        if (header) {
            const hamburgerBtn = document.createElement('div');
            hamburgerBtn.className = 'hamburger-menu';
            hamburgerBtn.innerHTML = '<span></span><span></span><span></span>';
            
            header.querySelector('.container').insertBefore(
                hamburgerBtn, 
                header.querySelector('.cart-user')
            );
            
            hamburgerBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                header.querySelector('nav').classList.toggle('active');
            });
        }
    };
    
    // Inicializar carrossel (se existir)
    const initCarousel = () => {
        // Implementação simples de carrossel (pode ser substituída por uma biblioteca como Swiper.js)
        const carousels = document.querySelectorAll('.carousel');
        
        carousels.forEach(carousel => {
            const slides = carousel.querySelectorAll('.slide');
            const nextButton = carousel.querySelector('.next');
            const prevButton = carousel.querySelector('.prev');
            let currentSlide = 0;
            
            if (slides.length === 0) return;
            
            // Exibir o primeiro slide
            slides[0].classList.add('active');
            
            // Configurar navegação
            const showSlide = (index) => {
                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');
                currentSlide = index;
            };
            
            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    const nextIndex = (currentSlide + 1) % slides.length;
                    showSlide(nextIndex);
                });
            }
            
            if (prevButton) {
                prevButton.addEventListener('click', () => {
                    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
                    showSlide(prevIndex);
                });
            }
            
            // Auto-rotação do carrossel (opcional)
            setInterval(() => {
                if (document.visibilityState === 'visible') {
                    const nextIndex = (currentSlide + 1) % slides.length;
                    showSlide(nextIndex);
                }
            }, 5000);
        });
    };
    
    // Funcionalidade de filtro para a loja (se existir)
    const setupProductFilter = () => {
        const filterButtons = document.querySelectorAll('.filter-button');
        const products = document.querySelectorAll('.product-card');
        
        if (filterButtons.length === 0 || products.length === 0) return;
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover classe ativa de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                
                // Filtrar produtos
                products.forEach(product => {
                    if (category === 'all') {
                        product.style.display = 'block';
                    } else {
                        if (product.getAttribute('data-category') === category) {
                            product.style.display = 'block';
                        } else {
                            product.style.display = 'none';
                        }
                    }
                });
            });
        });
    };
    
    // Funcionalidade do carrinho de compras (simulada)
    const setupCart = () => {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartCountDisplay = document.querySelector('.cart-count');
        
        // Obter carrinho do localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Atualizar contador do carrinho
        const updateCartCount = () => {
            if (cartCountDisplay) {
                cartCountDisplay.textContent = cart.length;
            }
        };
        
        // Inicializar contador
        updateCartCount();
        
        // Adicionar eventos aos botões "Adicionar ao Carrinho"
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                const productCard = button.closest('.product-card');
                if (!productCard) return;
                
                const productName = productCard.querySelector('h3').textContent;
                const productPrice = productCard.querySelector('.price').textContent;
                const productImage = productCard.querySelector('img').src;
                
                // Adicionar produto ao carrinho
                cart.push({
                    id: Date.now(), // ID único simples
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                });
                
                // Salvar no localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Atualizar contador
                updateCartCount();
                
                // Feedback visual (opcional)
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-notification';
                notification.textContent = 'Produto adicionado ao carrinho!';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.classList.add('show');
                    
                    setTimeout(() => {
                        notification.classList.remove('show');
                        setTimeout(() => {
                            document.body.removeChild(notification);
                        }, 300);
                    }, 2000);
                }, 10);
            });
        });
    };
    
    // Formulário de upload de arquivo para personalização
    const setupFileUpload = () => {
        const fileUpload = document.querySelector('.file-upload');
        if (!fileUpload) return;
        
        const fileInput = fileUpload.querySelector('input[type="file"]');
        const filePreview = fileUpload.querySelector('.file-preview');
        
        if (fileInput && filePreview) {
            fileInput.addEventListener('change', () => {
                const file = fileInput.files[0];
                
                if (file) {
                    // Verificar tipo de arquivo (STL, OBJ)
                    const validTypes = ['model/stl', 'model/obj', 'application/octet-stream'];
                    let isValid = false;
                    
                    // Verificar por extensão (fallback)
                    const extension = file.name.split('.').pop().toLowerCase();
                    if (extension === 'stl' || extension === 'obj') {
                        isValid = true;
                    }
                    
                    if (isValid) {
                        const fileName = file.name;
                        filePreview.innerHTML = `
                            <div class="file-info">
                                <i class="fas fa-file-code"></i>
                                <span>${fileName}</span>
                                <small>(${(file.size / (1024 * 1024)).toFixed(2)} MB)</small>
                            </div>
                        `;
                        filePreview.classList.add('has-file');
                    } else {
                        alert('Por favor, envie apenas arquivos STL ou OBJ.');
                        fileInput.value = '';
                    }
                }
            });
        }
    };
    
    // Formulário de contato/orçamento
    const setupForms = () => {
        const forms = document.querySelectorAll('form:not(.newsletter-form)');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Simular envio do formulário
                const submitButton = form.querySelector('button[type="submit"]');
                if (submitButton) {
                    const originalText = submitButton.textContent;
                    submitButton.disabled = true;
                    submitButton.textContent = 'Enviando...';
                    
                    // Simular tempo de resposta do servidor
                    setTimeout(() => {
                        form.reset();
                        submitButton.textContent = 'Enviado com Sucesso!';
                        
                        setTimeout(() => {
                            submitButton.disabled = false;
                            submitButton.textContent = originalText;
                        }, 2000);
                    }, 1500);
                }
            });
        });
    };
    
    // Efeito de revelação ao rolar a página
    const setupScrollReveal = () => {
        const revealElements = document.querySelectorAll('.reveal');
        
        const reveal = () => {
            const windowHeight = window.innerHeight;
            
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', reveal);
        // Revelar os elementos visíveis na carga inicial
        reveal();
    };
    
    // Inicializar todas as funcionalidades
    setupMobileMenu();
    initCarousel();
    setupProductFilter();
    setupCart();
    setupFileUpload();
    setupForms();
    setupScrollReveal();
}); 