process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    console.log(/^[a-z][a-z0-9]*@[a-z0-9]+\.([a-z0-9]+\.){0,1}[a-z]{2,3}$/gm.test(input) ? 'Valid' : 'Invalid');
});