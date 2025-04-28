# UAI LAB 3D - Site de E-commerce para Empresa de Impressão 3D

Este repositório contém um site de e-commerce completo para uma empresa de impressão 3D chamada "UAI LAB 3D". O site foi desenvolvido para atender tanto clientes B2C (consumidores finais) quanto B2B (empresas).

## Estrutura do Projeto

```
impressao3d/
├── css/
│   └── style.css          # Estilos principais do site
├── js/
│   └── main.js            # Javascript principal
├── img/                   # Imagens do site
├── pages/
│   ├── loja.html          # Catálogo de produtos padronizados
│   ├── personalizados.html # Serviço de personalização de produtos
│   ├── b2b.html           # Serviços para empresas
│   ├── blog.html          # Blog (a ser implementado)
│   ├── sobre.html         # Página Sobre Nós (a ser implementada)
│   ├── contato.html       # Página de Contato (a ser implementada)
│   ├── carrinho.html      # Carrinho de compras (a ser implementado)
│   └── login.html         # Login de usuário (a ser implementado)
└── index.html             # Página inicial
```

## Funcionalidades Implementadas

- **Página Inicial**: Apresentação da empresa, diferenciais, chamadas para ação e produtos em destaque.
- **Loja**: Catálogo de produtos padronizados com filtros por categoria.
- **Produtos Personalizados**: Upload de arquivos STL/OBJ e seleção de material/cor para impressão 3D personalizada.
- **Serviços para Empresas (B2B)**: Soluções industriais e formulário de pedido de orçamento.
- **Carrinho de Compras**: Funcionalidade básica baseada em localStorage.
- **Design Responsivo**: Layout adaptável para desktop, tablet e dispositivos móveis.
- **WhatsApp Integrado**: Botão flutuante para contato direto via WhatsApp.

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e flexbox/grid)
- JavaScript (vanilla)
- Font Awesome para ícones
- Design responsivo (mobile-first)

## Instalação e Uso

1. Clone este repositório
2. Não são necessárias dependências ou configurações especiais - o site funciona diretamente no navegador
3. Abra o arquivo `index.html` em seu navegador ou use um servidor web local

## Próximos Passos (A Implementar)

- Integração com sistemas de pagamento (Stripe, Mercado Pago ou PagSeguro)
- Sistema de cadastro de clientes (PF e PJ)
- Área do cliente para acompanhamento de pedidos
- Páginas adicionais (Blog, Sobre Nós, Contato)
- Sistema de administração para gerenciamento de produtos e pedidos

## Personalização do Site

Para personalizar o site para uma marca específica:

1. Substituir as referências a "UAI LAB 3D" pelo nome de sua empresa
2. Atualizar o arquivo `css/style.css` com as cores da sua marca
3. Substituir as imagens na pasta `img/` por imagens reais dos seus produtos e serviços
4. Atualizar informações de contato no rodapé

## Contato

Para mais informações ou suporte, entre em contato pelo e-mail: contato@ualab3d.com.br

## Licença

Todos os direitos reservados. 