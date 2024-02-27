import { View, Text, Alert, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { estilos } from './Estilos'

const Clima = () => {
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110&q=huejutla&days=3&aqi=no&alerts=no&lang=es')
            .then(res => res.json())
            .then(obj => {
                setData(obj)
                setLoad(true)
            })
            .catch(err => Alert.alert('Error inesperado : ' + err))
    }, [])

    const UScreen = () => {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} color={'darkblue'} />
                <Text style={styles.loadingText}>Cargando datos</Text>
            </View>
        )
    }

    const LScreen = () => {
        return (
            <View style={styles.weatherContainer}>
                <Text style={styles.location}>{data.location.name}</Text>
                <Text style={styles.currentTemp}>{data.current.temp_c}°</Text>
                <Text style={styles.weatherCondition}>{data.current.condition.text}  max
                {data.forecast.forecastday[0].day.maxtemp_c}° /
                min {data.forecast.forecastday[0].day.mintemp_c}°</Text>
                <Image style={styles.weatherIcon} source={{ uri: 'https:' + data.current.condition.icon }} />
                <FlatList
                    data={data.forecast.forecastday}
                    renderItem={({ item }) => <Card
                        condicion={item.day.condition.text}
                        max={item.day.maxtemp_c}
                        min={item.day.mintemp_c}
                        iko={item.day.condition.icon} />}
                />
            </View>
        )
    }

    const Card = ({ condicion, max, min, iko }) => {
        return (
            <View style={styles.cardContainer}>
                <Text style={styles.cardCondition}>{condicion}</Text>
                <Text style={styles.cardTemp}>{max}°C</Text>
                <Text style={styles.cardTemp}>{min}°C</Text>
                <Image style={styles.cardIcon} source={{ uri: 'https:' + iko }} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clima</Text>
            {load ? LScreen() : UScreen()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        marginTop: 10,
    },
    weatherContainer: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'purple',
        padding: 70,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    location: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    currentTemp: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    weatherCondition: {
        fontSize: 18,
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
    },
    cardCondition: {
        fontSize: 18,
        marginRight: 10,
    },
    cardTemp: {
        fontSize: 18,
        marginRight: 10,
    },
    cardIcon: {
        height: 30,
        width: 30,
    },
})

export default Clima
