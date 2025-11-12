# Travessia v1.3 — A Obra → O Silêncio (HTML puro)

**Filosofia**: A Obra é o lugar da entrega; O Silêncio, o lugar da escuta. Sem ruído de “sucesso/obrigado”.

## Como usar
1. Abra `index.html` localmente ou publique em qualquer estático (GitHub Pages, Vercel, Netlify).
2. No topo do `<script>`, ajuste o e-mail alvo:
   ```js
   const EMAIL_TO = "contato@loescheoraculo.com";
   ```
3. O botão **Entrego em confiança.** abre o cliente de e-mail padrão com o texto e redireciona para **O Silêncio**.
4. Atalho: **Ctrl+Enter** também envia.
5. Para testar diretamente a página do silêncio, abra `index.html?auto=silencio`.

## Observações
- Sem dependências externas, sem coleta de dados: apenas `mailto:`.
- Se o cliente de e-mail do usuário não estiver configurado, o click abrirá o app padrão do sistema (ou nada). Em breve você pode acoplar um form backend se quiser.

## Estrutura
```
/travessia-v1_3-obra-silencio
  ├─ index.html
  ├─ README.md
  └─ .nojekyll          # útil para GitHub Pages
```

## GitHub Pages (passos rápidos)
1. Faça upload da pasta para um repositório.
2. Em **Settings → Pages**, escolha **Source: Deploy from a branch**, branch `main`, root `/`.
3. Aguarde a URL ficar disponível e abra.

Com carinho — Loesch & Oráculo.
