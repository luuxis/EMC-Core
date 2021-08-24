const { MCAuth, MCLaunch } = require('./index')
const launcher = new MCLaunch();

let authenticator;

MCAuth.auth("test").then(user => {
  authenticator = user;
  //success
}).catch(error => {
  //error
})

let opts = {
    url: "http://zeldown.com/emc-core/",
    overrides: {
      detached: false
    },
    authorization: authenticator,
    root: "./.emc-core",
    version: "1.15.2",
    forge: "1.15.2",
    checkFiles: true,
    memory: {
        max: "6G",
        min: "4G"
    }
}


launcher.launch(opts);

launcher.on('debug', (e) => console.log("[DEBUG]" + e));