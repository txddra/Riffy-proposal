








let input = getInput(0)
let input2 =getInput(1)

let sentence = " converted is:"
let converted = "";
let result = input + input2 + sentence + " " + convert(input, input2) + converted
 


function convert(num, measurement){;
    // let measurement = ''

if( measurement === 'cm'){
    converted = "inches"
    return num * 2.54 ;
}
else if (measurement === 'in'){
    converted = "cm"
    return num / 2.54;
}
else if(measurement === 'feet'){
converted = "inches"
return num * 12;
}
else if (measurement ==='inches'){
converted = "feet"
return num / 12
}
}


if(input === undefined){
   console.log( 'please input a number for conversion')
}else{
console.log(result)
}






















function getInput(n) {
    return process.argv[n + 2];
}