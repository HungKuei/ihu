import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {NavigationItemTitle} from '../../widget/NavigationItems';

export default class CollegePage extends PureComponent{

    static navigationOptions = {
        tabBarLabel: '大学',
        headerTitle:(
            <NavigationItemTitle
                title = '大学'
            />
        ),
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style = {styles.tabBarIcon} source = {require('./image/college_selected_icon.png')}/>
                );
            }else{
                return (
                    <Image style = {styles.tabBarIcon} source = {require('./image/college_icon.png')}/>
                );
            }
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {{fontSize:14}}>这里是大学页</Text>
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
        width: 25,
        height: 22,
    }
});