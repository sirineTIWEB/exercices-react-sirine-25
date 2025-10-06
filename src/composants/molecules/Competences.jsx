import Badge from '../atomes/Badge'

function Competences(){
    return(
        <div>
            <h1>Mes compétences</h1>
            <Badge couleur="pink" texte="REACT" />
            <Badge couleur="red" texte="WORDPRESS" />
            <Badge couleur="blue" texte="FIGMA" />
        </div>
    )
}

export default Competences