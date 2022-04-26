import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ListRenderItem,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {marginSizes, fontSizes, paddingSizes} from '../../utils/sizes';
import {color} from '../../utils/colors';
import RoundedButton from '../../components/RoundedButton';
interface history {
  focusHistory: any;
  onClear: any;
}
let HistoryItem: ListRenderItem<any | any | undefined> = ({item, index}) => {
  return (
    <Text
      style={{
        color: item.status > 1 ? color.Red : color.Green,
        fontSize: fontSizes[14],
      }}>
      {item.subject}
    </Text>
  );
};
const FocusHistory: React.FC<history> = ({focusHistory, onClear}) => {
  let OnClear = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={styles.areaview}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>
            <FlatList
              style={styles.flast}
              contentContainerStyle={{flex: 1, alignItems: 'center'}}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                style={undefined}
                textStyle={undefined}
                size={100}
                title={'Clear'}
                onPress={() => {
                  OnClear();
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  areaview: {
    flex: 1,
  },
  flast: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    color: color.while,
    fontSize: fontSizes[24],
    textAlign: 'center',
  },
  clearContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
