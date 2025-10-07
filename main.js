const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1600,
        height: 1020,
        icon: './FRONT-END/Assets/imagens/logos/logo THUU.png',
        autoHideMenuBar: true
    })

    win.loadFile('./FRONT-END/index.html');
    
}

app.whenReady().then(() => {
    createWindow();
});