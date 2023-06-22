import { Button, Carousel } from "react-bootstrap";
import Navbars from "../Navbar/Navbars";

import banner1 from './../../assets/banner img/banner1.png'
import banner2 from './../../assets/banner img/banner2.png'
import banner3 from './../../assets/banner img/banner3.png'
import useTitle from "../../Hooks/UseTitle";




const Home = () => {
    useTitle("Home")
    return (
        <div className="">
            <Navbars />

            <Carousel fade className="mt-2">

                <Carousel.Item className="">
                    <img
                        style={{ height: '600px', width: '100%' }}
                        className="d-block bg-info bg-gradient"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="pb-5">
                            <h3 className="pb-3">BabyBo Toys Shop</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt quas, consequatur voluptas porro quod voluptatem expedita, ipsam aliquam tempore dolor, maiores atque magnam totam in molestiae animi odio explicabo?</p>
                            <Button variant="info" className="text-light">Shop Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{ height: '600px', width: '100%' }}
                        className="d-block "
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="pb-5">
                            <h3 className="pb-3">BabyBo Toys Shop</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt quas, consequatur voluptas porro quod voluptatem expedita, ipsam aliquam tempore dolor, maiores atque magnam totam in molestiae animi odio explicabo?</p>
                            <Button variant="info" className="text-light">Shop Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px', width: '100%' }}
                        className="d-block "
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="pb-5">
                            <h3 className="pb-3">BabyBo Toys Shop</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt quas, consequatur voluptas porro quod voluptatem expedita, ipsam aliquam tempore dolor, maiores atque magnam totam in molestiae animi odio explicabo?</p>
                            <Button variant="info" className="text-light">Shop Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;