import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/*const baseURL = "http://localhost:8000/api/wed/my-first-blog-post-1";*/
const Blog =() =>{
    const [blog,setBlogs] =useState([]);
    const[featuredBlog,setFeaturedBlog] =useState([]);
    /*
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/api/wed/featured`).then((response)=>{
            setFeaturedBlog(response.data[0]);
            console.log(response.data[0]);
        });
    })
    const fetchData = async () =>{
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/wed/featured`);
            setFeaturedBlog(res.data[0]);
            console.log(res.data);
        }
        catch(err){
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setFeaturedBlog(response.data);
            console.log(response.data);
        });
      }, []);
    */
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/wed/featured`);
                setFeaturedBlog(res.data[0]);
                
            }
            catch(err){
            }
            }
        fetchData();
    },[]
    );
    useEffect(()=>{
        const fetchBlogs = async () =>{
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/wed/`);
                setBlogs(res.data);
                console.log(res.data);
            }
            catch(err){
            }
        }
        fetchBlogs();
    },[]
    );
    const capitalizeFirstLetter = (word) =>{
        if(word)
            return word.charAt(0).toUpperCase() +word.slice(1);
        return '';
    }
    const getBlogs =()=>{
        let list =[];
        let result = [];
        blog.map(blogPost =>{
            return list.push(
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                    <h3 className="mb-0">{blogPost.title}</h3>
                    <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                    <p className="card-text mb-auto">{blogPost.excerpt}</p>
                    <Link to={`/blog/${blogPost.slug}`} clLinkssName="stretched-link">Continue reading</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                   <img width='200'height='250' src={blogPost.thumbnail} alt='thumbnail' />
                </div>
                
            </div>
         );
        });
        for(let i=0; i<list.length; i +=2){
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1]? list[i+1] :null}
                    </div>
                </div>
            )
        }
        return result;
    };
    
    return (
        <div className='container py-4'>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                <Link className="p-2 link-secondary" to='/category/schedule'>SCHEDULE</Link>
                <Link className="p-2 link-secondary" to='/category/things_to_do'>THINGS_TO_DO</Link>
                <Link className="p-2 link-secondary" to='/category/faqs'>FAQs</Link>
                <Link className="p-2 link-secondary" to='/category/registry'>REGISTRY</Link>
                <Link className="p-2 link-secondary" to='/category/rsvp'>RSVP</Link>
                <Link className="p-2 link-secondary" to='/category/style'>Style</Link>
                <Link className="p-2 link-secondary" to='/category/travel'>Travel</Link>
                </nav>
            </div>
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
                <p className="lead my-3">{featuredBlog.excerpt}.</p>
                <p className="lead mb-0"><Link to={`/blog/${featuredBlog.slug}`} class="text-white fw-bold">Continue reading...</Link></p>

                </div>
            </div>
            {getBlogs()}
        </div>


    );

}
export default Blog;