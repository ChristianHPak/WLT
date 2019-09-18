import React, { Component } from "react";
import Index from "./pages/index";

class Homepage extends Component {
  state = {
    currentPage: "Index"
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
    //   case "Portfolio":
    //     return <Portfolio />
      default:
        return <Index />
    }
  };

  render() {
    if (this.state.currentPage === "Index") {
      return (
        <>
          <Index
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange} />
        </>
      );
    // } else {
    //   return (
    //     <>
    //       <Portfolio
    //         currentPage={this.state.currentPage}
    //         handlePageChange={this.handlePageChange} />
    //     </>
    //   );
    }
  }
}

export default Homepage;
