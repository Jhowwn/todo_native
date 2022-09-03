import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Alert } from 'react-native'
import { useState } from 'react';

import { styles } from './styles';
import { Activity } from '../../components/activity/index';
import { EmptyActivity } from '../../components/emptyActivity';

export function Home() {
  const [activities, setActivities] = useState<string[]>([]);
  const [activityName, setActivityName] = useState('');
  const [done, setDone] = useState<string[]>([]);

  function handleCheckedChange(name: string) {
    if(done.includes(name)) {
      setDone(done.filter(done => done !== name));
    }else{
      setDone(prevState => [...prevState, name]);
    }
  }

  function handleActivityAdd() {
    if(activityName === ''){
      return Alert.alert('Atividade vazia', 'Atividade não pode ser vazia .');
    }
    if (activities.includes(activityName)) {
      return Alert.alert('Atividade já cadastrada', 'Está atividade já foi cadastrada.');
    }
    setActivities(prevState => [...prevState, activityName]);
    setActivityName('');
  }

  function handleActivityRemove(name: string) {
    Alert.alert('Remover atividade', `Deseja remover ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => [setActivities(activities.filter(activity => activity !== name)), setDone(done.filter(done => done !== name))]
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setActivityName}
          value={activityName}
        />

        <TouchableOpacity style={styles.button} onPress={handleActivityAdd} >
          <Image style={styles.imgButton} source={require('../../../assets/using/plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer}>
        <View style={styles.containerTotal}>
          <Text style={[styles.created, { color: '#4EA8DE' }]}>Criadas</Text>
          <View style={styles.total}>
            <Text style={styles.text}>{activities.length}</Text>
          </View>
        </View>

        <View style={styles.containerTotal}>
          <Text style={[styles.created, { color: '#8284FA' }]}>Concuídas</Text>
          <View style={styles.total}>
            <Text style={styles.text}>{done.length}</Text>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={activities}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Activity key={item}
              name={item}
              onRemove={() => handleActivityRemove(item)}
              onDone={(name: string) => handleCheckedChange(name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.containerList}>
              <EmptyActivity />
            </View>
          )}
        />
      </View>
    </View>
  )
}