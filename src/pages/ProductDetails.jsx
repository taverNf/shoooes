import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS_DATA } from '../utils/data'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import Header from '../components/Header'
import './ProductDetails.css'

export default function ProductDetails() {
  // STATES
  const [quantity, setQuantity] = useState(1)
  
  // CONSTANTES
  const { id } = useParams()
  
  const product = PRODUCTS_DATA.find(item => item.id == id)

  const stars = Array(Math.round(product.rating)).fill("#ffcc4a")
  const greyStars = Array(Math.round(5 - stars.length)).fill("#ccc")

  const formatedPrice = product.price.toString().replace(".", ",")
  const formatedSalePrice = product.salePrice && product.salePrice.toString().replace(".", ",")

  const installmentPrice = product.salePrice ? product.salePrice / 12 : product.price / 12
  const formatedInstallmentPrice = installmentPrice.toFixed(2).toString().replace(".", ",")

  // FUNÇÕES
  function handleSumQuantity() {
    if (quantity == 10) return
    setQuantity(prev => prev + 1)
  }

  function handleSubQuantity() {
    if (quantity == 1) return
    setQuantity(prev => prev - 1)
  }

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

          <div id="priceBox">
            <div id="prices">
              {product.salePrice ? (
                <>
                  <h2 id="price">R$ {formatedSalePrice}</h2>
                  <h2 id="oldPrice">R$ {formatedPrice}</h2>
                </>
              ) : (
                <h2 id="price">R$ {formatedPrice}</h2>
              )}
            </div>

            <div id="priceDetails">
              <p id="paymentOptions">à vista no pix ou 12x de R$ {formatedInstallmentPrice} sem juros</p>
            </div>
          </div>

          <div id="colorsBox" className="detailsBox">
            <h4>Cores disponíveis:</h4>
            <ul id="colorList" className="detailsList">
              {product.colors.map(color => <li key={color} id="color" className="detailsListItem"> <div id="ball" style={{backgroundColor:color}}></div> {color}</li>)}
            </ul>
          </div>

          <div id="sizesBox" className="detailsBox">
            <h4>Tamanhos disponíveis:</h4>
            <ul id="sizeList" className="detailsList">
              {product.sizes.map(size => <li key={size} id="size" className="detailsListItem">{size}</li>)}
            </ul>
          </div>

          <div id="quantityBox">
            <h4>Quantidade:</h4>
            <div id="quantityCounter">
              <button className="quantityBtn" onClick={handleSubQuantity}>-</button>
              <p>{quantity}</p>
              <button className="quantityBtn" onClick={handleSumQuantity}>+</button>
            </div>
          </div>

          <div id="actionsBox">
            <button id="addToCart"><ShoppingCart color={"#fff"} /> Adicionar ao carrinho</button>
            <button id="favorite"><Heart color={"#333"} /> Favoritar item</button>
          </div>

        </section>
      </main>
    </>
  )
}
