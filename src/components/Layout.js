import { useEffect } from 'react';
import Offers from "./Offers";
import { useDispatch } from "react-redux";
import { fetchProducts } from '../app/last';
import './styles/layout.scss';

const Layout = () => {

  const dispatch = useDispatch();
  // const { products, products2, isLoading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts())
    // dispatch(fetchProducts2())
  }, [dispatch])

  return (
    <div className='layout'>
        <Offers />
    </div>
  )
}

export default Layout