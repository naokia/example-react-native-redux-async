import React from 'react';
import {StyleSheet, ActivityIndicator, TouchableHighlight, View, Text} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class Http extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { ipAddress, request, isFetching } = this.props;
        if(isFetching){
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={true}
                        style={[{height: 80}]}
                        size="large"
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text>{ipAddress}</Text>
                    <TouchableHighlight onPress={request}>
                        <Text>Call API</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }
}
