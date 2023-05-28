import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AirportCountry, AirportRegion, AirportType } from "../../models/models"

interface HandBookState {
    loading: boolean
    types: AirportType[]
    regions: AirportRegion[]
    countries: AirportCountry[]
}

interface HandBookPayload {
    types: AirportType[]
    regions: AirportRegion[]
    countries: AirportCountry[]
}

const initialState: HandBookState = {
    loading: false,
    types: [],
    regions: [],
    countries: []
}

export const handBookSlice = createSlice({
    name: 'handBook',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<HandBookPayload>) {
            state.loading = false
            state.types = action.payload.types
            state.regions = action.payload.regions
            state.countries = action.payload.countries
        }
    }
});

export default handBookSlice.reducer;