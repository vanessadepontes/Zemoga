
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewIcons: {
    width: '10%', 
    marginTop: 5,
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  viewText: {
    width: '90%',
    padding: 2,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderBottomWidth: .5,
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  body: {
    fontSize: 14,
  },
});

export default styles;