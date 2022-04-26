import {StyleSheet, Text, View, Vibration, Platform} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../utils/colors';
import {fontSizes, paddingSizes, marginSizes} from '../../utils/sizes';
import Countdonw from '../../components/Countdonw';
import RoundedButton from '../../components/RoundedButton';
import {ProgressBar} from 'react-native-paper';
import Timing from '../../features/timer/Timing';
// đưa về chế độ ngủ khi tắt ứng dụng
import KeepAwake from 'react-native-keep-awake';
interface timer {
  focuSubject: any;
  OntimerEnd: any;
  clearSubject: any;
}
// const changeKeepAwake = (shouldBeAwake: any) => {
//   if (shouldBeAwake) {
//     KeepAwake.activate();
//   } else {
//     KeepAwake.deactivate();
//   }
// };
const Timer: React.FC<timer> = ({focuSubject, OntimerEnd, clearSubject}) => {
  // changeKeepAwake('shouldBeAwake');
  KeepAwake;
  let [munites, setMunites] = React.useState<any | any>(20);
  let [isPaused, setPaused] = React.useState<any | any>(false);
  let [ispogess, setPogess] = React.useState<any | any>(1);
  let onProgress = (ispogess: any) => {
    setPogess(ispogess);
  };
  let onVibrate = () => {
    if (Platform.OS == 'android') {
      let inteval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(inteval), 5000);
    } else {
      Vibration.vibrate(5000);
    }
  };

  let onChangetime = (changetime: any) => {
    setMunites(changetime);
    setPogess(1);
    setPaused(false);
  };
  let onEnd = () => {
    onVibrate();
    setMunites(0);
    setPogess(1);
    setPaused(false);
    OntimerEnd();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countfdonw}>
        <Countdonw
          minutes={munites}
          isPause={!isPaused}
          onpgot={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.titleCotainer}>
        <Text style={styles.title1}>Focusing On : </Text>
        <Text style={styles.title2}> {focuSubject} </Text>
      </View>
      <View style={styles.pogescontainer}>
        <ProgressBar color="yellow" progress={ispogess} style={styles.pogess} />
      </View>
      <View style={styles.setbutton}>
        <Timing onChangetime={onChangetime} />
      </View>
      <View style={styles.buttonCotainer}>
        {isPaused ? (
          <RoundedButton
            style={undefined}
            textStyle={undefined}
            size={100}
            title={'Pause'}
            onPress={() => setPaused(false)}
          />
        ) : (
          <RoundedButton
            style={undefined}
            textStyle={undefined}
            size={100}
            title={'Start'}
            onPress={() => setPaused(true)}
          />
        )}
      </View>
      <View style={styles.roundbtn}>
        <RoundedButton
          style={undefined}
          textStyle={undefined}
          size={40}
          title={'-'}
          onPress={() => clearSubject(null)}
        />
      </View>
    </View>
  );
};

export default Timer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingSizes[24],
  },
  countfdonw: {
    flex: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  titleCotainer: {
    // flex: 0.5,
    marginTop: marginSizes[24],
  },
  title1: {
    fontSize: fontSizes[24],
    color: color.while,
    textAlign: 'center',
  },
  title2: {
    fontSize: fontSizes[18],
    color: color.while,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonCotainer: {
    flex: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: marginSizes[125],
  },
  pogescontainer: {
    marginTop: marginSizes[20],
  },
  pogess: {
    height: fontSizes[10],
  },
  setbutton: {
    flexDirection: 'row',
    marginTop: marginSizes[20],
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundbtn: {
    margin: marginSizes[20],
  },
});
