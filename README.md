# 🚆 Projeto TCHUU-TCHUU Desktop

**TCHUU-TCHUU Desktop** é a versão para **computadores** do sistema web [TCHUU-TCHUU](https://tchuu-tchuu-front-end.onrender.com), desenvolvida com **Electron** e **JavaScript**.  
Essa aplicação oferece uma **interface local e multiplataforma**, mantendo integração total com o **Back-end Node.js** e o **banco de dados PostgreSQL**, permitindo o uso completo do sistema sem depender de navegadores.

---

## 🎯 Propósito

O objetivo do **TCHUU-TCHUU Desktop** é disponibilizar uma experiência mais **rápida, estável e integrada ao sistema operacional**, mantendo todas as funcionalidades do sistema web.  
A versão desktop serve como **cliente local** que se comunica diretamente com o back-end online do projeto.

---

## 🛠️ Tecnologias Utilizadas

### 🖥️ Aplicação Desktop
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="Electron" width="30"/> **Electron** — base para criação de aplicações desktop com tecnologias web.  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="30"/> **JavaScript** — responsável pela lógica de interface e comunicação com o back-end.  
- <img src="https://www.chartjs.org/media/logo-title.svg" alt="Chart.js" width="30"/> **Chart.js** — geração de gráficos dinâmicos na interface.  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="30"/> **HTML5** e  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="30"/> **CSS3** — estrutura e estilização da interface.

### ⚙️ Back-end (Integrado)
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="30"/> **Node.js**  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="30" style="background-color:#222; padding:4px; border-radius:6px;"/> **Express**  
- <img src="https://raw.githubusercontent.com/websockets/ws/master/doc/ws-logo.svg" alt="ws" width="30"/> **ws (WebSocket)** — comunicação em tempo real entre clientes e servidor.  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" width="35"/> **NPM** — gerenciamento de dependências do Node.js.  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="30"/> **PostgreSQL** — banco de dados relacional via [Neon.tech](https://neon.tech).

---

## 📦 Empacotamento e Distribuição

O projeto é empacotado com **Electron Forge**, permitindo gerar **executáveis (.exe, .deb, .AppImage)** facilmente.  

```bash
npm run make
