import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
let id;
const Timer = () => {
    const [start,setStart]=useState(0)
    const startTimer=()=>{
        id=setInterval(() => {
            setStart(start=>start+=1); 
        },1000);

    }
    const stopTimer=()=>{
     clearTimeout(id);
    }
    const resetTimer=()=>{
        clearTimeout(id);
        setStart(0);
 

    }
    return (
        <>
          <View style={styles.topContainer}>
            <View style={styles.sectionStyles}>
              <Text style={styles.sectionStyle}>{start}</Text>
            </View>
            <View style={styles.container}>
            <TouchableOpacity 
            style={styles.box1} onPress={()=>startTimer()}>
            <View >
                <Text style={styles.plus}>Start</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.box2} onPress={()=>stopTimer()}>
            <View >
                <Text style={styles.minus}>Stop</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.box3} onPress={()=>resetTimer()}>
            <View >
                <Text style={styles.minus}>Reset</Text>
              </View>
            </TouchableOpacity>
             
             
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
        width: 100,
        height: 50,
        backgroundColor: '#00D100',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flex: 2,
        marginLeft: 30,
      },
      box2: {
        width: 100,
        height: 50,
        backgroundColor: 'red',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft:30,
        marginRight: 10,
      },
      box3: {
        width: 100,
        height: 50,
        backgroundColor: 'yellow',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft:30,
        marginRight: 20,
      },
    });

export default Timer
