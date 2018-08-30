import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
    render(){
        return(
            <Text style={salon.Judul}>BIODATA</Text>
            
            
        )
    }
}

const salon = {
    Judul: {
        backgroundColor: '#007',
        color:'#f00',
        fontSize: 30
    }
}

export default Judul;