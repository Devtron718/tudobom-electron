const {Menu, BrowserWindow} = require('electron').remote
const path = require('path')
const url = require('url')

menu = Menu.buildFromTemplate([
    {
        label: 'TudoBom',
        submenu: [
            {
                label: 'Settings',
                click: toggleSettings
            }
        ]
    },
    {
        label: 'File',
        submenu: [
            {
                label: 'New Note',
                click: newNote,
                accelerator: 'Cmd+n',
            }
        ]
    },
])

Menu.setApplicationMenu(menu)

function newNote() {
    newNote = new BrowserWindow({
        frame: false,
        width: 400,
        height: 400,
        webPreferences: {
          nodeIntegrationInWorker: true
        }
    })

    newNote.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
}

function toggleSettings() {
    // do da damn thang
    // create a settings var thats a browser window in the main
    // process, and talk to it via ipc.
    // then toggle it with this!
}
