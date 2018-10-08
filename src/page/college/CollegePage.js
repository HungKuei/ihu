import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {NavigationItemTitle,NavigationItem} from '../../widget/NavigationItems';

export default class CollegePage extends PureComponent{

    static navigationOptions = ({naviagtion}) => ({
        headerTitle:(
            <NavigationItemTitle
                title = '我的大学'
            />
        ),
        headerLeft:(
            <NavigationItem
            />
        ),
        headerRight:(
            <NavigationItem
            />
        ),
    });
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