import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -48,
    marginBottom: 40
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#ffffff',
    height: 56, 
    padding: 14,
    fontSize: 16,
    marginRight: 8
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgButton: {
    width: 16,
    height: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  containerTotal: {
    flexDirection: 'row',
  },
  created: {
    fontSize: 14,
  },
  total: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626',
    borderRadius: 10,
    width: 25,
    height: 25,
  },
  text: {
    color: '#D9D9D9',
  },
  containerList: {
    marginTop: 15,
    borderTopWidth: 2,
    borderTopColor: '#262626',
    marginBottom: 10
  }
})