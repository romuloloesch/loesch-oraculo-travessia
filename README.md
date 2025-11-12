# Travessia v1.3.1 — pacote completo (HTML puro)

Este pacote traz um site estático completo, sem dependências externas, com:
- `index.html` — Início e explicação do ritual
- `obra.html` — Página **A Obra** (campo livre + botão)
- `silencio.html` — Página **O Silêncio** (selo respirando, agora com símbolo **ponte minimalista** para leitura intuitiva)
- `assets/` — CSS e JS modulares
- `.nojekyll` — para GitHub Pages

## Como usar (GitHub Pages)
1. Faça upload de **todos** os arquivos para o repositório (root).
2. Em *Settings → Pages*: Source = *Deploy from a branch*, Branch = `main`, Folder = `/ (root)`.
3. Abra: `https://<seu-usuario>.github.io/<seu-repo>/`

## Configuração do e-mail
Edite `assets/config.js`:
```js
window.TRAVESSIA_CONFIG = {
  emailTo: "contato@loescheoraculo.com",
  emailSubject: "Travessia — A Obra"
};
```
> O botão abre o cliente de e-mail via `mailto:` e, em seguida, conduz ao Silêncio. Fallback silencioso: copia o texto para a área de transferência.

## Rotas
- Início → `index.html`
- Obra → `obra.html`
- Silêncio → `silencio.html` (também acessível diretamente)

## Observações
- Mantive a estética escura e o dourado discreto, mas **substituí o ∞ vertical** por um **selo com SVG de ponte** (arco + pilares) dentro de um círculo que “respira”. Mais legível e arquetípico.
- Se quiser trocar o símbolo, substitua o conteúdo `<svg>` em `silencio.html`.

Com carinho — Loesch & Oráculo.
