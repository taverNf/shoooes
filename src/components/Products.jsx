import { PRODUCTS_DATA } from "../utils/data.js"
import './Products.css'
import Card from "./Card.jsx"

export default function Products({ searchFilter }) {
  const FILTERED_PRODUCTS = PRODUCTS_DATA.filter((product) => {
    if (!searchFilter) {return product}
    const isFilteredProduct =
      product.name.toLowerCase().includes(searchFilter.toLowerCase().trim()) ||
      product.brand.toLowerCase().includes(searchFilter.toLowerCase().trim())
    return isFilteredProduct
  })

  const filterClassName = FILTERED_PRODUCTS.length != PRODUCTS_DATA.length

  return (
    <section>
      <h2 id="pageTitle">Produtos</h2>
      <ul className={filterClassName && 'searching'}>
        {FILTERED_PRODUCTS.map(product => <Card key={product.id} {...product} />)}
      </ul>
    </section>
  )
}