/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS,
    NavigatorIOS
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import {Navigator} from 'react-native-deprecated-custom-components';
import  XMGHome from './APP/AIHome';
import  MainHome from './APP/MainHome';
export default class RNProject extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selecedIndex: 0
        }
    }

    render() {
        return (
            <NavigatorIOS initialRoute=
                              {{
                                  component: MainHome,
                                  title: '首页',
                              }}
                          style={{flex: 1}}
            />
        )
    }
}

AppRegistry.registerComponent('RNProject', () => RNProject);