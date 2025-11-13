import Produits from './Produits.jsx'
import data from '../assets/produits.json'

function Row() {

    const produits = data.products;

    const categories = [...new Set(produits.map(p => p.catégorie))];

    return (
        <>
            {tab.map((index) => (
                <tbody key={index}>
                    <tr>
                        <th>{products.catégorie}</th>
                    </tr>
                    <Produits />
                </tbody>
            ))}
        </>

    )
}

export default Row;