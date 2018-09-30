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
                                    <Image source ={require('./image/read_icon.png')} style = {styles.list_item_image}/>
                                    <Text style = {styles.list_text}>阅读</Text>
                                </View>
                                <Image source = {require('./image/more_icon.png')} style = {styles.list_image}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.list_item_view}>
                                <View style = {styles.image_view}>
                                    <Image source ={require('./image/sport_icon.png')} style = {styles.list_item_image}/>
                                    <Text style = {styles.list_text}>运动</Text>
                                </View>
                                <Image source = {require('./image/more_icon.png')} style = {styles.list_image}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {}}>
                            <View style = {styles.list_item_view}>
                                <View style = {styles.image_view}>
                                    <Image source ={require('./image/game_icon.png')} style = {styles.list_item_image}/>
                                    <Text style = {styles.list_text}>游戏</Text>
                                </View>
                                <Image source = {require('./image/more_icon.png')} style = {styles.list_image}/>
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
        width:38,
        height:38
    },
    vertical_text:{
        marginTop:5,
        fontSize:15,
        textAlign:'center'
    },
    list_view:{
        flex:1,
        marginTop:15,
    },
    list_item_view:{
        paddingTop:10,
        paddingBottom:10,
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
    list_item_image:{
        alignSelf:'center',
        width:20,
        height:20
    },
    list_image:{
        alignSelf:'center', 
        width:15,
        height:15
    },
    list_text:{
        fontSize:15,
        textAlign:'center',
        paddingLeft:8,
    },

});