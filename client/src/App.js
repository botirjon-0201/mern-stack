import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CreatePost, Home, Profile, LogIn } from "./pages";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { setUser } from "./redux/actions";

function App() {
  const Routing = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch(setUser(user));
        navigate("/");
      } else {
        navigate("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    );
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
