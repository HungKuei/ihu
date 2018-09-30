import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';
import {NavigationItemTitle} from '../../widget/NavigationItems';
import color from '../../widget/color';


const {width, height} = Dimensions.get('window');
export default class MessagePage extends PureComponent{


    static navigationOptions = {
        tabBarLabel: '消息',
        headerTitle:(
            <NavigationItemTitle
                title = '消息'
            />
        ),
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style = {styles.tabBarIcon} source = {require('./image/message_selected_icon.png')}/>
                );
            }else{
                return (
                    <Image style = {styles.tabBarIcon} source = {require('./image/message_icon.png')}/>
                );
            }
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.list_title_view}>
                    <Image source = {require('./image/notice_icon.png')} style = {styles.list_title_image}/>
                    <Text style = {styles.list_title_text}>通知</Text>
                </View>
                <View style = {styles.list_content_view}>
                    <Image source = {require('./image/no_notice_icon.png')} style = {styles.list_content_image}/>
                    <Text style = {styles.list_content_text}>暂无通知</Text>
                </View>
                <View style = {styles.list_title_view}>
                    <Image source = {require('./image/messages_icon.png')} style = {styles.list_title_image}/>
                    <Text style = {styles.list_title_text}>消息</Text>
                </View>
                <View style = {styles.list_content_view}>
                    <Image source = {require('./image/no_messages_icon.png')} style = {styles.list_content_image}/>
                    <Text style = {styles.list_content_text}>暂无消息</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tabBarIcon: {
        width: 22,
        height: 22,
    },
    list_title_view:{
        width:width,
        padding:15,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:color.border,
        borderBottomWidth:1,
        backgroundColor:'#fff'
    },
    list_title_image:{
        width:25,
        height:25,
    },
    list_title_text:{
        paddingLeft:10
    },
    list_content_view:{
        width:width,
        padding:20,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    list_content_image:{
        width:45,
        height:45
    },
    list_content_text:{
        paddingTop:10,
        fontSize:10,
        color:color.gray
    },
});