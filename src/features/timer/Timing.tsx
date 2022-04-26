import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RoundedButton from '../../components/RoundedButton';
import {paddingSizes, marginSizes, fontSizes} from '../../utils/sizes';
interface onchang {
  onChangetime: any;
}
const Timing: React.FC<onchang> = ({onChangetime}) => {
  return (
    <>
      <RoundedButton
        style={styles.setround}
        textStyle={undefined}
        size={50}
        title={'30'}
        onPress={() => onChangetime(30)}
      />
       <RoundedButton
        style={styles.setround}
        textStyle={undefined}
        size={50}
        title={'60'}
        onPress={() => onChangetime(60)}
      />
      <RoundedButton
        style={styles.setround}
        textStyle={undefined}
        size={50}
        title={'90'}
        onPress={() => onChangetime(90)}
      />
      <RoundedButton
        style={styles.setround}
        textStyle={undefined}
        size={50}
        title={'120'}
        onPress={() => onChangetime(120)}
      />
    </>
  );
};

export default Timing;

const styles = StyleSheet.create({
  setround: {
    margin: marginSizes[26],
  },
});
