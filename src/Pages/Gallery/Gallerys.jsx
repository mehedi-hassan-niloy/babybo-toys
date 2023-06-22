
import g1 from './../../assets/gallery/g1png.png'
import g2 from './../../assets/gallery/g2.png'
import g3 from './../../assets/gallery/g3.png'
import g4 from './../../assets/gallery/g4.png'
import g5 from './../../assets/gallery/g5.png'
import g6 from './../../assets/gallery/g6.png'
import g7 from './../../assets/gallery/g7.png'
import g8 from './../../assets/gallery/g8.png'


const Gallerys = () => {
    return (
        <div className=" bg-dark">
            <h1 className='text-center mt-5 pt-5' style={{ color: "blue" }} >Gell<span className='text-info'>ary</span> </h1>
            <hr className='mx-auto pb-2' style={{ color: "blue", width: "500px" }} />
            <div>
                <div className="row pb-5">
                    <div className="col-lg-3 align-self-start"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img className='w-100' src={g1} alt="" />
                    </div>
                    <div className="col-lg-3 align-self-start"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img className='w-100' src={g4} alt="" />
                    </div>
                    <div className="col-lg-3 align-self-center"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">

                        <img className='w-100' src={g2} alt="" />
                    </div>
                    <div className="col-lg-3 align-self-end"
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        <img className='w-100' src={g3} alt="" />
                    </div>
                    <div className="col-lg-3 align-self-end"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img className='w-100' src={g5} alt="" />
                    </div>
                    <div className="col-lg-3 align-self-end"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    >
                        <img className='w-100' src={g6} alt="" />
                    </div>
                    <div className="col-lg-3 align-self-end"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    >
                        <img className='w-100' src={g7} alt="" />
                    </div>
                    <div className="col-lg-3 align-self-end"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    >
                        <img className='w-100' style={{ height: "300px" }} src={g8} alt="" />
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Gallerys;