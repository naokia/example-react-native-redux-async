'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import Http from '../components/http';
import * as httpActions from '../actions/httpActions';
import { connect } from 'react-redux';

class HttpApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { state, actions } = this.props;
        return (
            <Http
                ipAddress={state.ipAddress}
                isFetching={state.isFetching}
                {...actions} />
        );
    }
}

export default connect(state => ({
    state: state.default.http
}), (dispatch) => ({
    actions: bindActionCreators(httpActions, dispatch)
}))(HttpApp);
