export default function gameDate(): string {
    const today = new Date()
    return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
}
