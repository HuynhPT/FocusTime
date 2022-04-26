import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontSizes, paddingSizes, marginSizes} from '../utils/sizes';
import {color} from '../utils/colors';
interface prop {
  style: any;
  textStyle: any;
  size: any;
  title: any;
  onPress: any;
}
const RoundedButton: React.FC<prop> = ({
  style = {},
  textStyle = {},
  size = 150,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size: any) =>
  StyleSheet.create({
    radius: {
      width: size,
      height: size,
      borderColor: 'white',
      borderRadius: size / 2,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: color.while,
      fontSize: fontSizes[20],
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
    },
  });
