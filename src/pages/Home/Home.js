import React,{useState} from 'react';
import AddClass from './AddClass';
import BlogNew from './BlogNew';
import { Link } from 'react-router-dom';
import SeviceHome from './SeviceHome';
// import { SemipolarLoading } from "react-loadingg";
function Home(props) {
  // const [loading, setLoading] = useState(false);
  return (

    <>
      {/* <SemipolarLoading /> */}
      <main className="main-content">
        <SeviceHome></SeviceHome>
        <div className="todayhot">
          <div className="title-today-hot">
            <p>New Host</p>
          </div>
          <AddClass></AddClass>
          <div className="button-more-today">
            <Link to="/blog">See More</Link>
          </div>
        </div>
        <div className="top-buying">
          <div className="title-top-buying">
            <p>Tin tức mới nhất</p>
          </div>
          <BlogNew></BlogNew>
          <div className="button-top">
            <Link to="/blog">See More</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
