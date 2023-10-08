export function getHourFromUTCDate(date: string): string {
    let split = date.split("T")

    let day = split[0]
    let hour = split[1].replace("Z", "")

    return hour;
}

export function getHourFromNOAADate(date: string): string {
    let split = date.split(" ")

    let day = split[0]
    let hour = split[1]

    return hour;
}

export function utcHourMinus(utcHour: string, minus: number): string {
    let split = utcHour.split(":")

    let hour = parseInt(split[0]) - minus

    return hour + ":" + split[1] + ":" + split[2]
}