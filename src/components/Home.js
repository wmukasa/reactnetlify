import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home =() =>
{
    const[blog,setblog] =useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/wed/`);
                setblog(res.data);
                console.log(res.data);
            }
            catch(err){
            }
            }
        fetchData();
    },[]
    );
    const getBlogsPictures =()=>{
        let list =[];
        let result = [];
        blog.map(blogPost =>{
            return list.push(
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={blogPost.thumbnail} alt='thumbnail'/>
                    </div>
                </div>
            </div>
            );
        });
        for(let i=0; i<list.length; i +=2){
            result.push(
                <div key={i} id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {list[i]}
                    </div>
                    <div className="carousel-inner">
                        {list[i+1]? list[i+1] :null}
                    </div>
                </div>
            )
        }
        return result;
    };
    return(
        <div className="container py-4">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">William and Haffy</h1>
                <p className="col-md-8 fs-4">We are getting married..</p>
                <p>The dates are 4<sup>th</sup> & 11<sup>th</sup> of December '18 and we would like you to be a part of
                    it</p>
                    <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our Blog</Link>
                </div>
            </div>
        
        </div>
    );

};
export default Home;