import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcula = () => {
    
    const tempGasolina = parseFloat(gasolina);
    const tempAlcool = parseFloat(alcool);

    if((tempGasolina * 0.7) > tempAlcool) {
      setResultado('Álcool');
    } else {
      setResultado('Gasolina')
    }
  };


  return (

    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={{
        uri: 'https://emc.acidadeon.com/dbimagens/venda_combustivel_790x444_24032020110121.jpg'
      }}>
    
      <Text style={{color: '#000000', fontSize: 30, fontWeight: 'bold'}}>
        Álcool ou Gasolina 
      </Text>
      <Text
      style={{
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
      }}> 
        Saiba qual a melhor opção de abastecimento
      </Text>

      <TextInput 
        onChangeText={(value)=>setGasolina(value)}
        placeholder="Digite o valor da gasolina"
        keyboardType="numeric"
        style={{backgroundColor: '#fff', width: '90%', marginVertical: 10}}/>
      <TextInput 
        onChangeText={(value)=>setAlcool(value)}
        placeholder="Digite o valor da gasolina"
        keyboardType="numeric"
        style={{backgroundColor: '#fff', width: '90%', marginVertical: 10}}/>

      <TouchableOpacity onPress={calcula}>
        <Text style={{
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
      }}>
          Calcular
        </Text>
      </TouchableOpacity>

      <Text style={{
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
      }}> 
        É melhor você abastecer com: 
      </Text>
      <Text style={{color: '#000000', fontSize: 30, fontWeight: 'bold'}}>
        {resultado}
      </Text>
      
    </ImageBackground>
  );
};

export default App;