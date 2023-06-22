import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Shop from "./Shop";




const Shops = () => {
    const [category, setCategory] = useState([]);
    const [shopProduct, setShopProduct] = useState('');

    useEffect(() => {
        fetch(`https://babybo-toys-server.vercel.app/categorydata?category=${shopProduct}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [shopProduct])

    return (
        <div className="container">
            <h2 className="text-center pt-5 pb-5" style={{color: "blue"}} >Shop By <span className='text-info'>Category</span> </h2>
            <Tabs className=''>
                <TabList className=' pb-3 bg-dark w-75' style={{listStyle: "none"}}>
                   <div className="pt-2 d-lg-flex justify-content-evenly">
                   <Tab onClick={() => setShopProduct('Mervel')} className='bg-info text-white p-2 rounded '>Mervel</Tab>
                    <Tab onClick={() => setShopProduct('Transformers')} className='bg-info text-white p-2 rounded'>Transformers</Tab>
                    <Tab onClick={() => setShopProduct('Star Wars')} className='bg-info text-white p-2 rounded '>Star Wars</Tab>
                   </div>
                </TabList>

                <TabPanel>
                    <div className="row">
                        {
                            category.map(product => <Shop
                                key={product._id}
                                product={product}
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row">
                    {
                            category.map(product => <Shop
                                key={product._id}
                                product={product}
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row">
                    {
                            category.map(product => <Shop
                                key={product._id}
                                product={product}
                            />)
                        }
                       
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shops;