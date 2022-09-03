import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

type Props = {
  name: string;
  onRemove: () => void;
  onDone: (name: string) => void;
}

export function Activity({ name, onRemove, onDone }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  function handleCheckedChange() {
    if (!checked) {
      Alert.alert('Marcar como concluida', `Deseja marcar ${name} como concluida?`, [
        {
          text: 'Sim',
          onPress: () => [setChecked(!checked), onDone(name)]
        },
        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ])
    }
    else {
      Alert.alert('Desmarcar como concluida', `Deseja desmarcar ${name} como concluida?`, [
        {
          text: 'Sim',
          onPress: () => [setChecked(!checked), onDone(name)]
        },
        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ])
    }
  }

  return (
    <View style={styles.containerActivy}>
      <TouchableOpacity onPress={handleCheckedChange} >
        <Image style={styles.check}
          source={!checked ?
            require('../../../assets/using/check.png') :
            require('../../../assets/using/checkTrue.png')}
        />
      </TouchableOpacity>
      <Text style={!checked ? styles.textActivy : styles.doneActivy}>
        {name}
      </Text>
      <TouchableOpacity onPress={onRemove} >
        <Image style={styles.trash} source={require('../../../assets/using/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}