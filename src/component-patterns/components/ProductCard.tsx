import  { createContext, ReactElement} from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import {   Product, ProductContextProps } from '../interfaces/interfaces'

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?:String

}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export  const ProductCard = ({ product, children, className  }: Props) => {
  const { counter, increaseBy } = useProduct()
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>
        {children }
      </div>
    </Provider>
  )
}

