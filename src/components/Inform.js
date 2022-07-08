import { useSelector } from 'react-redux';
import './styles/inform.scss'

const Inform = () => {
    const { offerCount, getOffers, products, isLoading3, isLoading4 } = useSelector(state => state.products);
    console.log({ offerCount, getOffers, products });
    const offersLength = getOffers.length;
    console.log({ offersLength })

    return (
        <>
            {!isLoading3 &&
                <div className='inform'>
                    <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        There are {offerCount} insurance offers for you.
                    </button>

                    {!isLoading4 && (offersLength === offerCount) &&
                        <div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <ul className='product-group'>
                                            {getOffers && getOffers.map((offer, index) => {
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
                                                                <div>{offer.QuotaInfo.HasDiscount === true ? 'Peşin' : ''} <span className={(offer.QuotaInfo.HasDiscount === true) ? 'cash' : 'bold'}>{offer.Cash} TL</span> </div>
                                                                {offer.QuotaInfo.HasDiscount === true && <h4>{offer.QuotaInfo.PremiumWithDiscount} TL</h4>}
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