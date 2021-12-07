import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { Navegation } from '../App';

google_url = "https://www.googleapis.com/oauth2/v3/userinfo?access_token="

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInfo: null,
      imgUser: null
    }
  }
  
  componentDidMount(){
    console.log("en proceso")
    let token = google_url+this.props.route.params.auth.accessToken;
    this.getUserInfo(token);
  }

  getUserInfo(token){
    fetch(token)
    .then(res => res.json())
    .then(res => {console.log(res);
      this.setState({
        userInfo: res.name,
        imgUser: res.picture
      });
    })
  }
  
  render(){
      return (
        <View style={styles.container}>
          <View style={styles.container2}>
          <Text>Bienvenido</Text>
          <Image source={{uri: this.state.imgUser}} style={{height:200, width:200, borderRadius: 150/1}}/>
          <Text>{this.state.userInfo}</Text>
          <Button
            title="Ver personajes"
            onPress={() => this.props.navigation.navigate('Personajes')}
          />
          </View>
          <Navegation />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'},
    container2: {  
      alignItems: 'center',
      justifyContent: 'center',
    },
  });