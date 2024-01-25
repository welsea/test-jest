import Application from './application/application.js';

window.addEventListener("load", function(): void {
    let app: Application = new Application();
    app.init();
    console.log("Loaded and initialized app");
});
