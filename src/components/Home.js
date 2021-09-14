import {Link} from 'react-router-dom';



const Home =() =>
{   

     return(
        <div className="container py-4">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">William and Haffy</h1>
                <p className="col-md-8 fs-4">We are getting married..</p>
                <p>The dates are 4<sup>th</sup> & 11<sup>th</sup> of December '18 and we would like you to be a part of it</p>
                    <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our Blog</Link>
                </div>
            </div>
        
        </div>
    );

};
export default Home;