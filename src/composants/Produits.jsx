function Produits({produits}) {
    return (
        <>
            {produits.map((produit, index) => (
                <tr key={index}>
                    <td cat={produit.catégorie} data-filter={produit.stocke}> {produit.nom} </td>
                    <td>{produit.prix}</td>
                </tr>
                
            ))}
        </>
        
    )
}

export default Produits;