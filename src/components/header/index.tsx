import { View, Image } from 'react-native';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require('../../../assets/using/Logo.png')} />
    </View>
  )
}