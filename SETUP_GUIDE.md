# 🚀 Guia Completo de Setup - Victor Silva Portfolio

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Git instalado
- Conta no GitHub
- Conta no Vercel

## 🛠️ Setup Local

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar Localmente
```bash
npm run dev
```
O site estará disponível em `http://localhost:4321`

### 3. Build para Produção
```bash
npm run build
```

## 🔧 Configuração do Git no Cursor

### 1. Configurar Git (primeira vez)
```bash
git config --global user.name "Victor Silva"
git config --global user.email "victor.silva@email.com"
```

### 2. Inicializar Repositório Git
```bash
git init
git add .
git commit -m "Initial commit: Victor Silva portfolio"
```

### 3. Conectar ao GitHub
1. Crie um repositório no GitHub chamado `victor-silva-portfolio`
2. Conecte o repositório local:
```bash
git remote add origin https://github.com/victor-silva/victor-silva-portfolio.git
git branch -M main
git push -u origin main
```

## 📤 Commits pelo Cursor

### Método 1: Interface Gráfica do Cursor
1. **Ctrl+Shift+G** para abrir o painel Git
2. Veja as mudanças na aba "Source Control"
3. Escreva uma mensagem de commit
4. Clique em "✓" para fazer commit
5. Clique em "..." → "Push" para enviar ao GitHub

### Método 2: Terminal Integrado do Cursor
1. **Ctrl+`** para abrir terminal
2. Adicionar arquivos:
```bash
git add .
```
3. Fazer commit:
```bash
git commit -m "feat: sua mensagem aqui"
```
4. Enviar para GitHub:
```bash
git push
```

### 📝 Padrão de Mensagens de Commit
```bash
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: mudanças de estilo/formatação
refactor: refatoração de código
```

## ☁️ Deploy no Vercel

### 1. Conectar GitHub ao Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `victor-silva-portfolio`

### 2. Configurações do Deploy
- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Deploy Automático
- Qualquer push para `main` fará deploy automático
- Preview deployments para outras branches
- URL personalizada disponível

## 📁 Estrutura de Arquivos Importantes

```
victor-silva-portfolio/
├── src/
│   ├── components/          # Componentes Astro
│   ├── pages/              # Páginas do site
│   ├── layouts/            # Layouts base
│   └── React/              # Componentes React
├── public/                 # Arquivos estáticos
├── astro.config.mjs       # Configuração Astro
├── vercel.json            # Configuração Vercel
├── package.json           # Dependências
└── README.md              # Documentação
```

## 🎨 Personalização

### Cores e Tema
- Edite as variáveis CSS em `src/layouts/Layout.astro`
- Cores principais: `--background`, `--sec`, `--white`

### Conteúdo
- **Informações pessoais**: `src/components/home.astro`
- **Projetos**: `src/components/projects.astro`
- **Jornada profissional**: `src/components/journey.astro`
- **Skills**: `src/React/SkillsList.tsx`

### Imagens e Assets
- Adicione imagens em `public/`
- Atualize referências nos componentes
- Substitua `favicon.png` por sua própria favicon

## 🔄 Workflow de Desenvolvimento

1. **Desenvolver localmente**:
   ```bash
   npm run dev
   ```

2. **Testar build**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Commit e push**:
   ```bash
   git add .
   git commit -m "feat: nova funcionalidade"
   git push
   ```

4. **Deploy automático** no Vercel após push

## 🆘 Troubleshooting

### Problemas Comuns
- **Build falha**: Verifique erros de TypeScript/lint
- **Deploy falha**: Confira logs no Vercel Dashboard
- **Git não funciona**: Configure credenciais do Git

### Comandos Úteis
```bash
# Verificar status do Git
git status

# Ver histórico de commits
git log --oneline

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Limpar cache do npm
npm cache clean --force
```

## 📞 Suporte

- **Documentação Astro**: https://docs.astro.build
- **Documentação Vercel**: https://vercel.com/docs
- **Documentação Git**: https://git-scm.com/docs

---

🎉 **Parabéns!** Seu portfólio está pronto para impressionar recrutadores!
