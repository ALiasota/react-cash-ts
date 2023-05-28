import { AppDispatch } from '..';
import axios from "../../axios";
import { AirportCountry, AirportRegion, AirportType } from '../../models/models';
import { handBookSlice } from '../slices/handBookSlice';

export const fetchHandBooks = () => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(handBookSlice.actions.fetching());
            const response = await Promise.all([
                axios.get<AirportType[]>('handbooks/airport-types'),
                axios.get<AirportRegion[]>('handbooks/regions'),
                axios.get<AirportCountry[]>('handbooks/countries'),
            ]);
            dispatch(handBookSlice.actions.fetchSuccess({
                types: response[0].data,
                regions: response[1].data,
                countries: response[2].data,
            }));
        } catch(e) {
           console.log(e)
        }
    }
}