/**
 * Ligne de tableau avec le nom de la catégorie
 * 
 * @param {string} name 
 */
export function ProductCategoryRow({name}) {
    return <tr>
        <td colSpan={2} className="fw-bold">
            <strong>{name}</strong>
        </td> 
    </tr>
}