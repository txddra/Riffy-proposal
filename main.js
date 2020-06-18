








let input = getInput(0)

function convert(num){;
    // let measurement = ''
return num * 2.54 
}

let sentence = " converted to inches is:"
let result = input + " " + sentence + " " + convert(input)

console.log(result)



















function getInput(n) {
    return process.argv[n + 2];