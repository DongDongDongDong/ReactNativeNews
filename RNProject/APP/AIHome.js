/**
 * Created by ithinkeryz on 2017/5/11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Navigator,
    TouchableOpacity,
    Dimensions,
    PixelRatio
} from 'react-native';

import AIRequest from './AIRequest'
import AISwiper from './AISwiper'
import AIDetail from './AIDetail'


class XMGDetail extends Component {
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'green'}}>
                <Text>详情页222</Text>
                <Text onPress={()=>{
                    this.props.navigator.pop();
                }}>返回</Text>
            </View>
            )

    }
}


export default class XMGHome extends Component {


    componentDidMount(){
        AIRequest.GET('http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore',null,(json)=>{
            var jsonArr = json['T1348647853363'];
            var ads = [];
            var news = [];
            jsonArr.forEach((value,index)=>{
                if(index == 0){
                    ads = value.ads;
                }else{
                    news.push(value)
                    console.log(value)
                }
            });

            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(news),
                ads:ads
            })


        },(error)=>{
            console.log(error)
        })
    }

    constructor(props){
        super(props)
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(['r1','r2']),
            ads:[]
        }
    }



    render(){
        return (

            <ListView  dataSource={this.state.dataSource}
                       renderRow={this._renderRow.bind(this)}
                       renderHeader={this._renderHeader.bind(this)}
                       enableEmptySections={true}
            />


        )
    }

    _renderHeader(){
        return (
            <AISwiper ads={this.state.ads} />
        )
    }

    _renderRow(rowData,sectionID,rowID,highlightRow) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this.pushToDetail.bind(this,rowData)}>
            <View style={styles.cellStyle}>
                <Image source={{uri:rowData.img}} style={styles.imageStyle} />
                <View style={styles.rightStyle}>
                    <Text>{rowData.title}</Text>
                    <View style={styles.rightBottomStyle}>
                        <Text>{rowData.source}</Text>
                        <Text>{this.getReplyCount(rowData.replyCount)}</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    pushToDetail(rowData){
        this.props.navigator.push({
            component:AIDetail,
            passProps:{id:rowData.id}
        });
    }

    getReplyCount(replycount) {
        if (replycount==undefined){
            return '';
        }

        var str = replycount + '跟帖';
        if (replycount > 10000){
            replycount = (replycount / 10000.0).toFixed(1);
            str = replycount + '万 跟帖';
        }

        str = str.replace('.0','');
        return str;
    }


}
var styles = StyleSheet.create({
    imageStyle:{
        width:120,
        height:80
    },

    rightStyle:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        justifyContent:'space-between',

    },
    cellStyle:{
        marginTop:8,
        flexDirection:'row'
    },
    rightBottomStyle:{
        paddingBottom :10,
        flexDirection:'row',
        justifyContent:'space-between',

    },
})