import Row from './Row.jsx'

function Table() {

    return (
        <table>
            <thead>
                <tr>
                    <th>Produits</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <Row />
        </table>

    )
}

export default Table;