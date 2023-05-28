import { AppDispatch } from '..';
import axios from "../../axios";
import { IAirport, IServerResponse } from '../../models/models';
import { airportSlice } from '../slices/airportSlice';

export const fetchAirports = (page: number = 1, count: number = 50) => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(airportSlice.actions.fetching());
            const response = await axios.get<IServerResponse<IAirport>>('airports', {
                params: {
                    count,
                    page
                }
            });
            dispatch(airportSlice.actions.fetchSuccess({
                airports: response.data.results,
                count: response.data.count
            }));
        } catch(e) {
            dispatch(airportSlice.actions.fetchError(e as Error))
        }
    }
}