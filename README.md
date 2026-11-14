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

## Versionamento

A versão atual aparece no rodapé do app, e o histórico fica no [CHANGELOG.md](CHANGELOG.md).

Para lançar uma nova versão:

1. Atualize o número em **dois lugares**, sempre iguais:
   - `APP_VERSION` no `index.html` (ex.: `'1.2.0'`)
   - `VERSION` no `sw.js` (ex.: `'pdf-epub-1.2.0'`)
2. Registre as mudanças no `CHANGELOG.md`.
3. Faça o commit e crie a tag: `git tag v1.2.0 && git push --tags`.

Mudar o `VERSION` do `sw.js` é o que faz os aparelhos com o app instalado baixarem a versão nova; sem isso eles continuam usando a versão guardada no cache.
