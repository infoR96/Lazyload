import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'


export const ProductTitle = ({ nombre = '' }) => {
    const { product } = useContext(ProductContext);
    // let titleToShow: String;
  
  
    return (<span className={styles.productDescription}>{nombre?nombre:product.nombre}</span>)
  
  
  }