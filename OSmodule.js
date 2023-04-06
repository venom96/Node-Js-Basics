const os = require("os");

console.log("RAM", os.freemem());
console.log("Home Directory", os.homedir());
console.log("Host Name", os.hostname());
console.log("platform", os.platform());
console.log("release ver", os.release());
console.log("Uptime", os.uptime());
