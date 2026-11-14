# PDF para EPUB

Converte PDF em EPUB direto no navegador, no celular ou no computador. O arquivo não sai do aparelho.

**Abrir o app:** https://tiagofpr.github.io/toepub/

## Recursos

- **Layout original:** cada página vira imagem (ideal para PDFs escaneados ou com diagramação complexa).
- **Texto adaptável:** texto que se ajusta à tela, com capítulos pelo sumário do PDF ou pelos títulos, e fotos, gráficos e tabelas no lugar onde aparecem.
- Prévia com editor: renomear, juntar, dividir e excluir capítulos ou trechos antes de baixar.
- Capa, intervalo de páginas, imagens em tons de cinza para leitores de tinta eletrônica.
- PWA: instalável, funciona offline e aparece no menu **Compartilhar** do Android.
- Botão para enviar o EPUB direto ao app do Kindle, Kobo etc.

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | O app inteiro (HTML, CSS e JavaScript) |
| `manifest.webmanifest` | Instalação como app e recebimento de PDFs pelo Compartilhar |
| `sw.js` | Cache offline e recepção do arquivo compartilhado |
| `icon*.png`, `icon.svg` | Ícones |

Bibliotecas: [PDF.js](https://mozilla.github.io/pdf.js/) 3.11 e [JSZip](https://stuk.github.io/jszip/) 3.10, carregadas do cdnjs.

Ao mudar o `index.html`, aumente `VERSION` em `sw.js` para os aparelhos baixarem a nova versão.
