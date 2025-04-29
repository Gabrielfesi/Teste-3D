/**
 * Implementação do Padrão Observer para o sistema de filtros
 * Este padrão permite que múltiplos observadores (cards de projetos)
 * respondam a mudanças em um assunto (seleção de filtro)
 */

class FiltroSubject {
    constructor() {
        this.observers = [];
        this.filtroAtual = 'all';
        this.contadorElement = document.getElementById('projetos-contador');
    }

    // Adiciona um novo observador à lista
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Remove um observador da lista
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Notifica todos os observadores sobre a mudança de filtro
    notifyAll() {
        this.observers.forEach(observer => observer.update(this.filtroAtual));
        this.atualizarContador();
    }

    // Define um novo filtro e notifica todos os observadores
    setFiltro(novoFiltro) {
        this.filtroAtual = novoFiltro;
        this.notifyAll();
    }
    
    // Atualiza o contador de projetos visíveis
    atualizarContador() {
        if (this.contadorElement) {
            // Conta quantos observadores estão visíveis com o filtro atual
            let projetosVisiveis = 0;
            
            if (this.filtroAtual === 'all') {
                projetosVisiveis = this.observers.length;
            } else {
                projetosVisiveis = this.observers.filter(obs => obs.categoria === this.filtroAtual).length;
            }
            
            // Atualiza o texto do contador com animação
            const valorAtual = parseInt(this.contadorElement.textContent);
            this.animarContador(valorAtual, projetosVisiveis);
        }
    }
    
    // Anima a contagem com efeito de incremento/decremento
    animarContador(valorInicial, valorFinal) {
        // Se não houver mudança, não faz nada
        if (valorInicial === valorFinal) return;
        
        const duracao = 500; // duração da animação em ms
        const inicio = Date.now();
        const diferenca = valorFinal - valorInicial;
        
        const atualizarValor = () => {
            const agora = Date.now();
            const tempo = agora - inicio;
            const progresso = Math.min(tempo / duracao, 1);
            
            // Fórmula de easing para uma animação mais natural
            const easingProgresso = progresso < 0.5 
                ? 2 * progresso * progresso 
                : 1 - Math.pow(-2 * progresso + 2, 2) / 2;
                
            const valorAtual = Math.round(valorInicial + diferenca * easingProgresso);
            this.contadorElement.textContent = valorAtual;
            
            if (progresso < 1) {
                requestAnimationFrame(atualizarValor);
            }
        };
        
        requestAnimationFrame(atualizarValor);
    }
}

class ProjectCardObserver {
    constructor(cardElement) {
        this.cardElement = cardElement;
        this.categoria = cardElement.dataset.category;
    }

    // Método chamado quando o filtro é alterado
    update(filtroAtivo) {
        if (filtroAtivo === 'all' || filtroAtivo === this.categoria) {
            this.cardElement.style.display = 'block';
            // Adiciona animação de fade-in
            this.cardElement.classList.add('card-visible');
        } else {
            this.cardElement.style.display = 'none';
            this.cardElement.classList.remove('card-visible');
        }
    }
}

// Inicializa o sistema de filtros quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona estilo para animação
    const style = document.createElement('style');
    style.textContent = `
        .content-card {
            transition: transform 0.3s ease, opacity 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
        }
        .card-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .counter-value {
            display: inline-block;
            transition: transform 0.2s ease;
        }
        .counter-value.pulse {
            transform: scale(1.2);
        }
    `;
    document.head.appendChild(style);

    // Cria o subject (assunto) do padrão Observer
    const filtroSystem = new FiltroSubject();
    
    // Cria observadores para cada card de projeto
    const projectCards = document.querySelectorAll('.content-card');
    projectCards.forEach(card => {
        const observer = new ProjectCardObserver(card);
        filtroSystem.subscribe(observer);
    });

    // Configura os botões de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona classe 'active' ao botão clicado
            button.classList.add('active');
            
            // Define o novo filtro
            const filtro = button.dataset.filter;
            filtroSystem.setFiltro(filtro);
        });
    });

    // Inicializa com o filtro 'all'
    filtroSystem.setFiltro('all');
    
    // Torna os cards visíveis após pequeno delay para permitir animação
    setTimeout(() => {
        projectCards.forEach(card => {
            card.classList.add('card-visible');
        });
    }, 100);
}); 