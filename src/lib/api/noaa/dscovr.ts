import { fetchJson } from "$lib/api/fetcher"

export interface DscovrDataStep {
    time_tag: string
    bt: Number
    bx_gse: Number
    by_gse: Number
    bz_gse: Number
    theta_gse: Number
    phi_gse: Number
    bx_gsm: Number
    by_gsm: Number
    bz_gsm: Number
    theta_gsm: Number
    phi_gsm: Number
}

export interface DscovrDataHistory {
    data: DscovrDataStep[]
}

export function fetchDscovr(callback: (data: DscovrDataHistory) => void) {
    fetchJson("https://services.swpc.noaa.gov/json/dscovr/dscovr_mag_1s.json", callback)
}