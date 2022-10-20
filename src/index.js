export const checkInn = (inn) => {
    if (inn.includes(' ')) return false
    if (!/\d+$/.test(inn)) return false

    const len = inn.length
    if (inn.length !== 10 && inn.length !== 12) return false

    const numbers = inn.split('')
    if (len === 10) {
        const cont_sum = 2 * numbers[0] + 4 * numbers[1] + 10 * numbers[2] + 3 * numbers[3] + 5 * numbers[4] + 9 * numbers[5] + 4 * numbers[6] + 6 * numbers[7] + 8 * numbers[8]
        const cont_num = cont_sum % 11 % 10
        if (parseInt(numbers[9]) !== parseInt(cont_num)) return false
    }
    if (len === 12) {
        const cont_num1 = ((7 * numbers[0] + 2 * numbers[1] + 4 * numbers[2] + 10 * numbers[3] + 3 * numbers[4] + 5 * numbers[5] + 9 * numbers[6] + 4 * numbers[7] + 6 * numbers[8] + 8 * numbers[9]) % 11) % 10
        const cont_num2 = ((3 * numbers[0] + 7 * numbers[1] + 2 * numbers[2] + 4 * numbers[3] + 10 * numbers[4] + 3 * numbers[5] + 5 * numbers[6] + 9 * numbers[7] + 4 * numbers[8] + 6 * numbers[9] + 8 * numbers[10]) % 11) % 10

        const res1 = parseInt(numbers[10]) !== cont_num1
        const res2 = parseInt(numbers[11]) !== cont_num2

        if (res1 || res2) return false
    }

    return true
}