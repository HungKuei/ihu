import React,{PureComponent} from 'react';
import {
    StyleSheet, 
    View, 
    Text
} from 'react-native';
import color from '../../../widget/color';
import NavigationItemBack from '../../../widget/NavigationItems';



export default class MyPage extends PureComponent{

    static navigationOptions = ({navigation}) => ({
        headerLeft:(
            <NavigationItemBack
                icon = {require('../image/back_icon.png')}
                text = '返回'
                navigation = {navigation}
            />
        ),

    });


    render(){
        return(
            <View style = {styles.container}>
                <Text>这是我的个人中心</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});