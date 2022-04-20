const div: string = ' Division'

function divisionName(id: number): string {
    switch (id) {
        case 200: return `Western ${div}`
        case 201: return `Eastern ${div}`
        case 202: return `Central ${div}`
        case 203: return `Western ${div}`
        case 204: return `Eastern ${div}`
        case 205: return `Central ${div}`
        default: return div
    }
}

export default divisionName
