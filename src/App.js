import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";



import HomePage from "./pages/HomePage";
import NavbarCompo from "./components/navbar/NavbarCompo";
import LoginPage from "./pages/auth/LoginPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdminDashPage from "./pages/admin/AdminDashPage";

import BlogsPage from "./pages/BlogsPage";
import Footer from "./components/footerCompo/Footer";
import VideoContainer from "./container/VideoContainer";

import DedicatedVideoComponent from "./components/dedicatedVideoComponent/DedicatedVideoComponent";

import html5 from "./data";

import {sanskritam, assamHist ,indianHist} from "./data"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarCompo />

        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/register" element={<HomePage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/blog" element={<BlogsPage />}></Route>

          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/course" element={<CoursesPage />}></Route>

          <Route
            exact
            path="/course/html5"
            element={<VideoContainer CourseTitle="html5" dedicatedVideoComponent={<DedicatedVideoComponent data={html5} />}  />}
          >

          </Route>
          <Route
            exact
            path="/course/sanskrit"
            element={<VideoContainer CourseTitle="sanskritam" dedicatedVideoComponent={<DedicatedVideoComponent data={sanskritam} />}  />}
          >

          </Route>

          <Route
            exact
            path="/course/assamHist"
            element={<VideoContainer CourseTitle="Assam History" dedicatedVideoComponent={<DedicatedVideoComponent data={assamHist} />}  />}
          >

          </Route>

          <Route
            exact
            path="/course/indianHist"
            element={<VideoContainer CourseTitle="indian History " dedicatedVideoComponent={<DedicatedVideoComponent data={indianHist} />}  />}
          >

          </Route>
          

          <Route
            exact
            path="/admin/dashboard"
            element={<AdminDashPage />}
          ></Route>
        </Routes>

        <div style={{ width: "100%", bottom: 0 }}>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
