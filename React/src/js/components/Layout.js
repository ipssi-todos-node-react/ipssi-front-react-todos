import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import TodoForm from "./Forms/TodoForm";
import Todos from "./Todos";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <TodoForm />
          <div class="raw">
              <Todos />
          </div>
        {/*<Footer />*/}
      </div>
    );
  }
}
