/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { ChargingStation, ChargingPointType } from '../molecules/ChargingStation.tsx';
import { SHOW_ALL, SHOW_LESS } from '../../constants.ts';
import { Button } from '../atoms/button.tsx';


export const ChargePointWidgetView = ({chargePoints}: {chargePoints:ChargingPointType[]}): React.JSX.Element  => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [displayedChargePoints, setDisplayedChargePoints] = useState<ChargingPointType[]>([]);
  
  useEffect(() => {
    setDisplayedChargePoints(chargePoints);
}, [chargePoints])

  const toggleShowAll = () => {  
    if(showAll) {
      setDisplayedChargePoints(chargePoints);
    } else {
      setDisplayedChargePoints(chargePoints.slice(0,3));
    }
    setShowAll(!showAll);
  }

  const generateChargingStations = () => {
    return displayedChargePoints.map( (cp: ChargingPointType,index: number) =>             
    <ChargingStation key={index} isLast={index===displayedChargePoints.length-1}
      {...cp} isFirst={index===0}/>
    )
  };

  return (
      <ScrollView   style={styles.container} contentContainerStyle={{paddingBottom: 100, backgroundColor: '#ecf0f3'}}> 
            <Text style={styles.hello}>Hello</Text>
            <Text style={styles.userName}>Saleh</Text>
            <Text style={styles.title}>Nearby Chargers</Text>
            <Text style={styles.text}>Nearest charging stations within a radius of 50km </Text>
            <Text style={styles.text}>Your Preference: CCS Type 2</Text>
            <View style={styles.view}>
              {generateChargingStations()}
            </View>
            <Button text={showAll ? SHOW_ALL : SHOW_LESS} onClick={toggleShowAll}/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  hello:{
    fontSize: 18,
    fontWeight: '500'
  },
  userName:{
    marginTop: 8,
    fontSize: 36
  },
  title: {
    marginTop: 40,
    fontWeight: '700'
  },
  subtitle: {
    color: '#ecf0f3'
  },
  text: {
    color: '#616e76',
    fontSize: 12  
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    paddingVertical: 64,
    paddingHorizontal: 16,
    backgroundColor: '#ecf0f3',
    minHeight: '100%'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  view: {
    zIndex: 5,
    borderRadius: 10,
    borderColor: "#a3b8c5",
    borderWidth: 1,
    marginVertical: 16,
    backgroundColor: 'white',
    flexDirection: "column",
    display: 'flex',
  }
});

export default ChargePointWidgetView;
