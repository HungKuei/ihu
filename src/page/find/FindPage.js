import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {NavigationItemTitle} from '../../widget/NavigationItems';


export default class FindPage extends PureComponent{

    static navigationOptions = {
        tabBarLabel: '发现',
        headerTitle:(
            <NavigationItemTitle
                title = '校园圈子'
            />
        ),
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style = {styles.tabBar_icon} source = {require('./image/find_selected_icon.png')}/>
                );
            }else{
                return (
                    <Image style = {styles.tabBar_icon} source = {require('./image/find_icon.png')}/>
                );
            }
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <ScrollView>
                    <View style = {styles.three_image_view}>
                        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('FindDetails')}}>
                            <View style = {styles.vertical_view}>
                                <Image source = {require('./image/dynamic_icon.png')} style = {styles.vertical_image}/>
                                <Text style = {styles.vertical_text}>校内动态</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style = {styles.vertical_view}>
                                <Image source = {require('./image/interest_icon.png')} style = {styles.vertical_image}/>
                                <Text style = {styles.vertical_text}>兴趣爱好</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style = {styles.vertical_view}>
                                <Image source = {require('./image/activity_icon.png')} style = {styles.vertical_image}/>
                                <Text style = {styles.vertical_text}>校内活动</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.list_view}>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.list_item_view}>
                                <View style = {styles.image_view}>
                                    <Image source ={require('./image/read_icon.png')} style = {{alignSelf:'center',width:30,height:30}}/>
                                    <Text style = {styles.list_text}>阅读</Text>
                                </View>
                                <Image source = {require('./image/more_icon.png')} style = {{alignSelf:'center', width:20,height:20}}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.list_item_view}>
                                <View style = {styles.image_view}>
                                    <Image source ={require('./image/sport_icon.png')} style = {{alignSelf:'center',width:30,height:30}}/>
                                    <Text style = {styles.list_text}>运动</Text>
                                </View>
                                <Image source = {require('./image/more_icon.png')} style = {{alignSelf:'center', width:20,height:20}}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.list_item_view}>
                                <View style = {styles.image_view}>
                                    <Image source ={require('./image/game_icon.png')} style = {{alignSelf:'center',width:30,height:30}}/>
                                    <Text style = {styles.list_text}>游戏</Text>
                                </View>
                                <Image source = {require('./image/more_icon.png')} style = {{alignSelf:'center', width:20,height:20}}/>
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
        flex:1
    },
    tabBar_icon: {
        width: 22,
        height: 22,
    },
    three_image_view:{
        paddingTop: 15,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'white',
        borderBottomColor:'#dedfe0',
        borderBottomWidth:1
    },
    vertical_view:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        paddingBottom:15,
    },
    vertical_image:{
        alignSelf:'center',
        width:45,
        height:45
    },
    vertical_text:{
        marginTop:5,
        color:'black',
        fontSize:16,
        textAlign:'center'
    },
    list_view:{
        flex:1,
        marginTop:15,
    },
    list_item_view:{
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white',  
        borderBottomColor:'#dedfe0',
        borderBottomWidth:1,
    },
    image_view:{
        flexDirection:'row',
        alignItems: 'center'
    },
    list_text:{
        color:'black',
        fontSize:16,
        textAlign:'center',
        paddingLeft:8,
    },

});