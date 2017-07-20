const {Menu} = require('electron').remote

menu = Menu.buildFromTemplate([
    {
        label: 'TudoBom',
        submenu: [
            {
                label: 'Settings',
                click: toggleSettings()
            }
        ]
    },
    {
        label: 'File',
        submenu: [
            {
                label: 'New Note',
                click: newNote(),
                accelerator: 'Cmd+n',
            }
        ]
    },
])

Menu.setApplicationMenu(menu)

function newNote() {}
function toggleSettings() {}
