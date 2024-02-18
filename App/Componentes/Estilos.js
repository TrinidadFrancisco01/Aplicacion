import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const buttonWidth = (width - 40) / 4;

export const estilos = StyleSheet.create({
    //Estilos para el boton
   /* imagenB:{
        height:40,
        width:30,
        marginEnd:10
      },
      textoB:{
        color:'white',
        fontSize:18
      },
      boton:{
        flexDirection:'row',
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#212F3D',
        borderWidth:1,
        borderRadius:5
      },
      //estilos para la caja de la calculadora
      caja:{
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10,
        height:70,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10
      },
      textBox:{
        color:'white',
        fontSize:30
      },
      //estilos para el div de la botonera
      botonera:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-evenly',
        flexWrap:'wrap'
      },*/

      container: {
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#17202A',
    },
    calculator: {
        alignItems: 'center',
        padding: 20
    },
    display: {
        width: '90%', 
        minHeight: 70,
        fontSize: 30,
        backgroundColor: '#1C2833',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 10,
        textAlign: 'right',
        padding: 10,
        paddingRight: 20, 
        alignSelf: 'center', 
    },
    
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 9,
        width: buttonWidth - 10,
        height: buttonWidth - 10,
        backgroundColor: '#212F3D',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: buttonWidth / 10,
    },
    specialButton: {
        backgroundColor: '#212F3D',
        color: '#fff',
    },
    buttonText: {
        fontSize: 18,
        color: '#ECF0F1',
    }
      

})