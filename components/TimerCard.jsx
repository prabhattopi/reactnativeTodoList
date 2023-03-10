import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TimerCard = ({lapobjs,count}) => {
  return (
    <View style={styles.item}>
    <View style={styles.itemLeft}>
      <Text style={styles.itemText}>Lap {count+1}</Text>
      <View>
      <Text style={styles.timer}>{lapobjs.startSec < 10 ? `0${lapobjs.startSec}` : lapobjs.startSec}:{lapobjs.startMSec < 10 ? `0${lapobjs.startMSec}` : lapobjs.startMSec}</Text>
      <Text style={styles.timer}>{lapobjs.endSec < 10 ? `0${lapobjs.endSec}`:lapobjs.endSec}:{lapobjs.endMSec < 10 ? `0${lapobjs.endMSec}`:lapobjs.endMSec}
      </Text>
      </View>
   
    </View>
    <View>
        <Text style={styles.parentDur}>DUR</Text>
        <Text style={styles.duration}>{lapobjs.dur}s</Text>
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