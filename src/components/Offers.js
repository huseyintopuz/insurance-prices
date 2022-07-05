import Spinner from './Spinner';
import Spinner2 from './Spinner2';
import Product from './Product';
import Product2 from './Product2';
import { useSelector } from 'react-redux';

const Offers = () => {
    const { isLoading, isLoading2, offerCount, offers } = useSelector(state => state.products);
    console.log({offerCount, offers})
    return (
        <>
            {isLoading ?
                <Spinner /> :
                <Product />
            }
            {isLoading2 ?
                <Spinner2 /> :
                <Product2 />
            }     
        </>
    )
}

export default Offers