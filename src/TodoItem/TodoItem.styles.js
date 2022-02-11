import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  text: {
    color: 'white',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#afcccf',
    padding: 8,
    margin: 5,
    borderRadius: 10,
  },
  closeButtonContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  closeButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#eee',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.5,
  },
});
