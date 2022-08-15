import {ProductCard, ProductTitle,ProductButtons,ProductImage} from '../components'

import '../styles/custom-styles.css'
const product ={
  id:'id',
  nombre:'Coffee Mug-Card',
  img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div > 
    <h1>ShoppingPage</h1>
    <hr/>
    <div style={{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap'
    }}>

    <ProductCard product={product}>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </ProductCard>

    <ProductCard product={product}
    className='bg-dark'
    >
      <ProductImage />
      <ProductTitle/>
      <ProductButtons/>
    </ProductCard>
    </div>
    </div>
  )
}
