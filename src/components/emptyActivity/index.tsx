import { View, Image, Text } from 'react-native';
import { styles } from './styles';

export function EmptyActivity() {
  return (
    <View style={styles.containerEmpty}>
      <Image style={styles.emptyImage} source={require('../../../assets/using/Clipboard.png')} />
      <Text style={styles.emptyText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyDescription}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}