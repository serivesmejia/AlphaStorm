import { fetchJson } from "../fetcher"

export interface NOAAKpData {
    time_tag: string
    Kp: Number
    a_running: Number
    station_count: Number
}

export function fetchKpLatest3h(callback: (data: NOAAKpData[]) => void) {
    fetchJson("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json", (d: Array<string[]>) => {
    let kpDatas: NOAAKpData[] = []    
    
        for(var i = 1 ; i < d.length ; i++) {
            let step = d[i]

            let data: NOAAKpData = {
                time_tag: step[0],
                Kp: parseFloat(step[1]),
                a_running: parseFloat(step[2]),
                station_count: parseFloat(step[3])
            }

            kpDatas.push(data)
        }

        callback(kpDatas)
    })
}