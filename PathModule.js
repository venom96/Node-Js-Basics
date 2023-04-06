const path = require("node:path");

console.log("My File Path", path.basename("C:\\temp\\myfile.html"));

const a = path.dirname("C:\\temp\\myfile.html");
const b = path.extname("C:\\temp\\myfile.html");

console.log("Path Dirname", a);
console.log("Path Extension", b);

console.log("Path Extension of Current File", __filename);
 