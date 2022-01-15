export default function limitNumber(num: number, max: number, min = 0) {
    if (num > max) return min
    if (num < min) return max

    return num
}
