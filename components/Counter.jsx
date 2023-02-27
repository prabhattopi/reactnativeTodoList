import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Counter = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.sectionStyles}>
          <Text style={styles.sectionStyle}>3</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.plus}>+</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.minus}>-</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '30%',
  },
  sectionStyles: {
    marginTop: 30,
  },
  sectionStyle: {
    fontWeight: 'bold',
    paddingBottom: 10,
    color: 'black',
    fontSize: 54,
  },
  plus: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 34,
  },
  minus:{
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 34,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box1: {
    width: 60,
    height: 60,
    backgroundColor: '#00D100',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flex: 2,
    marginLeft: 30,
  },
  box2: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 30,
  },
});
export default Counter;
