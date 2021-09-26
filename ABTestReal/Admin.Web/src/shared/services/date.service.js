export function toTimestamp(strDate) {
    console.log('strDate: ', strDate)
    var dateParts = strDate.split('.')
    const dt = new Date(
        +dateParts[2],
        dateParts[1] - 1,
        +dateParts[0]
    ).getTime()
    console.log('converted: ', dt)
    return dt / 1000
}

export function fromTimestamp(timestamp) {
    return new Date(timestamp * 1000).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    })
}
