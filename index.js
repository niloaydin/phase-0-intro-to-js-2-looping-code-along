function writeCards(arr, name) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`)
    }
    return newArr
}

function countDown(arg) {
    while (arg >= 0) {
        console.log(arg)
        arg--
    }
}
