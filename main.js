








let input = getInput(0)

function convert(num){;
    // let measurement = ''
return num * 2.54 
}

let sentence = " converted is:"
let result = input + "cm " + sentence + " " + convert(input) + ' inches'

console.log(result)



















function getInput(n) {
    return process.argv[n + 2];
}