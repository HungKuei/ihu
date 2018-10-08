import React,{PureComponent} from 'react';
import {
    StyleSheet, 
    View, 
    Text, 
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    StatusBar
} from 'react-native';
import Swiper from 'react-native-swiper';
import NavigationItemBack from '../../widget/NavigationItems'
import color from '../../widget/color';

const {width,height} = Dimensions.get('window');
export default class GuidePage extends PureComponent{

    static navigationOptions = ({navigation}) => ({
        imageheaderStyle: {height: 0},
        header: null

    })

    render(){
        return(
            <View style = {styles.container}>
                <StatusBar
                    animated={true}
                    hidden={true}
                    translucent={false}
                    showHideTransition={'fade'}
                    networkActivityIndicatorVisible={false}
                />
                <Swiper
                    style = {styles.view_swiper}
                    loop = {false}
                    autoplay = {false}>
                    <Image source = {require('./image/swiper_0.png')} style = {styles.swiper_image}/>
                    <Image source = {require('./image/swiper_1.png')} style = {styles.swiper_image}/>
                    <Image source = {require('./image/swiper_2.png')} style = {styles.swiper_image}/>
                    <ImageBackground source = {require('./image/swiper_3.png')} style = {[styles.swiper_image, styles.btn_out]}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                let flag = 0;
                                if (flag == 0) {
                                    this.props.navigation.navigate('TabBar');
                                } else {
                                    this.props.navigation.navigate('Login');
                                }
                            }}
                        >
                            <Text style = {styles.btn_text}>启动应用</Text>
                        </TouchableOpacity>
                    </ImageBackground>    
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height
    },
    view_swiper:{
        height: height
        
    },
    swiper_image:{
        width: width,
        height: height
    },
    btn_out:{
        alignItems: 'center',
    },
    btn:{
        width: 150,
        height: 40,
        backgroundColor: color.theme,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: (width - 150) / 2,
        bottom: 50
    },
    btn_text:{
        fontSize: 18,
        color: '#fff'
    },
});