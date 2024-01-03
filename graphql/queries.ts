import { gql } from "@apollo/client";

export const CHARGE_POINTS_QUERY = gql(/* GraphQL */ `
{getAllChargePoints {
    stationName
    location
    availableChargePoints
    totalChargePoints
    isFavourite
    distance
}}
`);