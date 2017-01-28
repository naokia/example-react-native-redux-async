import React from 'react';
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';

const styles = StyleSheet.create({

});

export default class Http extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const { ipAddress, request } = this.props;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{ipAddress}</Text>
                <TouchableHighlight onPress={request}>
                    <Text>Call API</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
