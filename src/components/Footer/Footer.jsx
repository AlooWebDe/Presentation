import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#FFF5F5] py-12">
      <div className="container mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="text-center">
          <h3 className="font-semibold text-[#FF6B6B] mb-4">Company</h3>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>About Us</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Our Team</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Careers</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>News</Link>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[#FF6B6B] mb-4">Products</h3>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Cakes</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Cupcakes</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Cookies</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Pies</Link>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[#FF6B6B] mb-4">Resources</h3>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Blog</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Recipes</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>FAQs</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Contact</Link>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[#FF6B6B] mb-4">Legal</h3>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Privacy Policy</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Terms of Service</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Cookie Policy</Link>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[#FF6B6B] mb-4">Connect</h3>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Instagram</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Facebook</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Twitter</Link>
          <Link className="text-[#FF6B6B] hover:underline block mb-2" prefetch={false}>Pinterest</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
