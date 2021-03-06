import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import Show from './ShowComponent/Show'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Content, Icon } from 'native-base';

class CircleButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <Image
              style={styles.button}
              source={require('../Image/example.png')}
            />
          </TouchableOpacity>
        )
    }
}

class Profile extends Component {
    render(){
        return(
            <View style={styles.profile}>
                <CircleButton />
            </View>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>운동</Text>
            </View>
        )
    }
}



class MainCom extends Component{
    render(){
        return(
            <ScrollView style={styles.main}>
                <Card>
                    <CardItem button onPress={()=> alert('운동1')}>
                        <Left>
                            <Text>스쿼트</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=> alert('운동2')}>
                        <Left>
                            <Text>프론트런지</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=> alert('운동3')}>
                        <Left>
                            <Text>사이드런지</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=> alert('운동4')}>
                        <Left>
                            <Text>플랭크</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }
}

class Box extends Component{
    render(){
        return(
            <View style ={ styles.box}></View>
        )
    }
}


export default class ExerciseTab extends Component {
    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('내정보')}>
                            <Image
                            style={styles.button}
                            source={require('../Image/example.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <Title/>
                    <Content>
                    <ScrollView style={styles.main}>
                <Card>
                    <CardItem button onPress={()=>this.props.navigation.navigate('D0_1_Squat')} style={{height:100}}>
                        <Left>
                            <Text style={{fontSize:20}}>스쿼트</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=> this.props.navigation.navigate('D0_2_FrontLunge')} style={{height:100}}>
                        <Left>
                            <Text style={{fontSize:20}}>프론트런지</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=> this.props.navigation.navigate('D0_3_SideLunge')} style={{height:100}}>
                        <Left>
                            <Text style={{fontSize:20}}>사이드런지</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=>this.props.navigation.navigate('D0_4_Plank')} style={{height:100}}>
                        <Left>
                            <Text style={{fontSize:20}}>플랭크</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                </Card>
            </ScrollView>                    
                    </Content>
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    rootcontainer:{
        flex: 1,
        backgroundColor:'white',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor:'white',
        
    },
    profile: {
        height:75,
        backgroundColor: 'white',
        justifyContent:'center',
        marginTop: 20,
    },
    title :{
        height: 50,
        backgroundColor: 'white',
        justifyContent:'center',
    },
    subtitle:{
        height: 35,
        backgroundColor: 'white',
        justifyContent:'center',
    },
    main :{
        backgroundColor: 'white',
        
    },
    button :{
        width: 70, 
        height: 70, 
        borderRadius: 100 / 2,
        backgroundColor:'#bae8e8',
    },
    box :{
        flex : 0.3,
        backgroundColor: 'white',
        borderWidth: 0.3,
        borderRadius: 10,
    }
});