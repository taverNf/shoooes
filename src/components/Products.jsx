import { PRODUCTS_DATA } from "../utils/data.js"
import './Products.css'
import Card from "./Card.jsx"

export default function Products() {
  return (
    <>
      <ul>
        {PRODUCTS_DATA.map(product => <Card key={product.id} {...product} />)}
      </ul>
    </>
  )
}