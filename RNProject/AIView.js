/**
 * Created by wei on 2017/5/23.
 */

import React, { Component ,} from 'react';
import {
    Text,
    View
} from 'react-native';

class AIView extends Component {

    // static  propTypes = {
    //     name:propTypes.string,
    //     age:propTypes.number
    // }

    static get defaultProps(){
        return {
            name:'小明',
            age: 23
        }
    }

    render(){
        return (
            <View>
                <Text style = {{fontsize:30}}>Name:{this.props.name} </Text>
                <Text style = {{fontsize:30}}>Age:{this.props.age} </Text>
            </View>
        )
    }

}