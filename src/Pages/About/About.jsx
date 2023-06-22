import toys from './../../assets/about/toys.jpg'

const About = () => {
    return (
        <div className='mt-1 bg-dark rounded'>
            <h1 className='text-center mb-4 pt-5 text-info'>About <span style={{color: "blue"}}>Shop</span></h1>
            <hr className='mx-auto pb-3' style={{color:"blue", width:"500px"}} />
           
            <div className="container " >
                <div className="row gx-5 g-2">
                    <div className="col-12 col-lg-6">
                       <img className='h-100 w-100 rounded' src={toys} alt="" />
                    </div>
                    <div className="col">
                       <div className='pt-4'>
                        <h1 className='pb-4 ' style={{color:"blue", width:"500px"}}> Toys Shop <span className='text-info'>Details</span></h1>
                        <hr className=' pb-3' style={{color:"blue", width:"400px"}} />
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla totam, ad explicabo itaque iste recusandae assumenda! Explicabo sequi reprehenderit doloremque porro odio quas repellendus omnis, excepturi placeat, perspiciatis aperiam!
                        Recusandae cupiditate, rem id qui alias assumenda esse dolor dolorem voluptatem temporibus sit quibusdam dignissimos excepturi sequi? Aperiam molestias minima fugiat, velit consectetur eius tempora dolorum in dolore quae labore.
                        Placeat nam maxime reiciendis esse. Natus blanditiis magni similique fuga soluta molestiae atque ipsam eaque sequi, nisi cum. Laborum consectetur adipisci dolores atque et eaque quas. Qui necessitatibus est repellat!
                        Recusandae cupiditate, rem id qui alias assumenda esse dolor dolorem voluptatem temporibus sit quibusdam dignissimos excepturi sequi? Aperiam molestias minima fugiat, velit consectetur eius tempora dolorum in dolore quae labore.
                        .</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;