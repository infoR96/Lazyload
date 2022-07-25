import React from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props{
  product:Product
}

interface Product {
  id:string;
  nombre:string;
  image?:string;
}

 const ProductImage = ({image=''})=>{
return(<img className={styles.productImg} src={image? image:noImage} alt = 'Coffe Mug'/>)
}
const ProductTitle = ({nombre=''})=>{
  return(<span className={styles.productDescription}>{nombre}</span>)
  }
export const ProductCard = ({product}:Props) => {
  
const {counter,increaseBy}=useProduct()

  return (
    <div className={styles.productCard}>
        <ProductImage image={product.image}/>
        <ProductTitle nombre={product.nombre}/>
        
        <div className={styles.buttonsContainer}>
          <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
          <div className={styles.countLabel}>{counter}</div>
          <button className={styles.buttonAdd }onClick={()=>increaseBy(1)}>+</button>
        </div>
        </div>
  )
}
