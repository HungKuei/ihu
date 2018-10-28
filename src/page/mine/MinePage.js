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

    static navigationOptions = ({navigation}) => ({
        headerTitle:(
            <NavigationItemTitle
                title = '我的'
            />
        ),
        headerLeft:(
            <NavigationItem
                
            />
        ),
        headerRight:(
            <NavigationItem
                icon = {require('./image/setup_icon.png')}
            />
        )
       
    });

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
                                <View style = {{flexDirection:'row',alignItems:'center'}}>
                                    <Image style = {styles.nav_image} source = {require('./image/student_card.png')}/>
                                    <Text style = {styles.nav_text}>学生证</Text>
                                </View>
                                <Image style = {styles.nav_item_icon} source = {require('../../image/more_icon.png')}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.nav_item_view}>
                                <View style = {{flexDirection:'row',alignItems:'center'}}>
                                    <Image style = {styles.nav_image} source = {require('./image/campus_card.png')}/>
                                    <Text style = {styles.nav_text}>校园卡</Text>
                                </View>
                                <Image style = {styles.nav_item_icon} source = {require('../../image/more_icon.png')}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                        <View style = {[styles.nav_item_view,{borderBottomWidth:0}]}>
                                <View style = {{flexDirection:'row',alignItems:'center'}}>
                                    <Image style = {styles.nav_image} source = {require('./image/schedule_card.png')}/>
                                    <Text style = {styles.nav_text}>课程表</Text>
                                </View>
                                <Image style = {styles.nav_item_icon} source = {require('../../image/more_icon.png')}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.nav_view}>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.nav_item_view}>
                                <View style = {{flexDirection:'row',alignItems:'center'}}>
                                    <Image style = {styles.nav_image} source = {require('./image/feedback.png')}/>
                                    <Text style = {styles.nav_text}>意见反馈</Text>
                                </View>
                                <Image style = {styles.nav_item_icon} source = {require('../../image/more_icon.png')}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {[styles.nav_item_view,{borderBottomWidth:0}]}>
                                <View style = {{flexDirection:'row',alignItems:'center'}}>
                                    <Image style = {styles.nav_image} source = {require('./image/set_icon.png')}/>
                                    <Text style = {styles.nav_text}>设置</Text>
                                </View>
                                <Image style = {styles.nav_item_icon} source = {require('../../image/more_icon.png')}/>
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
        paddingLeft:15,
        marginTop:10,
        backgroundColor:'#fff',
    },
    nav_item_view:{
        flex:1,
        flexDirection:'row',
        height:40,
        borderBottomWidth:1,
        alignItems:'center',
        borderBottomColor:color.border,
        justifyContent:'space-between'
    },
    nav_image:{
        width:25,
        height:25,
    },
    nav_item_icon:{
        width:16,
        height:16,
        marginRight:10
    },
    nav_text:{
        fontSize:16,
        color:'#333',
        paddingLeft:10,
    },
});