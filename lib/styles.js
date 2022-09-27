import {StyleSheet, Dimensions} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}
const styles = StyleSheet.create({
  container: {
    width: wp(72),
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  flagButtonView: {
    width: wp(20),
    height: '100%',
    minWidth: 32,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagButtonExtraWidth: {
    width: wp(23),
  },
  shadow: {
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  dropDownImage: {
    height: 14,
    width: 12,
    tintColor: 'white',
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    textAlign: 'left',
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 22,
    marginRight: 5,
    fontWeight: '500',
    color: 'white',
  },
  numberText: {
    fontSize: 22,
    color: 'white',
    flex: 1,
  },
});

export default styles;
