import Input from "./Input"
import styles from "./ProjectForm.module.css"
import Select from "./Select"
import Submit from "./Submit"
import { useState, useEffect } from "react"

function ProjectForm({btnText}){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'aplication/json'
        }})
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, []);

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
                options={categories}
            />
            <Submit
                text={btnText}
            />
        </form>
    )
}

export default ProjectForm