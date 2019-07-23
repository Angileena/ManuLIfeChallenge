import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';

const list = require('../data/savingsAccount.json');

export default class SavingsScreen extends Component {
  static navigationOptions = {
    title: 'Savings Account',
    headerStyle: {
      backgroundColor: '#267D25'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };

  renderTransaction = ({ item }) => {
    return (  
      <View style={styles.dayContainer}>
        <View style={styles.containerTransaction}>
          <Text style={styles.unityName}>{item.description}</Text>
          <Text style={item.deposit_amount ? styles.depositText : styles.withdrawalText}>{item.deposit_amount ? '+$'+item.deposit_amount : '-$'+item.withdrawal_amount}</Text>                      
      </View>  
      <View style={styles.containerTransaction}>
          <Text style={styles.availableBal}>Available Balance</Text>
          <Text style={styles.availableBal}>{item.balance}</Text>             
      </View>  
      </View>
      
    );
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.dateHr}>{format(item.date,'MMM DD, YYYY')}</Text>              
            </View>
            <View>
            <FlatList
            data={item.activity}
            renderItem={this.renderTransaction}
            keyExtractor={item => item.id.toString()}
          />
              </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={list}
            renderItem={this.renderItem}
            keyExtractor={item => item.date.toString()}
          />
        </ScrollView>
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
    marginBottom: 10
  },
  dateHr: {
    fontSize: 15,
    fontWeight:'bold'
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


