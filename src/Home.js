import React from 'react';
import AddClass from './AddClass';
function Home(props) {
    return (
      <main className="main-content">
        <div className="todayhot">
          <div className="title-today-hot">
            <p>New Host</p>
          </div>
            <AddClass></AddClass>
             <div className="button-more-today">
            <a href="#">View All TODAY'S DEALS</a>
          </div>
        </div>
        <div className="top-buying">
          <div className="title-top-buying">
            <p>Tin tức mới nhất</p>
          </div>
          <div className="warp-car-top">
            <div className="top1">
              <img src="https://i.imgur.com/PlpyMar.jpg" alt={1} />
              <p className="text">Our Buyers Check List</p>
            </div>
            <div className="top1">
              <img src="https://i.imgur.com/0NXcQhv.jpg" alt={1} />
              <p className="text">How To Spot Fraud</p>
            </div>
            <div className="top1">
              <img src="https://i.imgur.com/VUvvMyv.jpg" alt={1} />
              <p className="text">Best Used Cars 2018</p>
            </div>
          </div>
          <div className="button-top">
            <a href="#">SEE ALL OUR GUIDES</a>
          </div>
        </div>
      </main>
    );
}

export default Home;
