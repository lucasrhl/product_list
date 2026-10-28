import { useState } from 'react'
import { Input } from './components/forms/Input.jsx'
import { Checkbox } from './components/forms/Checkbox.jsx'
import { ProductCategoryRow } from './components/ProductCategoryRow.jsx'
import { ProductRow } from './components/ProductRow.jsx'
import { Range } from './components/forms/Range.jsx'

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
  {category: "Vegetables", price: "$10", stocked: false, name: "Carrot"}  
]

function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState("")
  const [range, setRange] = useState(0)

  const visibleProducts = PRODUCTS.filter(p => {
    if (showStockedOnly && !p.stocked) {
      return false
    }
    if (search && !p.name.includes(search)) {
      return false
    }
    if (range < Number(p.price.slice(1))) {
      return false
    }
    return true
  })

  return <div className="container my-3">
    <SearchBar 
      showStockedOnly={showStockedOnly} 
      onShowStockedOnlyChange={setShowStockedOnly} 
      search={search} 
      onSearchChange={setSearch}
      range={range} 
      onRangeChange={setRange}
    />
    <ProductTable products={visibleProducts} />
  </div>
}

function SearchBar ({ showStockedOnly, onShowStockedOnlyChange, search, onSearchChange, range, onRangeChange}) {
  const maxPrice = PRODUCTS.reduce((max, p) => Math.max(max, parseFloat(p.price.slice(1))), 0)

  return <div>
    <div className="mb-3">
      <Input placeholder="Rechercher..." value={search} onChange={onSearchChange} />
      <Checkbox label="Afficher que les produits en stock" checked={showStockedOnly} onChange={onShowStockedOnlyChange} id="stock-checkbox" />
      <Range min={0} max={maxPrice} value={range} onChange={onRangeChange} />
      <p>Prix maximum : {range}</p>
    </div>
  </div>
}

function ProductTable ({products}) {
  
  const rows = []
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow key={product.name} product={product} />)
  }

  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default App
