function ProductCard() {
  return (
    <div className="card-div" style={{ width: '20rem' }}>
  <img src="https://www.tasteofhome.com/wp-content/uploads/2017/09/exps37407_THE1213734_37407_WEB.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Nombre del Producto</h5>
    <p className="card-text">Descripciòn del producto</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>
  )
}

export default ProductCard