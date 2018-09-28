import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {WhiteSpace, WingBlank} from 'antd-mobile-rn';
import NavigationItemBack from '../../../widget/NavigationItems';
import NavigationItemTitle from '../../../widget/NavigationItems';
import themeColor from '../../../widget/color';


export default class DetailsPage extends PureComponent{

    static navigationOptions = ({navigation}) => ({
        headerLeft: (
            <NavigationItemBack
                icon = {require('../image/back_icon.png')}
                text = '返回'
                navigation = {navigation}
            />
        ),
        headerStyle: {
            marginTop:25,
            height:40,
            backgroundColor: themeColor.primary,
            elevation: 0,
            borderBottomWidth: 0,
        },
    });
    render(){
        return(
            <View style = {styles.container}>
                
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
});