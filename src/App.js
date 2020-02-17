import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";

import fetchPosts from "./actions";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  fetch = () => {
    this.props.fetchPosts();
  };

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" />
          <SharedButton {...configButton} />
          {posts.length > 0 && <div>{posts.map((post,index) => <ListItem key={index} title={post.title} desc={post.body}></ListItem>)}</div>}
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ postReducer }) => ({
  postsLoading: postReducer.postsLoading,
  postsError: postReducer.postsError,
  posts: postReducer.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
