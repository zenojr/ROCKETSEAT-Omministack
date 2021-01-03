import React, {useState, useEffect} from 'react';
import api from './services/api';
import Header from './components/Header';
import './components/App.css';
import backgroundImage from './assets/bg01.jpeg';

function App() {

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    },[]);

    
    async function handleddProject(){
        // setProjects([...projects, `New project ${Date.now()}`]);
       const response = await api.post('projects', {
            title: `New Project ${Date.now()}`,
            owner: "Zeno Jr"
        });

        const project = response.data;
        setProjects([... projects, project]);
    }

    return (
        <>
            <Header title="Projects" />
            <img width={300} src={backgroundImage} alt=""/>
            <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li> )}
            </ul>
            <button type='button' onClick={handleddProject}>Add Project</button>
        </>
    )
}

export default App;