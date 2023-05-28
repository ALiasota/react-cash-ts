import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { useDebounce } from "../hook/debounce";
import { useInput } from "../hook/input"
import { IServerResponse, IAirport } from "../models/models";

export function AirportSearch() {
    const navigate = useNavigate();
    const [airports, setAirports] = useState<IAirport[]>([]);
    const [dropdown, setDropdown] = useState(false);
    const input = useInput('');
    const debounced = useDebounce(input.value);

    async function searchAirports(search: string) {
        const response = await axios.get<IServerResponse<IAirport>>('airports', { params: { 
            search,
            count: 10
        }});
        setAirports(response.data.results);
    };

    useEffect(() => {
        if(debounced.length) {
            searchAirports(debounced).then(() => setDropdown(true));
        } else {
            setDropdown(false)
        }
    }, [debounced, debounced.length]);

    return(
        <div className="mb-4 relative">
            <input
            className="border px-4 py-2 w-full outline-0 h-[42px]"
            type="text"
            { ...input }
            placeholder="Search for airport..."
            />
            { airports.length && dropdown &&
            <ul>
                {airports.map(airport => 
                <li 
                key={airport.id}
                onClick={() => navigate(`/airport/${airport.id}`)}
                >
                    {airport.name}
                </li>)}    
            </ul> }
        </div>
    )
}