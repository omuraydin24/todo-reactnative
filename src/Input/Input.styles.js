import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  input: {
    backgroundColor: '#cfcfac',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    color: 'white',
    fontWeight: 'bold'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
