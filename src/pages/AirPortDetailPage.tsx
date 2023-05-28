import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { IAirportDetail } from "../models/models";

export function AirPortDetailPage() {
    const [airport, setAirport] = useState<IAirportDetail | null>(null)
    const [loading, setLoading] = useState(true);
    const params = useParams<'id'>();

    async function fetchAirPortDetail(id?: string) {
        const response = await axios.get<IAirportDetail>(`/airport/${id}`);
        setAirport(response.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchAirPortDetail(params.id)
    }, [params.id]);
    return(
        <div className="container mx-auto mt-8 p-4 flex justify-center">
            {loading && <h1>Loading...</h1>}
            {!loading && 
                <div>
                <h1 className="font-bold size text-3xl">{airport?.name}</h1>
                <p>country: {airport?.country}</p>
                <p>continent: {airport?.continent}</p>
                <p>coordinates: {airport?.coordinates}</p>
                <p>elevation_ft: {airport?.elevation_ft}</p>
                <p>gps_code: {airport?.gps_code}</p>
                <p>iata_code: {airport?.iata_code}</p>
                <p>ident: {airport?.ident}</p>
                <p>local_code: {airport?.local_code}</p>
                <p>municipality: {airport?.municipality}</p>
                <p>region: {airport?.region}</p>
                <p>type: {airport?.type}</p>
        
                <hr className="my-4"/>
        
                {/* {isAuthenticated && canCreate && <CommentForm
                  airportId={params.id!}
                  onCreate={() => setCanCreate(false)}
                />}
        
                {
                  commentLoading
                    ? <p>Comments Loading...</p>
                    : comments.length
                      ? comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                      : <p>No comments!</p>
                } */}
        
              </div>
            }
        </div>
    )
}