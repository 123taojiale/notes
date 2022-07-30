const {app, BrowserWindow, ipcMain} = require('electron')

let win

app.on('ready', () => {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.loadFile('./index.html')
  win.webContents.openDevTools()
  handleIPC()
})

function handleIPC() {
  ipcMain.on('do-some-work', function (e, a, b) {
    // do some work
    console.log('do-some-work', a,b)
  })
}