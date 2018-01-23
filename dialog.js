const { app, dialog, nativeImage } = require('electron');
const fs = require('fs');
const path = require('path');

module.exports = {
    showDialog
};

function showDialog(win) {
    dialog.showMessageBox(
        win,
        {
            type: 'info',
            icon: nativeImage.createFromPath('./logo.png'),
            message: 'hello mi',
            detail: 'Ide tudunk irni valamiket amivel kommunikalni szeretnenk',
            buttons: ['Szent habakukk micimacko', 'Rekurzio'],
            defaultId: 0 
        },
        (clickedIndex) => {
            console.log('a megnyomott gomb id: ', clickedIndex);
        }
    );
}
