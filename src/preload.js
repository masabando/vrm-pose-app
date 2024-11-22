// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { ipcRenderer } = require('electron');

window.addEventListener('load', () => {
  //document.body.insertAdjacentHTML('afterbegin', "<div>hogehoge</div>");

  document.body.style.WebkitAppRegion = "drag";
  setTimeout(() => {
    document.querySelectorAll("button, select, input").forEach((e) => {
      e.style.WebkitAppRegion = "no-drag";
    })
  }, 5000);

  window.addEventListener("keydown", (e) => {
    console.log(e.key)
    switch (e.key) {
      case " ":
        ipcRenderer.send("keydown", "space");
        break;
    }
  })
});
