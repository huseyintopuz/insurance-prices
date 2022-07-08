import Spinner from './Spinner';
import Spinner2 from './Spinner2';
import Product from './Product';
import Product2 from './Product2';
import Inform from './Inform';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const { isLoading, isLoading2 } = useSelector(state => state.products);
    
    return (
        <div className='product-list'>  
            <Inform />
            {isLoading ?
                <Spinner /> :
                <Product />
            }
            {!isLoading && isLoading2 ?
                <Spinner2 /> :
                <Product2 />
            }
        </div>
    )
}

export default ProductList