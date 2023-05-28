import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { IFilter } from "../models/models";
import { airportSlice } from "../store/slices/airportSlice";

export function AirportFilter() {
    const [filter, setFilter] = useState<IFilter>({
        type: '',
        region: '',
        country: ''
    });
    const [hasFilter, SetHasFilter] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(airportSlice.actions.filter(filter));
    }, [dispatch, filter]);

    const { loading, regions, countries, types } = useAppSelector(state => state.handBook);
    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilter(prev => ({ ...prev, [e.target.name]: e.target.value }));
        SetHasFilter(true);
    }
    const clearHandler = () => {
        setFilter({
            type: '',
            region: '',
            country: ''
        });
        SetHasFilter(false);
    }

    return(
        <div className="border mb-2 p-2">
            {loading && <p>Loading...</p>}
            {   !loading &&
                <>
                    <span className="mr-2">Filter</span>
                    <select className="px-2 py-1 border mr-2" onChange={changeHandler} value={filter.type} name="type">
                        <option disabled className="text-gray-500" value="">Type</option>
                        {types.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>

                    <select className="px-2 py-1 border mr-2" onChange={changeHandler} value={filter.country} name="country">
                        <option disabled className="text-gray-500" value="">Country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>

                    <select className="px-2 py-1 border mr-2" onChange={changeHandler} value={filter.region} name="region">
                        <option disabled className="text-gray-500" value="">Region</option>
                        {regions.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>

                    {hasFilter && <button className="py-1 px-4 border bg-red-800 text-white rounded" onClick={clearHandler}>&times;</button>}
                </>
            }
        </div>
    )
}