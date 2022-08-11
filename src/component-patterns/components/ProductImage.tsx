import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
export const ProductImage = ({ img = '' }) => {

    const { product } = useContext (ProductContext);
    let imgToShow: String;
  
    if (img) {
      imgToShow = img;
    } else if (product.img) {
      imgToShow = product.img
    } else {
      console.log('imagen brutal')
      imgToShow = noImage
    }
  
    return (<img className={styles.productImg} src={imgToShow? String(imgToShow) : noImage} alt='Coffe-Mug' />)
  }