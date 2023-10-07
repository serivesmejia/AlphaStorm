import { fetchJson } from "./fetcher"

export interface KpPrediction {
    model_prediction_time: string
    k: number
}

export interface KpPredictionHistory {
    predictions: KpPrediction[]
}

export function fetchKpPredictionHourlyHistory(callback: (data: KpPredictionHistory) => void) {
    fetchJson("https://services.swpc.noaa.gov/json/geospace/geospace_pred_est_kp_1_hour.json", callback)
}

export function fetchKpPrediction7dayHistory(callback: (data: KpPredictionHistory) => void) {
    fetchJson("https://services.swpc.noaa.gov/json/geospace/geospce_pred_est_kp_7_day.json", callback)
}