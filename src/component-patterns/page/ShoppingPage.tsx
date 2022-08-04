import { ProductButtons, ProductCard, ProductImage} from '../components/ProductCard'

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
    <ProductCard product={product}>
      <ProductCard.Image/>
      <ProductCard.Title nombre ={'Hola Mundo'}/>
      <ProductCard.Buttons />
    </ProductCard>
    </div>
    </div>
  )
}
