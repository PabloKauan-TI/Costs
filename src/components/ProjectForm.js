import Input from "./Input"
import styles from "./ProjectForm.module.css"
import Select from "./Select"
import Submit from "./Submit"

function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do Projeto" 
                placeholder="Insira o nome do projeto" 
            />
            <Input 
                type="number" 
                text="Orçamento Total" 
                placeholder="Insira o orçamento" 
            />
            <Select
                name="category_id"
                text="Seleciona a categoria"
            />
            <Submit
                text={btnText}
            />
        </form>
    )
}

export default ProjectForm