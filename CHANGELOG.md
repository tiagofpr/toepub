# Changelog

Todas as mudanças do app ficam registradas aqui. O projeto segue [versionamento semântico](https://semver.org/lang/pt-BR/):

- **MAJOR** (2.0.0): mudança que quebra o uso atual (ex.: formato de EPUB diferente, configurações apagadas).
- **MINOR** (1.1.0): recurso novo compatível com o que já existe.
- **PATCH** (1.1.1): correção de erro sem recurso novo.

## [1.2.0] — 2026-11-14

### Adicionado
- **Menu de configurações** (botão ⚙️ no topo):
  - **Temas:** Automático (segue o sistema), Claro, Escuro, Sépia, Preto (AMOLED) e Alto contraste.
  - **Cor de destaque:** verde, azul, roxo, laranja, rosa ou grafite.
  - **Tamanho do texto** da interface em 4 níveis.
  - **Prévia do livro:** fonte (serifa, sem serifa, mono), tamanho da letra, espaçamento entre linhas e alinhamento.
  - **Comportamento:** confirmar antes de excluir capítulos, ir para a prévia ao terminar, animações.
  - **Dados:** restaurar padrões de conversão, restaurar aparência, limpar histórico.
  - **Sobre:** versão atual, links para novidades e código, botão “Procurar atualização”.
- Todas as preferências ficam salvas no aparelho, e o tema é aplicado antes de a página aparecer, sem piscar.

## [1.1.0] — 2026-11-14

### Corrigido
- **Enviar para o Kindle** dava erro “Permission denied” no Android. Navegadores baseados no Chrome (Chrome, Brave, Edge, Samsung Internet) não permitem compartilhar arquivos EPUB. Agora o app baixa o arquivo e mostra o passo a passo para enviar pelo app Kindle, pelo site Send to Kindle ou por e-mail. Onde o navegador permite (ex.: iPhone), o menu Compartilhar continua sendo usado.

### Adicionado
- Número da versão no rodapé do app.
- Este CHANGELOG e as tags de versão no Git.

## [1.0.0] — 2026-11-14

### Adicionado
- Conversão de PDF em EPUB no layout original (páginas como imagem) ou em texto adaptável.
- Figuras, gráficos e tabelas extraídos no meio do texto.
- Capítulos pelo sumário do PDF ou pelos títulos do texto.
- Prévia com editor: renomear, juntar, dividir e excluir capítulos ou trechos; excluir páginas no layout fixo.
- Configurações avançadas: idioma, intervalo de páginas, capa, tons de cinza, remoção de cabeçalhos e rodapés.
- PWA instalável, offline e no menu Compartilhar do Android.
- Aviso para arquivos acima de 50 MB, botão Cancelar e configurações salvas.
