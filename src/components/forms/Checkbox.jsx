/**
 * Un checkbox avec une étiquette
 * @param {string} label 
 * @param {boolean} checked 
 * @param {(checked: boolean) => void} onChange 
 * @param {string} id
 */
export function Checkbox({label, checked, onChange, id}) {
    return <div className="form-check">
        <input 
            type="checkbox" 
            className="form-check-input" 
            checked={checked} 
            onChange={(e) => onChange(e.target.checked)}
            id={id} 
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}