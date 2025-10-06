import Input from './Input'

function Carte(){
    return(
        <div>
            <h1>Carte de visite</h1>
            <Input title="nom" data="El Alami" />
            <Input title="prenom" data="Sirine" />
            <Input title="age" data="21" />
            <Input title="ville" data="Bruxelles" />
        </div>
    )
}

export default Carte