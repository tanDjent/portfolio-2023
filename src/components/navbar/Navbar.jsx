import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a
            href="https://github.com/tanDjent"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/tan_djent/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/vermatanmay/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
