import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({

});

export default class Http extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { ipAddress } = this.props;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{ipAddress}</Text>
            </View>
        );
    }
}
