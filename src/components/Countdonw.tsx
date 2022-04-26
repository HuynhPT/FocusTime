import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fontSizes, paddingSizes, marginSizes} from '../utils/sizes';
import {color} from '../utils/colors';
interface countdonw {
  minutes: any;
  isPause: any;
  onpgot: any;
  onEnd: any;
}
let minuteTomilis = (min: any) => min * 60 * 1000;
let fomartTime = (time: any) => (time < 10 ? `0${time}` : time);
const Countdonw: React.FC<countdonw> = ({
  minutes = 20,
  isPause,
  onpgot,
  onEnd,
}) => {
  let interval = React.useRef<any | any>(null);
  // chức năng đếm ngược
  let countDonw = () => {
    setMilis((time: any) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      let timeLeft = time - 1000;
      onpgot(timeLeft / minuteTomilis(minutes));
      return timeLeft;
    });
  };
  useEffect(() => {
    if (isPause) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDonw, 1000);
    return () => clearInterval(interval.current);
  }, [isPause]);
  useEffect(() => {
    setMilis(minuteTomilis(minutes));
  }, [minutes]);
  let [milis, setMilis] = React.useState<any | any>(minuteTomilis(minutes));
  let hour = Math.floor(milis / 1000 / 60 / 60) % 60;
  let minute = Math.floor(milis / 1000 / 60) % 60;
  let seconds = Math.floor(milis / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {fomartTime(hour)}:{fomartTime(minute)}:{fomartTime(seconds)}
      </Text>
    </View>
  );
};

export default Countdonw;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: fontSizes[70],
    color: color.while,
    fontWeight: 'bold',
    backgroundColor: color.opa,
    padding: paddingSizes[24],
    textAlign: 'center',
  },
});
