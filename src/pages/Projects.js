import styles from './Project.module.css'
import LinkButton from '../components/LinkButton'
import Message from "../components/Message"
import { useLocation } from "react-router-dom"

function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.box}>
            <div>
                <div className={styles.header}>
                    <h1>Meus Projetos</h1>
                    <LinkButton to="/newproject" text="Novo Projeto"/>
                </div>
                {message && <Message text={message} type="sucess"/>}
            </div>
            <div className={styles.card_item}>

            </div>
        </div>
    )
}

export default Projects