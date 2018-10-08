import React from 'react';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import color from './widget/color';
import TabBarItem from './widget/TabBarItem';
import GuidePage from './page/launch/GuidePage';
import HomePage from './page/home/HomePage';
import FindPage from './page/find/FindPage';
import CollegePage from './page/college/CollegePage';
import MessagePage from './page/message/MessagePage';
import MinePage from './page/mine/MinePage';
import LoginPage from './page/login/LoginPage';
import DetailsPage from './page/home/page/DetailsPage';
import FindDetails from './page/find/page/FindDetails';
import MyPage from './page/mine/page/MyPage';



const TabBar = TabNavigator (
    {
        Home: {screen: HomePage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./image/home_icon.png')}
                        selectedImage={require('./image/home_selected_icon.png')}
                    />
                )
            })
        },
        Find: {screen: FindPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '发现',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./image/find_icon.png')}
                        selectedImage={require('./image/find_selected_icon.png')}
                    />
                )
            }) 
        },
        College: {screen: CollegePage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '大学',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./image/college_icon.png')}
                        selectedImage={require('./image/college_selected_icon.png')}
                    />
                )
            })
        },
        Message: {screen: MessagePage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '消息',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./image/message_icon.png')}
                        selectedImage={require('./image/message_selected_icon.png')}
                    />
                )
            })
        },
        Mine: {screen: MinePage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./image/mine_icon.png')}
                        selectedImage={require('./image/mine_selected_icon.png')}
                    />
                )
            })
        }, 
    },
    {
        tabBarComponent:TabBarBottom,
        animationEnabled: false,         // 切换页面时是否有动画效果
        tabBarPosition: 'bottom',        // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false,             // 是否可以左右滑动切换tab
        backBehavior: 'none',            // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        initialRouteName: 'Home',        // 默认先加载的页面组件
        lazy:true,
        tabBarOptions: {
            activeTintColor: '#24a9a9',   // 文字和图片选中颜色
            inactiveTintColor: '#8a8a8a', // 文字和图片未选中颜色
            showIcon: true,               // android 默认不显示 icon, 需要设置为 true 才会显示
            showLabel: true,              //showLabel - 是否显示tab bar的文本，默认是true
            upperCaseLabel: false,        //是否将文本转换为大小，默认是true
            pressColor: '#788493',        //material design中的波纹颜色(仅支持Android >= 5.0)
            pressOpacity: 0.8,            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            indicatorStyle: {height: 0},  //tab 页指示符的样式 (tab页下面的一条线).
            style: {
                backgroundColor: '#fff',  //TabBar的样式
                paddingTop:3,
                paddingBottom:3,
            },
            // labelStyle: {                  //TabBar的文本样式
            //     fontSize: 11,
            //     margin: 1
            // },
        },
    }
);

const Navigator = StackNavigator({
    Guide: {screen: GuidePage},
    TabBar: {screen: TabBar },
    Login: {screen: LoginPage},
    DetailsPage: {screen: DetailsPage },
    FindDetails: {screen: FindDetails },
    MyPage: {screen: MyPage },
    
},


{
    navigationOptions:{
        headerBackTitle:null,
        headerTintColor:'#333333',
        showIcon:true,
        swipeEnabled:false,
        animationEnabled:false,
        headerStyle: {
            marginTop:24,
            height:40,
            backgroundColor: color.primary,
            elevation: 0,
            borderBottomWidth: 0,
        },
    },
    headerMode: 'screen',
    initialRouteName: 'Guide', // 默认先加载的页面组件
    mode: 'modal'       // 定义跳转风格(card、modal)
});

export default Navigator;