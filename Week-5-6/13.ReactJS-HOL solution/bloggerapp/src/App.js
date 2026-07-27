import React from "react";
import "./App.css";

const courses = [
  { id: 1, name: "Angular", date: "4/5/2021" },
  { id: 2, name: "React", date: "6/3/2020" },
];

const books = [
  { id: 101, bname: "Master React", price: 670 },
  { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
  { id: 103, bname: "Mongo Essentials", price: 450 },
];

const blogs = [
  {
    id: 1,
    title: "React Learning",
    author: "Stephen Biz",
    content: "Welcome to learning React!",
  },
  {
    id: 2,
    title: "Installation",
    author: "Schwezdenier",
    content: "You can install React from npm.",
  },
];

function App() {
  return (
    <div className="container">
      <div className="box">
        <h2>Course Details</h2>
        {courses.map((course) => (
          <div key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))}
      </div>

      <div className="box">
        <h2>Book Details</h2>
        {books.map((book) => (
          <div key={book.id}>
            <h4>{book.bname}</h4>
            <p>{book.price}</p>
          </div>
        ))}
      </div>

      <div className="box">
        <h2>Blog Details</h2>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <h5>{blog.author}</h5>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;