export const getCurrentTime = (date = new Date(), minTimeInMinutes?: number, maxTimeInMinutes?: number) => {
    const result = date.getHours() * 60 + date.getMinutes()
    if (minTimeInMinutes && result < minTimeInMinutes) return minTimeInMinutes
    else if (maxTimeInMinutes && result > maxTimeInMinutes) return maxTimeInMinutes

    return result
}
