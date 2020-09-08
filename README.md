Exemplo de Aplicativo React Native:
<br>
<br>
<b>Estou liberado codigo fonte</b>
<br>
<br>
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


import Logo       from './src/assets/images/logotipo.png';
import imagemum   from './src/assets/images/imagemum.jpg';
import imagemdois from './src/assets/images/imagemdois.jpg';
import imagemtres from './src/assets/images/imagemtres.jpg';
import imagemquatro from './src/assets/images/imagemquatro.jpg';

export default function App() {

    return (
      <>
        <View style={styles.container}>
          <Image source={Logo} style={styles.imagem}></Image>

          <View style={styles.header}>
            <Text style={styles.websites}>Exemplo de App </Text>
          </View>
          <View style={styles.servicos}>
            <Text style={styles.title}>Serviços:</Text>
          </View>
          <View style={styles.listview}>
            <View style={styles.list}>
              <Image source={imagemum} style={styles.thumbnail}></Image>
              <Image source={imagemdois} style={styles.thumbnail}></Image>

            </View>
            <View style={styles.list}>
              <Image source={imagemtres} style={styles.thumbnail}></Image>
              <Image source={imagemquatro} style={styles.thumbnail}></Image>

            </View>

          </View>

          <View style={styles.content}>
            <Text style={styles.contentcontato}>Entre em Contato</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>
              Contato
            </Text>

          </TouchableOpacity>

        </View>


        <StatusBar style="dark" backgroundColor="transparent" />

      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
  },
  header: {
    marginTop: 20,
  },
  content: {
    paddingTop: 10,

  },
  contentcontato: {
    fontSize: 18,
    color: '#000',
    lineHeight: 30,
    alignContent: 'center',
    justifyContent: 'center',
  },

  servicos: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 20,
  },

  title: {
    fontSize: 18,
    color: '#000',
    lineHeight: 30,
    alignContent: 'center',
    justifyContent: 'center',

  },
  websites: {
    fontSize: 20,
    color: '#000',
    lineHeight: 20,
    alignContent: 'center',
    justifyContent: 'center',

  },
  listview: {
    marginTop: 15,
    alignSelf: 'center',
  },
  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 15,
    marginRight: 15,
  },
  thumbnail: {
    width: 140,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2,
    marginLeft: 10,
  },

  imagem: {
    width: '100%',
    resizeMode: 'contain',
  },
  button: {
    width: '85%',
    height: 32,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 15,
    padding: 24,
  },
  buttontext: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 20,
  },

});

