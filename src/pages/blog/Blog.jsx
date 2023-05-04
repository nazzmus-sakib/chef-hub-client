import React from "react";
import NavigationBar from "../shared/NavigationBar";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 gap-10 px-5 lg:px-[200px] mt-20 mb-5">
      <h2 className="text-4xl text-center">Blog Page</h2>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the differences between uncontrolled and controlled
            components ?
          </h2>
          <p>
            A Controlled component is a component in which the value of the
            input field is controlled by React state. The component itself
            manages the state of the input and updates the state when the user
            interacts with the input field. Controlled components use the value
            attribute of the input element to receive the value from the state
            and use the onChange event to update the state with the new value.
            Uncontrolled component is a component in which the value of the
            input field is managed by the browser. The component does not manage
            the state of the input, and instead relies on the browser to update
            the input field value when the user interacts with it. Uncontrolled
            components use the defaultValue attribute of the input element to
            set the initial value of the input.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the difference between nodejs and express js?
          </h2>
          <p>
            Node.js introduced JavaScript to a new level. While JavaScript is an
            application-side language for development, Node.js covers
            server-side programming. Because of Node.js, JavaScript has become
            an all-purpose full-stack language for development. The JS front and
            the Node.js backend are simpler to maintain sync due to the use of a
            single language across each side of an application. In addition,
            Node.js lets your applications create programs in JavaScript and
            then execute them by the servers.Node is part of the well-known MEAN
            and MERN JavaScript-focused technology stacks encompassing the
            entire web application development process. In addition, numerous
            frameworks have been developed specifically for Node (such as
            Meteor, Sails, etc.), and Express.js is just one of them. Express.js
            is a lightweight open-source, flexible, and flexible Node.js
            web-based application framework. It can be utilized as an
            alternative to Node.js to provide better web performance. Express is
            among the top well-known Node.js web application framework.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            Hooks are the basic building blocks of the Hooks API. They are
            functions that we call in components or custom hooks that let us add
            dynamic logic to components or custom hooks.Most recent versions of
            React provide the Hooks API, which lets us create frontend
            JavaScript apps with function components and the logic behind them.
            React provides a few built-in hooks which we can use in components
            or use them to create our own hooks with self-contained reusable
            logic.Hooks are the basic building blocks of the Hooks API. They are
            functions that we call in components or custom hooks that let us add
            dynamic logic to components or custom hooks.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How to validate React props using PropTypes ?
          </h2>
          <p>
            React is a JavaScript library used for creating interactive web
            frontend applications. It is one of the most popular libraries
            because of its easy-to-use API. We combine components into an app by
            passing data from parent components to child components. To do this,
            we pass data with props. Props are like HTML attributes, but they
            can contain dynamic data. A parent component passes props down to
            child components. And child components receive them. We can pass any
            data as props. Therefore, we need a way to validate their data type
            so that the child component gets what they expect.And we validate
            them by setting the propTypes property of the FooComponent component
            to an object that has the names of the props to validate as the
            keys. And the corresponding values are the data type of the props.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
