import { useState } from "react";
import "./App.css";
import { CreatePost } from "../components/CreatePost";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PostList } from "../components/PostList";
import { Sidebar } from "../components/Sidebar";
import { PostListsProvider } from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListsProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header />
            {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListsProvider>
    </>
  );
}

export default App;
