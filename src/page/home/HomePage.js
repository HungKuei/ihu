import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

import ThemeColor from '../../widget/color';
import {NavigationItemTitle, NavigationItem} from '../../widget/NavigationItems';
import color from '../../widget/color';

const {width, height}  = Dimensions.get('window');
export default class HomePage extends PureComponent{


    static navigationOptions = ({navigation}) => ({
        headerTitle:(
            <NavigationItemTitle
                title = '首页'
            />
        ),
        headerLeft:(
            <NavigationItem
            />
        ),
        headerRight:(
            <NavigationItem
                icon = {require('./image/search_icon.png')}
            />
        ),
    });


    render(){
        //const { navigate } = this.props.navigation;
        return(
            <View style = {styles.container}>
            <StatusBar 
                    translucent = {true}
                    hidden={false}
                    animated = {true}
                    barStyle = {'light-content'}
                    backgroundColor = {ThemeColor.primary}/>
            <View style={styles.swiper}>
                    <Swiper
                        height={120}                                           //组件高度
                        loop={true}                                            //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                        autoplay={true}                                        //自动轮播
                        autoplayTimeout={4}                                    //每隔4秒切换
                        horizontal={true}                                      //水平方向，为false可设置为竖直方向
                        paginationStyle={{bottom:0}}                           //小圆点的位置：距离底部10px
                        showsButtons={false}                                   //为false时不显示控制按钮
                        showsPagination={true}                                 //为false不显示下方圆点
                        dot={<View style={styles.dotStyle}/>}                  //未选中的圆点样式  
                        activeDot={<View style={styles.activeDotStyle}/>}      //选中的圆点样式              
                    >
                        <Image source={require('./image/swiper_0.png')} style={styles.img}/>
                        <Image source={require('./image/swiper_1.png')} style={styles.img}/>
                        <Image source={require('./image/swiper_2.png')} style={styles.img}/>
                        <Image source={require('./image/swiper_3.png')} style={styles.img}/>
                        <Image source={require('./image/swiper_4.png')} style={styles.img}/>
                    </Swiper>                  
                </View>
                <Text style = {{fontSize:14}}>这里是首页</Text>
                <Text style = {{fontSize:14}} onPress = {() => this.props.navigation.navigate('DetailsPage')}>点击跳转详情页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    tabBarIcon: {
        width: 22,
        height: 22,
    },
    img: {
        width: width,
        height: 120,
    },
    swiper: {
        width: width,
        height: 120,
    },
    dotStyle:{
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: 10,
        height: 10,
        borderRadius: 50,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 9,
        marginBottom: 5,
    },
    activeDotStyle:{
        backgroundColor: color.theme,
        width: 10,
        height: 10,
        borderRadius: 50,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 9,
        marginBottom: 5,
    },
});