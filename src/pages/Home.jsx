/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import PostCard from "../Components/PostCard";

export default function Home({ isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // navigate to login page
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Header />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
