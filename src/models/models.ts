export interface IAirport {
    id: number
    name: string
    ident: string
    local_code: string
    region: string
    type: string
    country: string
}

export interface IServerResponse<T> {
    count: number
    next: number
    previous: number
    results: T[]
}

export type AirportType = string
export type AirportRegion = string
export type AirportCountry = string

export interface IFilter {
    type: AirportType
    region: AirportRegion
    country: AirportCountry
}

export interface IAirportDetail {
    continent: number
    coordinates: string
    country: string
    elevation_ft: any
    gps_code: string
    iata_code: string
    ident: string
    local_code: string
    municipality: string
    name: string
    region: string
    type: string
  }