import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Judul title="BIODATA"/>
        <Judul title="LOGIN"/>
        <Judul title="FORM"/>
        <Text>Nama : Varrel Bramasta Nugraha</Text>
        <Text>Kelas : XI RPL 4</Text>
        <Text>No Absen : 33</Text>
        <Image style={{width: 400, height: 500}} 
        source={require('./1.jpg')} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
