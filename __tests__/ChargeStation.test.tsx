import {create} from 'react-test-renderer';
import {ChargingStation} from '../components/molecules/ChargingStation.tsx';
import { ChargingPointType } from '../components/molecules/ChargingStation.tsx';
import {expect, it} from '@jest/globals';

jest.mock('../assets/star.svg', () => () => null) 
jest.mock('../assets/RightArrow.svg', () => () => null) 

const data: ChargingPointType[] = [
    {"availableChargePoints": "5", "distance": "780", "isFavourite": true, "location": "LE11 EC3, UK", "stationName": "Loughborough towncentre hall2", "totalChargePoints": "5"}, 
{ "availableChargePoints": "9", "distance": "140", "isFavourite": true, "location": "W2 5TY, UK", "stationName": "Paddington 36", "totalChargePoints": "18"}, 
{ "availableChargePoints": "3", "distance": "12000", "isFavourite": false, "location": "W2 5TY, UK", "stationName": "London 2", "totalChargePoints": "10"}, 
{"availableChargePoints": "4", "distance": "12000", "isFavourite": false, "location": "W2 5TY, UK", "stationName": "London 4", "totalChargePoints": "10"}, 
{"availableChargePoints": "5", "distance": "12000", "isFavourite": false, "location": "W2 5TY, UK", "stationName": "London 5", "totalChargePoints": "10"}, 
{"availableChargePoints": "8", "distance": "12000", "isFavourite": false, "location": "W2 5TY, UK", "stationName": "London 6", "totalChargePoints": "10"}, 
{ "availableChargePoints": "1", "distance": "12000", "isFavourite": false, "location": "W2 5TY, UK", "stationName": "London 8", "totalChargePoints": "10"}];
// render the component

it('renders correctly', () => {
  const tree = create(<ChargingStation isLast={false} isFirst={false} {...data[0]} />).toJSON();
  expect(tree).toMatchSnapshot();
});