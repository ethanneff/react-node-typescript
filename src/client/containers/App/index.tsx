import React, { memo, useState, ChangeEvent, useEffect } from "react";
import logo from "./logo.svg";
import "./index.css";
import axios from "axios";
import uuid from "uuid";

interface Post {
  id: string;
  title: string;
}

const host = "http://localhost:5000/";
export const App = memo(function App() {
  const [addPost, setAddPost] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectPost, setSelectPost] = useState("");

  // read
  const getAllPost = async () => {
    const posts: any = await axios({ url: `${host}posts` });
    setPosts(posts.data);
  };

  // add
  const handleAddPostPress = async () => {
    const data: Post = {
      id: uuid.v4(),
      title: addPost
    };
    await axios({
      url: `${host}posts`,
      method: "post",
      data
    });
    setPosts([...posts, data]);
    setAddPost("");
  };

  const handleAddPostChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAddPost(e.target.value);
  };

  // update
  const handleUpdatePost = (id: string) => async () => {
    await axios({ url: `${host}/posts`, method: "put", data: { id } });
    setAddPost("");
  };

  // delete
  const handleDeletePost = (id: string) => async () => {
    await axios({ url: `${host}/posts`, method: "delete", data: { id } });
    setAddPost("");
  };

  // select
  const handleSelectPost = (id: string) => () => {
    setSelectPost(id);
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleAddPostPress}>
          <input
            type="text"
            placeholder="add a post..."
            value={addPost}
            onChange={handleAddPostChange}
          />
          <button type="button" onClick={handleAddPostPress}>
            submit
          </button>
        </form>
        {posts.map((post: Post) => {
          return (
            <div
              onClick={handleSelectPost(post.id)}
              style={{
                backgroundColor: post.id === selectPost ? "lightgreen" : "#333"
              }}
            >
              <p>{post.title}</p>
              <button type="button" onClick={handleUpdatePost(post.id)}>
                update
              </button>
              <button type="button" onClick={handleDeletePost(post.id)}>
                delete
              </button>
            </div>
          );
        })}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
});
