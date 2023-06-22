
import free from './../../assets/shop about/26399-free-shipping.gif'
import retrun from './../../assets/shop about/25068-return-shipping.gif'
import gift from './../../assets/shop about/112177-lottie-gift-card-redemption.gif'
const ShipingAbout = () => {
    return (
        <div className='mt-5 mb-5 bg-dark rounded'>
            <h1 className='text-center mb-3 pt-5' style={{color:"blue"}}>Shipping <span className='text-info'>About</span></h1>
            <hr className='mx-auto pb-3' style={{color:"blue", width:"500px"}} />
            <div className="container">
                <div className="row pb-5 ">
                    <div className="col-12 col-lg-4">
                        <div className="card mb-3" style={{maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img className='img-fluid rounded-start' src={free} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Free Shipping</h5>
                                        <hr />
                                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                                       </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4">
                     
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img className='img-fluid rounded-start' src={retrun} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Free Retrun</h5>
                                        <hr />
                                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, 
                                       </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4">
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img className='img-fluid rounded-start' src={gift} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Gift Card</h5>
                                        <hr />
                                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, 
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShipingAbout;