const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let url;
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:8080/";
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}

app.on("ready", () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.loadURL(url);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
