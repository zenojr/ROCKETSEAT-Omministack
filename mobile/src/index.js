import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, ScrollView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import api from './services/api';

export default function App() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		api.get('projects').then(response => {
			console.log(response.data);
			setProjects(response.data);
		});
  }, []);
  
  async function handleAddProject(){
    const response = await api.post('projects', {
      title: 'Hy friend',
      owner: 'Zeno'
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
      <TouchableOpacity style={styles.button} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      </SafeAreaView>

      {/* <ScrollView style={styles.container}>
        <Text style={styles.title}>Hello Friend</Text>
        {projects.map( project => <Text style={styles.project} key={project.id} >{project.title}</Text> )}
      </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  project: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
   fontWeight: 'bold',
   fontSize: 16, 
  }
});
