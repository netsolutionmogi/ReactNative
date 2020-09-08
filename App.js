import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from './assets/images/logotiponovo.png';
import imoveisum from './assets/images/imoveisum.jpg';

export default function App() {
  return (

    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.imagem}></Image>

        <View style={styles.header}>
          <Text style={styles.websites}>Imoveis </Text>
        </View>
        <View style={styles.servicos}>
          <Text style={styles.title}>Serviços:</Text>
        </View>
        <View style={styles.listview}>
          <View style={styles.list}>
            <Image source={imoveisum} style={styles.thumbnail}></Image>
            <Image source={imoveisum} style={styles.thumbnail}></Image>

          </View>
          <View style={styles.list}>
            <Image source={imoveisum} style={styles.thumbnail}></Image>
            <Image source={imoveisum} style={styles.thumbnail}></Image>

          </View>
          <View style={styles.content}>
            <Text style={styles.contentcontato}>Entre em Contato</Text>
          </View>



        </View>




        <StatusBar style="dark" backgroundColor="transparent" />

      </View>
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
    marginTop: 10,
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
    marginTop: 10,
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
});
