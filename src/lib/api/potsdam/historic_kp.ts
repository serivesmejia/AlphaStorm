export interface PotsdamKpData {
    date: number
    Kp: number
}

// hours since january 1 1932
export function parseToAlphaTimestamp(year: number, month: number, day: number, hour: number): number {
    let yearsSince1932 = year - 1932
    var days = 0

    for(var i = 1 ; i <= month-1 ; i++) {
        if(year % 4 == 0 && month == 2) {
            days += 28
        } else if(month == 2) {
            days += 29
        } else if(month == 4 || month == 6 || month == 9 || month == 11) {
            days += 30
        } else {
            days += 31
        }
    }

    return 8760 * yearsSince1932 + days * 24 + hour
}

export function fetchPotsdamHistoricKP(callback: (data: PotsdamKpData[]) => void) {
    fetch("Kp_ap_since_1932.txt").then((out) => out.text())
        .then((text) => {
            console.log(text)
            let data: PotsdamKpData[] = []
            
            for(var i = 0 ; i < text.length ; i += 58) {
                let line = text.substring(i, i + 58)

                if(i == 0) {
                    console.log(line)
                }

                let entries = line.split(" ")
                let year = entries[0]
                let month = entries[1]
                let day = entries[2]
                let hour = entries[3]

                let kpIndexLocation = 47

                let Kp = text.substring(i + kpIndexLocation, i + kpIndexLocation + 5)

                data.push({
                    date: parseToAlphaTimestamp(parseInt(year), parseInt(month), parseInt(day), parseInt(hour)),
                    Kp: parseFloat(Kp)
                })

                i += 2;
            }

            callback(data)
        })
}