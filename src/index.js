const handle = require('./solution');
/*
* This is the main entry point for the program. It will parse the input for you.
* You don't need to change this.
*/
function main() {
    const input = process.argv.slice(2)
    if (input.length === 0) {
        throw new Error("No argument passed")
    }
    const arr1 = JSON.parse(input[0])
    const arr2 = JSON.parse(input[1])
    const output = handle(arr1, arr2)
    console.log(output)
}

main()