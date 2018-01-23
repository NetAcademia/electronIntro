const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname);

let win;

app.on('ready', () => {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);
        
    win.webContents.openDevTools();
});