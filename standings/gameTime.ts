function formatHHMM(date: Date): string {
    function z(n: number){return (n < 10 ? '0' : '') + n}
    var h = date.getHours()
    return `${h % 12}:${z(date.getMinutes())} ${(h < 12 ? 'AM' : 'PM')}`
}

export default function gameTime(gameDate: string): string {
    const timeRaw = new Date(gameDate)
    const gt = formatHHMM(timeRaw)
    return gt
}

