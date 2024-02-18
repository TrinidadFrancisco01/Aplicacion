import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Estado } from './Componentes/Estado';
import { Boton } from './Componentes/Atomicos';
import { Calculadora } from './Componentes/Calculadora';
import { Login } from './Componentes/Login';
import Imc from './Componentes/Imc';

import React,{useState} from 'react';
import { SafeAreaView } from 'react-native';
import { estilos } from './Componentes/Estilos';


export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado></Encabezado>
      <Cuerpo></Cuerpo>
      <Pie></Pie>
   
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>Nombre</Text>
        <Text style={styles.texto}>X</Text>
    </View>
  )
}

export function Cuerpo(){
  return(
    <SafeAreaView style={estilos.container}>
      <Calculadora></Calculadora>
    </SafeAreaView>
  )
}

export const Pie=()=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
    </View>
  )
}

export const Pie2=(props)=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{props.op1}</Text>
        <Text style={styles.texto}>{props.op2}</Text>
        <Text style={styles.texto}>{props.op3}</Text>
        <Text style={styles.texto}>{props.op4}</Text>
    </View>
  )
}

export const Pie3=({opA,opB,opC,opD})=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{opA}</Text>
        <Text style={styles.texto}>{opB}</Text>
        <Text style={styles.texto}>{opC}</Text>
        <Text style={styles.texto}>{opD}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#17202A',
    justifyContent: 'center',
    alignItems:'stretch'
  },
  encabezado:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#c09a7e',
    
  },
  pie:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#c09a7e',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  contenido:{
    flex:10,
    alignItems:'center',
    textAlign:'center',
    padding:20
  },
  texto:{
    color:"#fff",
    fontSize:30
  }
});
