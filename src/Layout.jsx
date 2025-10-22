
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet /> {}
      </main>
      <Footer />
    </>
  );
}

export default Layout;