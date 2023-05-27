import React from "react";
import { IAirport } from "../models/models";

interface IProps {
    airport: IAirport
}

export function AirportCard({ airport }: IProps) {
    return(
        <div className="border rounded-md py-4 px-6 mb-2 hover:shadow-md cursor-pointer">
            <p className="text-lg">{airport.name}</p>
            
        </div>
    )
}