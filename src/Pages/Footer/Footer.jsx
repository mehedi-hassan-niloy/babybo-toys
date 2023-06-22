 import facbook from './../../assets/Footer/2021_Facebook_icon.svg.png'
 import insta from './../../assets/Footer/instagram-logo-circle-11549679754rhbcorxntv.png'
 import twee from './../../assets/Footer/download.png'
 import logo from './../../assets/logo/d828c433fd694ae1bf51e4d6637d0bae.png'

const Footer = () => {
  return (

    <div className=" my-5">

      <div
        className="text-center text-lg-start text-white bg-dark rounded"
        
      >

        <div className="container p-4 pb-0">

          <section className="">

            <div className="row">

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <img className='w-25 h-25' src={logo} alt="" />
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Babybo Toys
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>


              <hr className="w-100 clearfix d-md-none" />


              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-white">Marvel</a>
                </p>
                <p>
                  <a className="text-white">Captin Americ</a>
                </p>
                <p>
                  <a className="text-white">Panther</a>
                </p>
                <p>
                  <a className="text-white">Spiderman</a>
                </p>
              </div>


              <hr className="w-100 clearfix d-md-none" />


              <hr className="w-100 clearfix d-md-none" />


              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>


                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <img className='w-25 h-25' src={facbook} alt="" />
                </a>


                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <img className='w-25 h-25' src={insta} alt="" />
                </a>


                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="#!"
                  role="button"
                >
                  <img className='w-25 h-25' src={twee} alt="" />
                </a>


              </div>
            </div>

          </section>

        </div>



        <div
          className="text-center p-3"
        >
          © 2023 Copyright
        </div>
      </div>

    </div>

  )
};

export default Footer;