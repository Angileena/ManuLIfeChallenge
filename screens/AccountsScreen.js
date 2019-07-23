import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, Platform, AsyncStorage} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const list = require('../data/listOfAccounts.json');
const transList = require('../data/accountTransactions.json');

export default class AccountsScreen extends Component {
    static navigationOptions = {
      title: 'My Accounts',
      headerStyle:{
        backgroundColor: '#267D25'
      },
      headerTitleStyle:  {
        color: '#fff'
      }
    };

    state = {
      'loggedIn': 'false'
    }
  
    componentDidMount = () => AsyncStorage.getItem('loggedIn')
    .then((value) => {
      if(value == 'false'){
        AsyncStorage.setItem('loggedIn', 'true');
        this.setState({ 'loggedIn': 'true' });
      }
    });

    logOut = () => {
      AsyncStorage.setItem('loggedIn', 'false');
      this.setState({ 'loggedIn': 'false' });
      this.props.navigation.navigate('Home');
   }
  
  renderItem = ({ item }) => {   
    return (
      <TouchableOpacity onPress={()=>this._onPress(item)}>
      <View style={styles.item}>
        <Text style={styles.itemAcc}>{item.display_name +' - ' +item.account_number}      
        </Text>
        <Text style={styles.itemBal}>{item.balance}</Text>
      </View>
    </TouchableOpacity>     
    );
  };

  _onPress(item) {
    this.props.navigation.navigate(item.navigateTo);
  }

  
 
    render() {
      const {navigate} = this.props.navigation;
        return (
          <View style={styles.container}>
          <View style={styles.containerQuit}>
            <Button title='Quit' color='#267D25' onPress={() => this.logOut()}/>
          </View>
        <View>
        <FlatList
        data={list}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
      />
          </View>
        </View>
     
        );
          }
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     paddingRight:10,
     paddingLeft:10
    },
    item: {
      padding: 10,
      marginBottom:10,
      borderBottomWidth:0.5,
      borderColor: '#267D25'
    },
    itemAcc: {
      fontSize: 15,
      fontWeight:'bold'
    },
    itemBal: {
      fontSize: 15,
      color:'#267D25'
    },
    containerQuit: {
      flexDirection: 'row',
      fontSize:20,
      justifyContent: 'flex-end',
      },   
      quitBtn:{
        paddingLeft:20,
        alignSelf: 'stretch',
        color:'#267D25'
      },
      containerTransaction: {
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize:20
        },   
        unityName:{
          alignSelf: 'flex-start'
        },
        withdrawalText:{
          color:'red'
        },
        depositText:{
          color:'#267D25'
        },
        availableBal:{
          color:'grey',
          fontSize:10,
          fontWeight:'bold'
        },
        dayContainer:{
          paddingLeft:15,
          paddingRight:15,
          paddingBottom:5,
          paddingTop:5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#267D25'
        }
  });

 
  