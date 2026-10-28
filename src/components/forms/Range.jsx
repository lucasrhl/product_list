/**
 * 
 * @param {number} value
 * @param {(n: number) => void} onChange
 */
export function Range({min, max, value, onChange}) {
    return <div>
        <input 
            type="range" 
            min={min} 
            max={max} 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
        />
    </div>
}