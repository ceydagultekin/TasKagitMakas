const url=require("url");
const path =require("path");
const electron=require("electron");

const{app,BrowserWindow}=electron;

let mainWindow;

app.on('ready',() =>{

    mainWindow=new BrowserWindow({});

    //file://electron/main.html
    mainWindow.loadURL(
        url.format({
            pathname:path.join(__dirname,"main.html"),
            protocol:"file:",
            slashes:true       
        })
    );
});