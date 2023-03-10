import ProjectForm from "../components/ProjectForm"
import styles from "./NewProject.module.css"
import { useNavigate } from "react-router-dom"

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/projects', {message: 'Projeto criado com sucesso!'})
        }).catch(err => console.log(err))
    }

    return (
        <div className={styles.container_project}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços necessários.</p>
            <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
        </div>
    )
}

export default NewProject