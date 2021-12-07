import React from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import axios from 'axios';


export default class Personajes extends React.Component{
    url = 'https://gateway.marvel.com:443/v1/public/characters?ts=2&apikey=4d8258a0b76ea4f8a7387f86995dd7f9&hash=eb23cf25a5b6c808ee10d9805166f59a';
    constructor(props){
      super(props);
      this.state = {texto : "",
                    loading : false,
                    personaje : [],
                    nombre : null
                  }
    }
  
    componentDidMount(){
      this.getPelicula();
      var personajes2 = this.state.personaje.length; 
      console.log(personajes2);
    }
  
    getPelicula = () =>{
        this.setState({ loading : true})
    
        fetch(this.url)
        .then(res => res.json())
        .then( res => {
          this.setState({
            loading:false,
            personaje: res.data.results,
            nombre: res.data.results[0].name
            })
        })
      }
  
    
  
    render() {
      if(this.state.loading){
        return (
          <View style={styles.container}>
            <Text style={styles.paragraph}>
              Descargando los personajes
            </Text>
            
          </View>
        );
      } else{ 
          return(
            <ScrollView>
                {this.state.personaje.map((item) => (
                    <View style={styles.container}>
                    <Button style={styles.distancia} mode="contained"> {item.name} </Button>           
                    </View>
                ))}
            </ScrollView>)
        }     
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    distancia: {
      margin: 10
    }
  });