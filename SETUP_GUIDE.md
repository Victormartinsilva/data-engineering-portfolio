# 🚀 Guia Completo de Setup - Victor Martins da Silva Portfolio

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
git config --global user.name "Victor Martins da Silva"
git config --global user.email "victoreagri@gmail.com"
```

### 2. Inicializar Repositório Git
```bash
git init
git add .
git commit -m "Initial commit: Victor Martins da Silva portfolio"
```

### 3. Conectar ao GitHub
1. Crie um repositório no GitHub chamado `victor-martins-portfolio`
2. Conecte o repositório local:
```bash
git remote add origin https://github.com/Victormartinsilva/victor-martins-portfolio.git
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
update: atualiza informações do perfil
```

## ☁️ Deploy no Vercel

### 1. Conectar GitHub ao Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `victor-martins-portfolio`

### 2. Configurações do Deploy
- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Deploy Automático
- Qualquer push para `main` fará deploy automático
- Preview deployments para outras branches
- URL: **https://victor-martins-portfolio.vercel.app**

## 📁 Estrutura de Arquivos Importantes

```
victor-martins-portfolio/
├── src/
│   ├── components/          # Componentes Astro
│   │   ├── home.astro      # Seção principal
│   │   ├── journey.astro   # Jornada profissional
│   │   ├── projects.astro  # Projetos
│   │   └── skills.astro    # Habilidades
│   ├── pages/              # Páginas do site
│   ├── layouts/            # Layouts base
│   └── React/              # Componentes React
│       ├── SkillsList.tsx  # Lista de habilidades
│       └── LetterGlitch.tsx # Efeito visual
├── public/                 # Arquivos estáticos
├── astro.config.mjs       # Configuração Astro
├── vercel.json            # Configuração Vercel
├── package.json           # Dependências
└── README.md              # Documentação
```

## 🎨 Personalização

### Informações Pessoais
- **Contato**: `src/components/home.astro` (email, WhatsApp, LinkedIn)
- **Sobre**: `src/components/journey.astro` (história profissional)
- **Footer**: `src/components/footer.astro` (links e copyright)

### Projetos
- **Lista de projetos**: `src/components/projects.astro`
- **Adicionar novo projeto**: Inclua na array `projects` com:
  - Título, imagem, link do GitHub
  - Seções: Desafio, Solução, Impacto, Stack

### Habilidades Técnicas
- **Skills**: `src/React/SkillsList.tsx`
- **Categorias**: Análise de Dados, SQL, Programação
- **Tecnologias**: `src/components/logoWall.astro`

### Cores e Tema
- **Variáveis CSS**: `src/layouts/Layout.astro`
- **Cor principal**: `--sec: #F28705` (laranja)
- **Background**: `--background: #101010` (escuro)

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

## 📊 Informações do Perfil Atual

- **Nome**: Victor Martins da Silva
- **Formação**: Engenheiro Agrícola (UNIOESTE, 2017-2023)
- **Foco**: Transição para Engenharia de Dados
- **Especialidades**: Power BI, Python, SQL, R, Excel
- **Contato**: victoreagri@gmail.com
- **WhatsApp**: (45) 99922-5862

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

🎉 **Parabéns!** Seu portfólio está personalizado e pronto para impressionar recrutadores na área de dados!