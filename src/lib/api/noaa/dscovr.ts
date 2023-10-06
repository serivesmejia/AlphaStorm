import {json} from "$lib/api/noaa/fetcher"

export class Dscovr {

    constructor() {
        this.json = json("https://services.swpc.noaa.gov/json/dscovr/dscovr_mag_1s.json")
    }

    data() {
        return this.json.
    }

}