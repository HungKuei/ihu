import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {NavigationItemTitle} from '../../widget/NavigationItem';

export default class MinePage extends PureComponent{

    static navigationOptions = {
        tabBarLabel: '我的',
        headerTitle:(
            <NavigationItemTitle
                title = '我的'
            />
        ),
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
        }
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
        justifyContent:'center',
        alignItems:'center',
    },
    tabBarIcon: {
        width: 22,
        height: 22,
    }
});