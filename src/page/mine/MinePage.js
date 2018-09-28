import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {NavigationItemTitle, NavigationItem} from '../../widget/NavigationItems';

export default class MinePage extends PureComponent{

    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style = {styles.tabBarIcon} source = {require('./image/mine_selected_icon.png')}/>
                );
            }else{
                return (
                    <Image style = {styles.tabBarIcon} source = {require('./image/mine_icon.png')}/>
                );
            }
        },
        headerLeft:(
            <NavigationItem
                
            />
        ),
        headerTitle:(
            <NavigationItemTitle
                title = '我的'
            />
        ),
        headerRight:(
            <NavigationItem
                icon = {require('./image/setup_icon.png')}
            />
        )
       
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {{fontSize:14}}>这里是我的界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    tabBarIcon: {
        width: 22,
        height: 22,
    }
});