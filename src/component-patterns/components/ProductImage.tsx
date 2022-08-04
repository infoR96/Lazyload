import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
export const ProductImage = ({ img = '' }) => {

    const { product } = useContext (ProductContext);
  
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