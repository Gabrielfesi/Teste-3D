/**
 * Script para atualizar todas as páginas para usar os componentes de cabeçalho e rodapé
 * Este script deve ser executado no Node.js
 */

const fs = require('fs');
const path = require('path');

// Lista de todas as páginas para atualizar
const pagesToUpdate = [
    'pages/servicos.html',
    'pages/projetos.html',
    'pages/materiais.html',
    'pages/loja.html',
    'pages/b2b.html',
    'pages/personalizados.html',
    'pages/blog.html',
    'pages/sobre.html',
    'pages/contato.html'
];

// Função para atualizar a página
function updatePage(filePath) {
    try {
        console.log(`Atualizando ${filePath}...`);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Substitui o cabeçalho
        content = content.replace(
            /<header>[\s\S]*?<\/header>/i,
            '<header>\n        <!-- O conteúdo do cabeçalho será inserido via JavaScript -->\n    </header>'
        );
        
        // Substitui o rodapé
        content = content.replace(
            /<footer>[\s\S]*?<\/footer>/i,
            '<footer>\n        <!-- O conteúdo do rodapé será inserido via JavaScript -->\n    </footer>'
        );
        
        // Adiciona os scripts antes do </body>
        if (!content.includes('header.js')) {
            content = content.replace(
                /<\/body>/i,
                '    <script src="../js/header.js"></script>\n    <script src="../js/footer.js"></script>\n    <script src="../js/main.js"></script>\n</body>'
            );
        }
        
        // Salva as alterações
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Página ${filePath} atualizada com sucesso.`);
    } catch (error) {
        console.error(`Erro ao atualizar ${filePath}:`, error);
    }
}

// Atualiza todas as páginas
pagesToUpdate.forEach(updatePage);

console.log('Todas as páginas foram atualizadas.'); 