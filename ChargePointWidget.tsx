import React, {useState} from 'react';

import {  ChargingPointType } from './ChargingStation';
import { gql, useQuery } from '@apollo/client';
import {ChargePointWidgetView} from './ChargePointWidgetView.tsx';

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


export const ChargePointWidget = (): React.JSX.Element  => {
  const [chargePoints, setChargePoints] = useState<ChargingPointType[]>([]);

  const compareDistances = (a: ChargingPointType, b: ChargingPointType) => {
    if ( a.distance < b.distance ){
      return 1;
    }
    if ( a.distance > b.distance ){
      return -1;
    }
    return 0;
  }

  const FetchChargePoints = () => {
    console.log("Fetch called");
    const { loading, error, data } = useQuery(CHARGE_POINTS_QUERY, {
      onCompleted: () => {
        const cps =[...data.getAllChargePoints].sort(compareDistances);
        setChargePoints(cps);
      },
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return data;
  }

  FetchChargePoints();
  return (
      <ChargePointWidgetView chargePoints={chargePoints} />
  );
}

export default ChargePointWidget;
