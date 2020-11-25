import React, { useState, useEffect } from "react";
function AddClass(props) {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    async function getClass() {
      const request = await fetch("https://test-nal.herokuapp.com/last-post");
      const classes = await request.json();
      setClasses(classes);
    }
    getClass();
  }, []);
  return (
    <div className="wrap-car">
      {classes.map((blog) => {
        return (
          <div className="item-cars" key={blog.id}>
            <div className="img-main-car">
              <div class="price">
                <i class="fas fa-user"></i>&nbsp;
                {blog.author}
              </div>
              <img src={blog.image} alt="true"></img>
            </div>
            <div className="content-item">
              <div className="date">
                <i class="far fa-calendar-alt"></i>&nbsp;
                {blog.date}
              </div>
              <div className="name-care">{blog.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AddClass;
