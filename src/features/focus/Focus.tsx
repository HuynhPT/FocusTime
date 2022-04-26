import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
// thư viện focus UI hệ thống có sẵn
import {TextInput} from 'react-native-paper';
import RoundedButton from '../../components/RoundedButton';
import {fontSizes, paddingSizes, marginSizes} from '../../utils/sizes';
import {color} from '../../utils/colors';
interface state {
  addSubject: any;
}
const Focus: React.FC<state> = ({addSubject}) => {
  const [click, setClick] = React.useState<String | null>(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleCotainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder=" here"
            style={styles.titleinput}
            onChangeText={val => setClick(val)}
          />
          <RoundedButton
            title="+"
            style={undefined}
            textStyle={undefined}
            size={50}
            onPress={() => {
              addSubject(click);
              // console.log('click');
            }}
          />
        </View>
        <View>
          <Text>

          </Text>
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleCotainer: {
    flex: 0.5,
    justifyContent: 'center',
    padding: paddingSizes[20],
  },
  title: {
    fontSize: fontSizes[30],
    fontWeight: 'bold',
    color: color.while,
  },
  titleinput: {
    flex: 1,
    paddingLeft: paddingSizes[20],
    marginRight: marginSizes[10],
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: paddingSizes[20],
    alignItems: 'center',
  },
});
