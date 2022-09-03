import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerActivy: {
    backgroundColor: '#333333',
    padding: 15,
    marginTop: 5,
    borderRadius: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  textActivy: {
    color: '#F2F2F2',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    flex: 1,
  },
  doneActivy: {
    color: '#F2F2F2',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    flex: 1,
    textDecorationLine: "line-through"
  },
  trash: {
    width: 32,
    height: 32,
  },
  check: {
    width: 24,
    height: 24,
  },
})