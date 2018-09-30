import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import color from '../../widget/color';
import {NavigationItemTitle, NavigationItem} from '../../widget/NavigationItems';


const {width, height}  = Dimensions.get('window');
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
                <ScrollView>
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('MyPage')}}>
                        <View style = {styles.mine_view}>
                            <View style = {styles.mine_item_view}>
                                <Image source = {require('./image/user_icon.png')} style = {styles.user_image}/>
                            </View>
                            <View style = {styles.mine_item_view}>
                                <Text style = {styles.mine_info_text}>郭洪奎 40115208</Text>
                                <Text style = {{color:color.gray}}>宁夏理工学院 2015级 计算机学院</Text>
                            </View>
                            <View style = {styles.mine_item_view}>
                                <Text>个人主页 ></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {styles.nav_view}>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.nav_item_view}>
                                <Image style = {styles.nav_image} source = {require('./image/courses_icon.png')}/>
                                <Text style = {styles.nav_text} >课程表</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.nav_item_view}>
                                <Image style = {styles.nav_image} source = {require('./image/dowload_icon.png')}/>
                                <Text style = {styles.nav_text} >下载管理</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.nav_item_view}>
                                <Image style = {styles.nav_image} source = {require('./image/collection_icon.png')}/>
                                <Text style = {styles.nav_text} >收藏</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.nav_item_view}>
                                <Image style = {styles.nav_image} source = {require('./image/note_icon.png')}/>
                                <Text style = {styles.nav_text} >我的笔记</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    mine_view:{
        width:width,
        padding:15,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:color.border
    },
    mine_item_view:{
        
    },
    user_image:{
        width:50,
        height:50,
        borderRadius:50,
    },
    mine_info_text:{
        padding:2,
        fontSize:15,
    },
    nav_view:{
        width:width,
        padding:15,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    nav_item_view:{
        alignItems:'center',
        justifyContent:'center'
    },
    nav_image:{
        width:25,
        height:25,
    },
    nav_text:{
        paddingTop:10,
    },
});