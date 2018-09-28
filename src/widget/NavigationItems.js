import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


export default class NavigationItemBack extends PureComponent{
    render(){
        let icon = this.props.icon &&
            <Image style = {styles.icon} source = {this.props.icon}/>
        let text = this.props.text &&
            <Text style = {styles.text}>{this.props.text}</Text>
        return (
            <TouchableOpacity style = {styles.container} onPress={()=>{
                if(this.props.navigation) {
                    this.props.navigation.goBack();
                }
            }}>
                {icon}
                {text}
            </TouchableOpacity>
        );
    }
}

export class NavigationItemTitle extends PureComponent{
    render(){
        let title = this.props.title &&
        <Text style = {styles.title}>{this.props.title}</Text>
        return(
            <View style = {styles.container}>
                {title}
            </View>
        );
    }
}

export class NavigationItem extends PureComponent{
    render(){
        let icon = this.props.icon &&
            <Image style = {styles.icon} source = {this.props.icon}/>
        let text = this.props.text &&
            <Text style = {styles.text}>{this.props.text}</Text>
        return(
            <TouchableOpacity style = {styles.container}>
                {icon}
                {text}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft:10,
        paddingRight:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 22,
        height: 22,
    },
    text: {
        fontSize: 15,
        color: '#fff',
    },
    title:{
        fontSize: 18,
        color: '#fff', 
    },
});