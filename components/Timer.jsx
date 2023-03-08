import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TimerCard from './TimerCard';
let id;
const Timer = () => {
  const [start, setStart] = useState(0);
  const [min, setMin] = useState(0);
  const [lapObj,setLapObj]=useState({
    start:"00:00",
    end:"00:00",
    dur:"0"
  })
  const [lap,setLap]=useState([]);
  useEffect(() => {
    if (start === 100) {
      setMin(min => (min += 1));
      setStart(0);
    }
  }, [start]);

  const startTimer = () => {
    id = setInterval(() => {
      setStart(start => (start += 1));
    }, 10);
  };
  const stopTimer = () => {
    clearTimeout(id);
  };
  const resetTimer = () => {
    clearTimeout(id);
    setStart(0);
    setMin(0);
  };
  const lapCount=()=>{
     
  }
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.sectionStyles}>
          <Text style={styles.sectionStyle}>
            {min < 10 ? `0${min}` : min}:{start < 10 ? `0${start}` : start}
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.box1} onPress={() => startTimer()}>
            <View>
              <Text style={styles.plus}>Start</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box2} onPress={() => stopTimer()}>
            <View>
              <Text style={styles.minus}>Stop</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3} onPress={() => resetTimer()}>
            <View>
              <Text style={styles.minus}>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.box4} onPress={() => lapCount()}>
            <View>
              <Text style={styles.lap}>Lap Count</Text>
            </View>
          </TouchableOpacity>

      </View>
      <TimerCard text="Lap1"/>
      <TimerCard text="Lap1"/>
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
    fontSize: 24,
  },
  minus: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:10,
  },
  box1: {
    display:"flex",
    width: 100,
    height: 50,
    backgroundColor: '#00D100',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flex: 2,
    marginLeft: 30,
    paddingVertical:9,
    
  },
  box2: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 10,
    paddingVertical:8,
  },
  box3: {
    width: 100,
    height: 50,
    backgroundColor: 'yellow',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 20,
    paddingVertical:9,
  },
  box4: {
    display:"flex",
    width: 140,
    height: 50,
    backgroundColor: '#c71585',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 20,
    marginTop:30,
  },
  lap:{
    color:'white',
    fontSize:20,
    fontWeight:600,
  }
});

export default Timer;
