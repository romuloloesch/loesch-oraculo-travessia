# Loesch & Oráculo — Travessia (Publicação via GitHub Pages)
Data: 2025-11-12T12:21:55.522193

Este pacote está pronto para publicação **profissional** no **GitHub Pages**, sem linhas de comando.
Basta fazer upload desta pasta completa para um repositório e **ao enviar para a branch `main` o site é publicado automaticamente** via GitHub Actions.

## Como publicar (100% pela web)
1. Crie no GitHub um repositório vazio chamado **loesch-oraculo-travessia** (Public).
2. Clique em **Add file → Upload files**.
3. **Arraste TODOS os arquivos e pastas deste pacote** (incluindo `.github/workflows/pages.yml`) para a tela de upload.
4. Clique **Commit changes**.
5. Aguarde ~30–60s: a aba **Actions** mostrará o job **Deploy Pages** rodando e publicando.
6. O site ficará acessível em:  
   `https://USERNAME.github.io/loesch-oraculo-travessia/`  
   (Substitua USERNAME pelo seu usuário GitHub.)

## Estrutura
- index.html
- travessia.html
- horizonte.html
- obra.html
- core/css/style.css
- core/js/transitions.js
- assets/favicon.png
- .github/workflows/pages.yml

## Domínio próprio
Depois de publicado, você pode apontar um domínio com um **CNAME** para `USERNAME.github.io` e criar um arquivo `CNAME` na raiz com `www.seudominio.com`.

— Protocolo: Construção Silenciosa

---

### Notas desta restauração (v1.1 + Obra/Silêncio)
- `obra.html` — campo livre, placeholder *“Conte-me, com suas palavras…”* e botão **“Entrego em confiança.”** (Ctrl+Enter).
- Abre o app de e-mail via `mailto` e redireciona automaticamente ao `silencio.html`.
- `silencio.html` — selo respirando com **ponte minimalista** (sem símbolo do infinito), apaga-se aos poucos.
- Sem dependências externas: HTML + CSS + JS puros.
