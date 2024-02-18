import { View, Text, Image, Alert, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [prod,setProd]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        const randomId = Math.floor(Math.random() * 671) + 1; // 671 es el número total de personajes en la API
        fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then((res)=>res.json())
      .then((obj)=>{
        setProd(obj)
        setLoad(true)
      })
      .catch((err)=>Alert.alert('Ocuerrio un error : '+err))
    },[])

    const screenL=()=>{
      return(
    <View style={styles.container}>
      <Text style={styles.title}>Nombre: {prod.name}</Text>
      <Text style={styles.price}>Estatus: {prod.status}</Text>
      <Text style={styles.price}>Especie: {prod.species}</Text>
      <Text style={styles.price}>Genero: {prod.gender}</Text>
      <Image source={{uri:prod.image}}  style={styles.image}/>
      <Text style={styles.description}>Origen {prod.origin.name}</Text>
    
    </View>
      )
    }

    const screenU=()=>{
      return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <Text style={styles.loadingText}>Cargando Datos...</Text>
      </View>)
      
    }

  return (
    <View>
      {load?screenL():screenU()}
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
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Api
