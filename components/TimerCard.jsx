import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TimerCard = (props) => {
  return (
    <View style={styles.item}>
    <View style={styles.itemLeft}>
      <Text style={styles.itemText}>{props.text}</Text>
      <View>
      <Text style={styles.timer}>00:00</Text>
      <Text style={styles.timer}>08:80</Text>
      </View>
   
    </View>
    <View>
        <Text style={styles.parentDur}>DUR</Text>
        <Text style={styles.duration}>47s</Text>
    </View>
  </View>
  )
}

export default TimerCard

const styles = StyleSheet.create({
    item: {
      backgroundColor:"#fff",
      padding:15,
      borderRadius:10,
      flexDirection:"row",
      alignItems:"center", 
      justifyContent:'space-between',
      marginTop:20,
      
      
  },
  itemLeft: {
      flexWrap:"wrap",
      flexDirection:"row",
      alignItems:"center",
      gap:20,
      
  
    },
    itemText: {
      maxWidth:"100%",
      fontWeight:800,
      fontSize:20,
      color:"#c71585"
  
    },
    duration:{
      
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      color:"#b22222",
      fontWeight:"bold",
    },
    timer:{
       fontWeight:"bold",
       color:"#000080"
    },
    parentDur:{
        color:"#c71585",
        fontWeight:"bold",
    }
  });