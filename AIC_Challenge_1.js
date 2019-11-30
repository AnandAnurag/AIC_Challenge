process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    let s = [];
    let b = "";
    let i_a = input.split("");
    let t_idx = -1;
    let pair = {'{':'}', '(': ')', '[': ']'};
    i_a.forEach(d => {
        if(/{|}|\(|\)|\[|\]/.test(d)) {
            let top = s[t_idx];
            if(top && pair[top] && pair[top] == d) {
                s.pop();
                t_idx--;
            } else {
                s.push(d);
                t_idx++;
            }
            b += d;
        }
    });
    console.log(`${!s.length && 'Y' || 'N'} ${b}`);
});