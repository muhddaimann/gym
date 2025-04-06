import { Text, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Workout() {
  const theme = useTheme();

  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>Workout Plans</Text>
      <Text style={[styles.subText, { color: theme.colors.onBackground }]}>
        Create your cardio and exercise routines here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: hp('1.5%'),
    paddingVertical: hp('1%'),
  },
  title: {
    fontSize: hp('2%'),
    fontWeight: '700',
    marginBottom: hp('1%'),
  },
  subText: {
    fontSize: hp('1.8%'),
    fontWeight: '400',
  },
});
