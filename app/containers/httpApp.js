'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import Http from '../components/http';
import * as httpActions from '../actions/httpActions';
import { connect } from 'react-redux';
import { ActivityIndicator, StyleSheet } from 'react-native';

class HttpApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { state, actions } = this.props;
        if(state.isFetching){
            return (
                <ActivityIndicator
                    animating={true}
                    style={[styles.centering, {height: 80}]}
                    size="large"
                />
            )
        } else {
            return (
                <Http
                    ipAddress={state.ipAddress}
                    {...actions} />
            );
        }
    }
}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }
});
export default connect(state => ({
    state: state.default.http
}), (dispatch) => ({
    actions: bindActionCreators(httpActions, dispatch)
}))(HttpApp);
