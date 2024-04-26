import logo from "../assets/logo.jpg";
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
        <FaFacebookF></FaFacebookF>
        <FaTwitter></FaTwitter>
        <FaLinkedinIn></FaLinkedinIn>
        </div>
      </aside>
    </footer>
  );
}
