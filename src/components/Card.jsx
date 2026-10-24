import './Card.css'

export default function Card({ marca, modelo, preco, em_estoque, imagem_url }) {
  const precoFormatado = preco.toString().replace('.', ',')

  return (
    <div id="card">
      <img
        src={imagem_url}
        alt={`Imagem do modelo ${modelo}`}
        id="productImg"
        lazyloading
      />

      <div id="productDetails">
        <div id="productTitle">
          <h3 id="brand">{marca}</h3>
          <h1 id="model">{modelo}</h1>
        </div>

        <div id="productActions">
          {em_estoque && (
            <>
              <p id="price" className="outlined">R$ {precoFormatado}</p>
              <button id="seeMore">Ver Detalhes</button>
            </>
          )}
          {!em_estoque && <p id="unavailable" className="outlined">Produto sem estoque</p>}
        </div>
      </div>
    </div>
  )
}
