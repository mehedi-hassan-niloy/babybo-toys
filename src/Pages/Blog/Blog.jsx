import useTitle from "../../Hooks/UseTitle";
import Footer from "../Footer/Footer";
import Navbars from "../Navbar/Navbars";


const Blog = () => {
    useTitle('Blog')
    return (
        <div className="container">
            <Navbars/>
            <div className="row">
                <div className="col-12 col-lg-6 shadow-lg p-3 mb-5 bg-body rounded">
                    <h4> Q1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                    <p>Ans  : You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code</p>
                    

                </div>
                <div className="col-12 col-lg-6 shadow-lg p-3 mb-5 bg-body rounded">
                    <h4> Q2 : Compare SQL and NoSQL databases?</h4>
                    <p> Ans : SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div className="col-12 col-lg-6 shadow-lg p-3 mb-5 bg-body rounded">
                    <h4>Q3 : What is express js? What is Nest JS ?</h4>
                    <p>Ans :  Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
                </div>
                <div className="col-12 col-lg-6 shadow-lg p-3 mb-5 bg-body rounded">
                    <h4>Q4 : What is MongoDB aggregate and how does it work</h4>
                    <p>Ans : Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;