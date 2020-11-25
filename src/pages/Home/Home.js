import React from 'react';
import AddClass from './AddClass';
import BlogNew from './BlogNew';
import { Link } from 'react-router-dom';
function Home(props) {
    return (
      <main className="main-content">
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
    );
}

export default Home;
