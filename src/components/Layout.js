import { useEffect } from 'react';
import ProductList from "./ProductList";
import { useDispatch } from "react-redux";
import { fetchProducts } from '../app/last';
import './styles/layout.scss';

const Layout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
    // dispatch(fetchProducts2())
  }, [dispatch])

  return (
    <div className='layout'>
        <ProductList />
    </div>
  )
}

export default Layout