const { app, Menu } = require("electron");

module.exports = {
    setMainMenu
};

function setMainMenu() {
  const template = [];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
