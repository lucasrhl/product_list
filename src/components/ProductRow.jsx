/**
 * Ligne produit dans un tableau à 2 colonnes (nom et prix)
 * 
 * @param {{name: string, price: string, stocked: boolean}} product 
 */
export function ProductRow({product}) {

    const style = product.stocked ? undefined : {color: "red"}

    return <tr>
        <td style={style}>
            {product.name}
        </td>
        <td>{product.price}</td>
    </tr>
}