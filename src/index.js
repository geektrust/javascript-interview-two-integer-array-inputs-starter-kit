
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
    handle(arr1, arr2)
}


/*
 * Use this method to write your solution. 
 * arr1 - Integer array
 * arr2 - Integer array
 */
function handle(arr1, arr2) {
    console.log('arr1:', arr1)
    console.log('arr2:', arr2)
    //TODO: implement the logic to handle each input
}

main()