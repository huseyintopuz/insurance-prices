import Spinner2 from './Spinner2';
import { useSelector } from 'react-redux';
import './styles/inform.scss';

const Inform = () => {
    const { offerCount, getOffers, products, isLoading3, isLoading4 } = useSelector(state => state.products);
    console.log({ offerCount, getOffers, products });
    const offersLength = getOffers.length;
    console.log({ offersLength })

    return (
        <>
            {!isLoading3 &&
                <div className='inform'>
                    <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        There are {offerCount} insurance offers for you.
                    </button>

                    {isLoading4 && (offersLength !== offerCount) ?
                        <Spinner2 /> :
                        !isLoading4 && (offersLength === offerCount) &&
                        <div className="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <ul className='product-group'>
                                            {getOffers
                                                .slice().sort((a, b) => a.Cash - b.Cash)
                                                .map((offer, index) => {
                                                    return (
                                                        <li key={index} className='product'>
                                                            <div>
                                                                <img width='160px' height='50px' src={offer.ImagePath} alt='insurance logo' />
                                                            </div>
                                                            <div className='info'>
                                                                <div className='title'>
                                                                    <span>{offer.ProductDesc}</span>
                                                                    <span>{offer.FirmName}</span>
                                                                </div>
                                                                <div className='price'>
                                                                    <div>{offer.QuotaInfo.HasDiscount === true ? 'Peşin' : ''} <span className={(offer.QuotaInfo.HasDiscount === true) ? 'cash' : 'bold'}>{Math.round(offer.Cash)} TL</span> </div>
                                                                    {offer.QuotaInfo.HasDiscount === true && <h4>{Math.round(offer.QuotaInfo.PremiumWithDiscount)} TL</h4>}
                                                                    <button className={offer.QuotaInfo.HasDiscount === true ? 'btn btn-primary' : 'btn btn-outline-primary'} type="button">{(offer.QuotaInfo.HasDiscount === true) ? 'SATIN AL' : 'TELEFONDA SATIN AL'}</button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }

                </div>

            }

        </>

    )
}

export default Inform