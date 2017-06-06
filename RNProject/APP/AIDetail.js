/**
 * Created by wei on 2017/6/6.
 */
import React,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    ListView,
    TouchableOpacity,
    Dimensions,
    PixelRatio,
    WebView
} from 'react-native';

import AIRequest from './AIRequest'

export  default  class AIDetail extends Component {
    constructor(props){
        super(props);
        var url = 'http://c.3g.163.com/nc/article/'+this.props.id+'/full.html';
        AIRequest.GET(url,null,(json)=>{
            var detail = json[this.props.id];
            var imgs = detail.img;
            var body = detail.body;
            console.log(detail);

            imgs.forEach((value,index)=>{
                var imgTag = '<img src="'+value.src+'" width=100% />';
                body = body.replace(value.ref,imgTag);
            })

            this.setState(
                {
                    body:body
                }
            )

        },(error)=>{
            alert(error)
        })

        this.state = {
            body:"",
        }
    }

    render(){
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                style={{flex:1}}
                source={{html:this.state.body}}
            />
        )
    }
}