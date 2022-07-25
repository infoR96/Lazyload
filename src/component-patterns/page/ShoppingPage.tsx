import { ProductCard } from '../components/ProductCard'

const product ={
  id:'id',
  nombre:'Coffee Mug-Card',
  image:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div><h1>ShoppingPage</h1>
    <hr/>
    <div style={{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap'
    }}>
    <ProductCard product={product}/>
    </div>
    </div>
  )
}
