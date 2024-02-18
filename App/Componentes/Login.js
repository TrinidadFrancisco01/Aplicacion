import {View, Text, TextInput, Button} from 'react-native'
import { Boton } from './Atomicos'

export const Login=()=>{
    return(
      <View>
        <Text>Login...</Text>
        <TextInput placeholder='Hola soy un placeholder'
        autoCapitalize='words'
        enterKeyHint='search'
        inputMode='numeric'
        />
        <Text>Password...</Text>
        <TextInput value='Hola no soy un placeholder' 
        keyboardType='numeric'
        secureTextEntry={true}
        />
        <Button title='Login'/>
        <Button title='Cancel'/>
        
        <Boton 
        Texto={'Login'} 
        Logo={require('../assets/icon.png')} 
        ColorA={'#cc55aa'}
        ColorB={'#aa22ff'}
        accion={()=>Alert.alert('Soy el boton rosita')}/>
        
        <Boton 
        Texto={'Cancel'} 
        Logo={require('../assets/favicon.png')} 
        ColorA={'#aacc55'}
        ColorB={'#88aa22'}
        accion={()=>Alert.alert('Yo soy verde')}/>
  
        <Boton
        accion={()=>Alert.alert('Yo soy el tercer boton')}
        Texto={'Tercer Boton'}
        ColorA={'red'}
        ColorB={'blue'}
        Logo={require('../assets/icon.png')}/>
      </View>
    )
  }