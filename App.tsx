/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
// import { Logs } from 'expo'

type SectionProps = PropsWithChildren<{
  title: string;
}>;

import { gql } from '@apollo/client';
import ChargePointWidget from './ChargePointWidget';

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


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Logs.enableExpoCliLogging()
  console.log( ' ~~ EXPO CONSOLE LOGGING ENABLED ~~' )

  return (
    <SafeAreaView >
      <ChargePointWidget/>
    </SafeAreaView>
  );
}

export default App;
