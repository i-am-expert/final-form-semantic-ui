import React, { Component } from "react";
import { Icon, Pagination } from "semantic-ui-react";
import axios from "axios";
import "./style.css";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postPerPage: 10,
      activePage: 1,
      totalPages: 0,
      currentPosts: [],
    };
  }

  getCurrentPosts = (pageNum) => {
    let start = (pageNum - 1) * this.state.postPerPage;
    let end = Math.min(start + 10, this.state.posts.length);
    const posts_ = this.state.posts.slice(start, end);
    console.log(start, end);
    this.setState({
      currentPosts: posts_,
    });
  };

  //   pageChange = (e, { activePage }) => {
  //     this.setState({ activePage: activePage });
  //     // this.getCurrentPosts(this.state.activePage);
  //     console.log(this.state.activePage);
  //   };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
    this.getCurrentPosts(activePage);
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = res.data;
    this.setState({
      posts: data,
      totalPages: data.length / this.state.postPerPage,
      currentPosts: data.slice(0, 10),
    });
  }

  render() {
    return (
      <div>
        {/* <div>{this.getCurrentPosts()}</div> */}
        {this.state.currentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        <br /> <br />
        <Pagination
          activePage={this.state.activePage}
          //   ellipsisItem={{
          //     content: <Icon name="ellipsis horizontal" />,
          //     icon: true,
          //   }}
          firstItem={{ content: "First" }}
          lastItem={{ content: "Last" }}
          prevItem={{ content: <Icon name="angle double left" />, icon: true }}
          nextItem={{ content: <Icon name="angle double right" />, icon: true }}
          totalPages={this.state.totalPages}
          onPageChange={this.handlePaginationChange}
        />
      </div>
    );
  }
}

export default Home;
