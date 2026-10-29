import { useParams } from 'react-router-dom'
import { PRODUCTS_DATA } from '../utils/data'
import { Star } from 'lucide-react'
import Header from '../components/Header'
import './ProductDetails.css'

export default function ProductDetails() {
  const { id } = useParams()
  const product = PRODUCTS_DATA.find(item => item.id == id)
  const stars = Array(Math.round(product.rating)).fill("#ffcc4a")
  const greyStars = Array(Math.round(5 - stars.length)).fill("#ccc")

  return (
    <>
      <Header />
      <main>
        <section id="imgColumn">
          <img src={product.image} alt="" />
        </section>
        <section id="detailsColumn">
          <h1>{product.name}</h1>
          <h3>{product.brand}</h3>
          <div id="rating">
            <div id="starsBox">
              {stars.map(star => <Star fill={star} strokeWidth={0} />)}
              {greyStars.map(star => <Star fill={star} strokeWidth={0} />)}
            </div>
            <p>{product.rating} | {product.reviewCount} avaliações</p>
          </div>
        </section>
      </main>
    </>
  )
}
