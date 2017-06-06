/**
 * Created by wei on 2017/5/27.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    NavigatorIOS
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


import AIHome from './AIHome';

export default class MainHome extends  Component {

    constructor(props){
        super(props);

        this.state = {
            selecedIndex:0
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item selected={ this.state.selecedIndex == 0}
                                   title="首页"
                                   renderIcon={()=><Image source={{uri:'tabbar_icon_news_normal'}} style={styles.tabIconStyle}/>}
                                   renderSelectedIcon={()=><Image source={{uri:'tabbar_icon_news_highlight'}} style={styles.tabIconStyle}/>}
                                   onPress={()=>{
                                       this.setState({
                                           selecedIndex : 0
                                       })

                                   }}>
                    <AIHome navigator={this.props.navigator}/>
                </TabNavigator.Item>

                <TabNavigator.Item selected={ this.state.selecedIndex == 1}
                                   title="首页"
                                   renderIcon={()=><Image source={{uri:'tabbar_icon_importantNews_normal'}} style={styles.tabIconStyle}/>}
                                   renderSelectedIcon={()=><Image source={{uri:'tabbar_icon_importantNews_highlight'}} style={styles.tabIconStyle}/>}
                                   onPress={()=>{
                                       this.setState({
                                           selecedIndex : 1
                                       })

                                   }}
                >
                    <View></View>
                </TabNavigator.Item>

                <TabNavigator.Item selected={ this.state.selecedIndex == 2}
                                   title="首页"
                                   renderIcon={()=><Image source={{uri:'tabbar_icon_live_normal'}} style={styles.tabIconStyle}/>}
                                   renderSelectedIcon={()=><Image source={{uri:'tabbar_icon_live_highlight'}} style={styles.tabIconStyle}/>}
                                   onPress={()=>{
                                       this.setState({
                                           selecedIndex : 2
                                       })

                                   }}
                >
                    <View></View>
                </TabNavigator.Item>

                <TabNavigator.Item selected={ this.state.selecedIndex == 3}
                                   title="首页"
                                   renderIcon={()=><Image source={{uri:'tabbar_icon_video_normal'}} style={styles.tabIconStyle}/>}
                                   renderSelectedIcon={()=><Image source={{uri:'tabbar_icon_video_highlight'}} style={styles.tabIconStyle}/>}
                                   onPress={()=>{
                                       this.setState({
                                           selecedIndex : 3
                                       })

                                   }}
                >
                    <View></View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selecedIndex == 4}
                    title="我"
                    renderIcon={() => <Image source={{uri:'tabbar_icon_me_normal'}} style={styles.tabIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'tabbar_icon_me_highlight'}} style={styles.tabIconStyle}/>}
                    onPress={() => {
                        this.setState({
                            selecedIndex:4
                        })
                    }}>
                    <View></View>
                </TabNavigator.Item>
            </TabNavigator>






        )
    }

}


const styles = StyleSheet.create({
    tabIconStyle:{
        width:23,
        height:23
    }
});