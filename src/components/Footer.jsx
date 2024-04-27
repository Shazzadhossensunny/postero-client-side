import logo from "../assets/logo.jpg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer footer-center px-10 py-12 lg:py-24 bg-[#f5f3eb]">
      <aside className="space-y-6">
        <img src={logo} alt="" />
        <p>
          Copyright © 2024 <span>Postero</span>. - All right reserved
        </p>
        <div className="flex text-2xl gap-5 cursor-pointer">
          <FaFacebookF id="my-anchor-facebook"></FaFacebookF>
          <Tooltip
            anchorSelect="#my-anchor-facebook"
            content="Facebook"
          ></Tooltip>
          <FaTwitter id="my-anchor-twitter"></FaTwitter>
          <Tooltip
            anchorSelect="#my-anchor-twitter"
            content="Twitter"
          ></Tooltip>
          <FaLinkedinIn id="my-anchor-linkedin"></FaLinkedinIn>
          <Tooltip
            anchorSelect="#my-anchor-linkedin"
            content="Linkedin"
          ></Tooltip>
        </div>
      </aside>
    </footer>
  );
}
