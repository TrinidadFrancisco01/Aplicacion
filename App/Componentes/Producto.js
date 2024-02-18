import { View, Text, Image, Alert, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const Producto = () => {
    const [prod,setProd]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/7')
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
      <Text style={styles.title}>Titulo {prod.title}</Text>
      <Text style={styles.price}>Precio {prod.price}</Text>
      <Image source={{uri:prod.image}}  style={styles.image}/>
      <Text style={styles.description}>Descripcion {prod.description}</Text>
      <Text style={styles.rating}>Puntuacion {prod.rating.rate}</Text>
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

export default Producto
