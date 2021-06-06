const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();

let version = null;
let path = null;

process.argv.forEach(function (val, index, array) {
    if(val.startsWith('--v')) {
        version = val.split('=')[1];
    }
});

let opts = {
    clientPackage: null,
    authorization: Authenticator.getAuth("webconfig", ""),
    root: "./web/files/files",
    version: {
        number: version,
        type: "release"
    },
    memory: {
        max: "1G",
        min: "1G"
    }
}

let mc = launcher.launch(opts);

launcher.on('debug', (e) => {
   console.log(e);
});

launcher.on('close', (e) => {
    console.clear()
    console.log("Le jeux est fermer.")
});