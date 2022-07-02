import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPrices } from '../features/insurance';
import './styles/offers.css'

const Offers = () => {

    const dispatch = useDispatch();
    const price = useSelector((state) => state.price);
    const lists = price?.products?.offerList;

    useEffect(() => {
        dispatch(fetchPrices())
    }, [dispatch])

    console.log(lists?.map(list => list));
    return (
        <div>
            <ul className='list-group'>
                {lists && lists.map((list, index) => {
                    return (
                        <li key={index} className='list'>
                            <div>
                                <img width='160px' height='50px' src={list.ImagePath} alt='insurance logo' />
                            </div>
                            <div className='info'>
                                <div className='title'>
                                    <span>{list.ProductDesc}</span>
                                    <span>{list.FirmName}</span>
                                </div>
                                <div className='price'>
                                    <div>{list.QuotaInfo.HasDiscount === true ? 'Peşin' : ''} <span className={(list.QuotaInfo.HasDiscount === true) ? 'cash' : 'bold'}>{list.Cash} TL</span> </div>
                                    {list.QuotaInfo.HasDiscount === true && <h4>{list.QuotaInfo.PremiumWithDiscount} TL</h4>}
                                    <button className={list.QuotaInfo.HasDiscount === true ? 'btn btn-primary' : 'btn btn-outline-primary'}  type="button">{(list.QuotaInfo.HasDiscount === true) ? 'SATIN AL' : 'TELEFONDA SATIN AL'}</button>
                                </div>
                                
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Offers