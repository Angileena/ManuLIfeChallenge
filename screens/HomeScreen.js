import React, {Component} from 'react';
import {Button, Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,AsyncStorage} from 'react-native';  


export default class HomeScreen extends Component {    
  static navigationOptions = {
    header:null
  };

  state = {
    'loggedIn': 'false'
  }

  componentDidMount = () => AsyncStorage.getItem('loggedIn').then((value) => this.setState({ 'loggedIn': value }))


  
    render() {
      const {navigate} = this.props.navigation;      
      if(this.state.loggedIn == 'true'){
        return(navigate("Accounts"));
      }else{
        return (
          <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            
            <View style={styles.welcomeContainer}>
              <Image
                source={
                     require('../assets/images/Manulife-logo.png')
                }
                style={styles.welcomeImage}
              />
            </View>
    
            <View style={styles.getStartedContainer}>  
              <Text style={styles.getStartedText}>Manulife Account Manager</Text>
                
              <View style={styles.helpContainer}>
               <Button style={styles.openbtn}
                title="Open" color='#267D25'
                onPress={() => navigate('Accounts')}/>
              </View>
            </View>
             
          </ScrollView> 
        </View>     
        );  
      }
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 3,
    },
    welcomeImage: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      marginTop:2,
      alignItems: 'center',
    },    
    getStartedText: {
      fontSize: 30,
      color: '#267D25',
      fontWeight:'bold',
      fontFamily:'space-mono',
      textAlign: 'center',
    },   
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    }
  });
  