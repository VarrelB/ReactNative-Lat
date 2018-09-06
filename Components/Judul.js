import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
    render(){
        return(
            <Text style={salon.Judul}>{this.props.title}</Text>
            
            
        )
    }
}

const salon = {
    Judul: {
        backgroundColor: '#d4d4d4',
        color:'#f00',
        fontSize: 30
    }
}

export default Judul;