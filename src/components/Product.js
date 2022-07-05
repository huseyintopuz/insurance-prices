import {useSelector} from 'react-redux';
import '../components/styles/product.scss';

const Product = () => {
    const { products } = useSelector(state => state.products);

    return (
        <div>
            <ul className='product-group'>
                {products && products.map((product, index) => {
                    return (
                        <li key={index} className='product'>
                            <div>
                                <img width='160px' height='50px' src={product.ImagePath} alt='insurance logo' />
                            </div>
                            <div className='info'>
                                <div className='title'>
                                    <span>{product.ProductDesc}</span>
                                    <span>{product.FirmName}</span>
                                </div>
                                <div className='price'>
                                    <div>{product.QuotaInfo.HasDiscount === true ? 'Peşin' : ''} <span className={(product.QuotaInfo.HasDiscount === true) ? 'cash' : 'bold'}>{product.Cash} TL</span> </div>
                                    {product.QuotaInfo.HasDiscount === true && <h4>{product.QuotaInfo.PremiumWithDiscount} TL</h4>}
                                    <button className={product.QuotaInfo.HasDiscount === true ? 'btn btn-primary' : 'btn btn-outline-primary'} type="button">{(product.QuotaInfo.HasDiscount === true) ? 'SATIN AL' : 'TELEFONDA SATIN AL'}</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Product