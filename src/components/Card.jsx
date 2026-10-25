import './Card.css'

export default function Card({ brand, name, price, salePrice, isInStock, image }) {
  const priceFormatado = salePrice
    ? salePrice.toString().replace('.', ',')
    : price.toString().replace('.', ',')

  return (
    <div id="card">
      <img
        src={image}
        alt={`Imagem do name ${name}`}
        id="productImg"
        lazyloading
      />

      <div id="productDetails">
        <div id="productTitle">
          <h3 id="brand">{brand}</h3>
          <h1 id="model">{name}</h1>
        </div>

        <div id="productActions">
          {isInStock && (
            <>
              <p id="price" className={salePrice ? 'outlined sale' : 'outlined'}>R$ {priceFormatado}</p>
              <button id="seeMore">Ver Detalhes</button>
            </>
          )}
          {!isInStock && <p id="unavailable" className="outlined">Produto sem estoque</p>}
        </div>
      </div>
    </div>
  )
}
