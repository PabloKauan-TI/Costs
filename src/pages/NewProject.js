import ProjectForm from "../components/ProjectForm"
import styles from "./NewProject.module.css"

function NewProject() {
    return (
        <div className={styles.container_project}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços necessários.</p>
            <ProjectForm btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject