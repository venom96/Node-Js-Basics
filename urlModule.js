import url from "url";
const myUrl = new URL("https://example.com");

myUrl.pathname = "/a/b/c";
myUrl.search = "?d=e";
myUrl.hash = "#fgh";

console.log(myUrl);
console.log(myUrl.href);
