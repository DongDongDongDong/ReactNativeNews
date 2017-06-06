/**
 * Created by wei on 2017/6/1.
 */
import React, { Component } from 'react'

import {
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native'

import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window');

const styles = {

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    bottomView: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width:width,
        position:'absolute',
        bottom:0,
        justifyContent:'center',
        height:20
    },

    image: {
        width,
        flex: 1
    }
}

export default class XMGSwiper extends Component {
    render () {
        return (
            <Swiper height={150}
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{backgroundColor: 'rgba(230,230,230,0.6)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        bottom: 0, left: null, right: 10
                    }} loop>
                {this._setupHeaderIcon()}
            </Swiper>
        )
    }

    _setupHeaderIcon(){
        var ads = this.props.ads;

        var images = []
        ads.forEach((value,index)=>{
            images.push(

                <View style={styles.slide} key={index} >

                    <Image resizeMode='stretch' style={styles.image} source={{uri:value.imgsrc}} />

                    <View style={styles.bottomView}>
                        <Text numberOfLines={1}
                              style={{
                                  fontSize: 15,
                                  fontWeight: 'bold',
                                  color:'white'
                              }}
                        >{value.title}
                        </Text>
                    </View>

                </View>
            )
        })

        return images;
    }

}