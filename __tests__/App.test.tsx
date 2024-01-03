import {expect, it} from '@jest/globals';
import App, {CHARGE_POINTS_QUERY} from '../App';
import {fireEvent, render, waitFor} from '@testing-library/react-native'
import { MockedProvider } from "@apollo/client/testing";
import { ChargePointDataMock } from "./chargepointData.ts"

jest.mock('../assets/star.svg', () => () => null) 
jest.mock('../assets/RightArrow.svg', () => () => null) 

const mocks = [
    {
      request: {
        query: CHARGE_POINTS_QUERY,
      },
      result: {
        data: { getAllChargePoints: ChargePointDataMock }
      }
    }
  ];
it('renders correctly', async () => {
    const tree = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <App />
        </MockedProvider>
    );
    await waitFor(() => {
        expect(tree?.getByText(ChargePointDataMock[0].stationName))
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Show less button works correctly', async () => {
    const tree = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <App />
        </MockedProvider>
    );
    await waitFor(() => {
        const button = tree?.getByText("Show less");
        expect(button).toBeDefined();
        fireEvent(button, "press");
    });

    const button = tree?.getByText("Show all");
    expect(button).toBeDefined();
    fireEvent(button, "press");
    expect(tree.toJSON()).toMatchSnapshot();
  });