import styles from './Project.module.css'
import Message from "../components/Message"
import { useLocation } from "react-router-dom"

function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <div>
            <div>
                <h1>Meus Projetos</h1>
                <a href="#">Novo Projeto</a>
            </div>
            {message && <Message text={message} type="sucess"/>}
        </div>
    )
}

export default Projects