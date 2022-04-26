import {StyleSheet, Text, View, AsyncStorage, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import Focus from './src/features/focus/Focus';
import {color} from './src/utils/colors';
import Timer from './src/features/timer/Timer';
import {marginSizes, paddingSizes} from './src/utils/sizes';
import RoundedButton from './src/components/RoundedButton';
import FocusHistory from './src/features/focus/FocusHistory';
let STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

const App: React.FC = () => {
  let [focusSubject, setfocusSubject] = React.useState<any | any>(null);
  let [focusHistory, setfocusHistory] = React.useState<any | any>([]);
  console.log(focusHistory);
  let addfocusHistorywithsate = (subject: any, status: any) => {
    setfocusHistory([...focusHistory, {subject, status}]);
  };
  let onClear = () => {
    setfocusHistory([]);
  };
  let saveFocusHistory = async () => {
    try {
      // await thời gian chờ
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (error) {
      console.log('error', error);
    }
  };

  let loadHistory = async () => {
    try {
      let history = await AsyncStorage.getItem('focusHistory');
      // lưu trữ lịch sử
      if (history && JSON.parse(history).length) {
        setfocusHistory(JSON.parse(history));
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    loadHistory();
  }, []);
  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focuSubject={focusSubject}
          OntimerEnd={() => {
            addfocusHistorywithsate(focusSubject, STATUSES.COMPLETE);
            setfocusSubject(null);
          }}
          clearSubject={() => {
            addfocusHistorywithsate(focusSubject, STATUSES.CANCELLED);
            setfocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setfocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: color.timthan,
    paddingTop: paddingSizes[30],
  },
});
