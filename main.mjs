import App from "./App.mjs";

let input = "--foo --bar baz secondstring --number 1 --1 12340823051203 --wrong abedof";
//let input = ["--foo","--bar", "baz", "--number 1 35 --marko 1234 --over " ];
//let input = [["--foo","--bar"],[ "baz", "--number 1"]];

let result = new App(input).run();  

console.log(result);

