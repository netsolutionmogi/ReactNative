Exemplo de Aplicativo React Native:
<br>
<br>
<b>Estou liberado codigo fonte</b>
<br>
<br>
import { StatusBar } from 'expo-status-bar';<br>
import React from 'react';<br>
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';<br>
<br>

import Logo       from './src/assets/images/logotipo.png';
<br>
import imagemum   from './src/assets/images/imagemum.jpg';
<br>
import imagemdois from './src/assets/images/imagemdois.jpg';<br>
import imagemtres from './src/assets/images/imagemtres.jpg';<br>
import imagemquatro from './src/assets/images/imagemquatro.jpg';<br>

<br><br>
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

const styles = StyleSheet.create({<br>
  container: {<br>
    flex: 1,<br>
    backgroundColor: '#f5f5f5',<br>
    alignItems: 'center',<br>
    justifyContent: 'flex-start',<br>
    padding: 15,<br>
  },<br>
  header: {<br>
    marginTop: 20,<br>
  },<br>
  content: {<br>
    paddingTop: 10,<br>

  },<br>
  contentcontato: {<br>
    fontSize: 18,<br>
    color: '#000',<br>
    lineHeight: 30,<br>
    alignContent: 'center',<br>
    justifyContent: 'center',<br>
  },<br>

  servicos: {<br>
    alignSelf: 'flex-start',<br>
    marginLeft: 30,<br>
    marginTop: 20,<br>
  },<br>

  title: {<br>
    fontSize: 18,<br>
    color: '#000',<br>
    lineHeight: 30,<br>
    alignContent: 'center',<br>
    justifyContent: 'center',<br>

  },<br>
  websites: {<br>
    fontSize: 20,<br>
    color: '#000',<br>
    lineHeight: 20,<br>
    alignContent: 'center',<br>
    justifyContent: 'center',<br>

  },<br>
  listview: {<br>
    marginTop: 15,<br>
    alignSelf: 'center',<br>
  },<br>
  list: {<br>
    justifyContent: 'space-between',<br>
    flexDirection: 'row',<br>
    paddingHorizontal: 20,<br>
    marginBottom: 15,<br>
    marginRight: 15,<br>
  },<br>
  thumbnail: {<br>
    width: 140,<br>
    height: 120,<br>
    resizeMode: 'cover',<br>
    borderRadius: 2,<br>
    marginLeft: 10,<br>
  },<br>

  imagem: {<br>
    width: '100%',<br>
    resizeMode: 'contain',<br>
  },<br>
  button: {<br>
    width: '85%',<br>
    height: 32,<br>
    backgroundColor: '#FF0000',<br>
    justifyContent: 'center',<br>
    alignItems: 'center',<br>
    borderRadius: 8,<br>
    marginTop: 15,<br>
    padding: 24,<br>
  },<br>
  buttontext: {<br>
    fontSize: 20,<br>
    color: '#fff',<br>
    lineHeight: 20,<br>
  },<br>
<br>
});<br>

