function calculateAverage (numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }

    return sum / numbers.length;
}