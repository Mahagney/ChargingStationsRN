import { StyleSheet, Text, View } from "react-native";
import Logo from "./assets/RightArrow.svg"
import Star from "./assets/star.svg";

const calculateDistance = (distance: number) => {
    return distance>1000 ? `${distance/1000}km` : `${distance}m`;
}

export type ChargingPointType = {
    "availableChargePoints": string, 
    "distance": string, 
    "isFavourite": boolean, 
    "location": string, 
    "stationName": string, 
    "totalChargePoints": string
}

export const ChargingStation = ({availableChargePoints, totalChargePoints, stationName, location, isFavourite, distance, isLast, isFirst}:ChargingPointType & {isLast:boolean, isFirst: boolean}) => {
    
    const style = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: 70,
            borderBottomWidth: isLast ? 0 : 1,
            borderBottomColor: '#b8bfc4',
        },
        distanceContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            backgroundColor: '#e6ebee',
            padding: 16,
            overflow: 'hidden',
            width: 80,
            zIndex: 2,
            borderTopRightRadius: isFirst ? 10 : 0,
            borderBottomRightRadius: isLast ? 10 : 0
        },
    });
    return (
        <View style={style.container}>
            <View style={styles.availableContainer}>
                <Text style={styles.totalText}> {availableChargePoints}/{totalChargePoints} </Text>
                <Text> Available </Text>
            </View>
            <View style={styles.addressContainer}>
                <View style={styles.starContainer}>
                    <Text style={ styles.addressText}>{ stationName.length >15 ? `${stationName.slice(0,15)}...` : stationName } </Text>
                    {isFavourite && <Star style={styles.star}/>}
                </View>
                <Text style={ styles.addressText}>{ location.length >18 ? location.slice(0,18) : location }</Text>
            </View>
            <View style={style.distanceContainer}>
                <Logo/>
                <Text>{calculateDistance(parseInt(distance))}</Text>    
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    availableContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
    },
    starContainer: {
        display: 'flex',
        flexDirection:'row'
    },
    star: {
        marginTop: 4
    },
    addressContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        flexGrow: 1
    },
    totalText: {
        fontWeight: '700',
        fontSize: 18,
    },
    addressText: {
        fontSize: 12,
        color: '#383d3f',
    }
});