import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import ThemeColor from '../../widget/color';
import {NavigationItemTitle} from '../../widget/NavigationItem';


export default class HomePage extends PureComponent{


    static navigationOptions = {
        //header: null,
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style = {styles.tabBarIcon} source = {require('./image/home_selected_icon.png')}/>
                );
            }else{
                return (
                    <Image style = {styles.tabBarIcon} source = {require('./image/home_icon.png')}/>
                );
            }
        },
        headerTitle:(
            <NavigationItemTitle
                title = '首页'
            />
        ),
    }


    render(){
        //const { navigate } = this.props.navigation;
        return(
            <View style = {styles.container}>
            <StatusBar 
                    translucent = {true}
                    animated = {true}
                    barStyle = {'light-content'}
                    backgroundColor = {ThemeColor.primary}/>
                <Text style = {{fontSize:14}}>这里是首页</Text>
                <Text style = {{fontSize:14}} onPress = {() => this.props.navigation.navigate('DetailsPage')}>点击跳转详情页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    tabBarIcon: {
        width: 22,
        height: 22,
    }
});