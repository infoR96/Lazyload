import React, { createContext, ReactElement, useContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
  product: Product,
  children?: ReactElement | ReactElement[]
}

interface Product {
  id: string;
  nombre: string;
  img?: string;
}
interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductImage = ({ img = '' }) => {

  const { product } = useContext(ProductContext);

  let imgToShow: String;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (<img className={styles.productImg} src={img ? img : noImage} alt='Coffe Mug' />)
}
const ProductTitle = ({ nombre = '' }) => {
  const { product } = useContext(ProductContext);
  let titleToShow: String;


  return (<span className={styles.productDescription}>{nombre?nombre:product.nombre}</span>)


}

export const ProductButtons = () => {

  const { increaseBy, counter } = useContext(ProductContext)

  return (<div className={styles.buttonsContainer}>
    <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
    <div className={styles.countLabel}>{counter}</div>
    <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>+</button>
  </div>
  )
}


export const ProductCard = ({ product, children }: Props) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage image={product.image}/>
        <ProductTitle nombre={product.nombre}/>
        <ProductButtons increaseBy={increaseBy} counter={counter}/> */}
      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
