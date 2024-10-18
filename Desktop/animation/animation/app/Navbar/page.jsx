import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image className="h-8 w-auto" src="https://remoteworksource.com/wp-content/uploads/2022/08/Strapi.jpg" alt="Strapi Logo"
              width={40}
              height={40}
              
              />
            </div>

            {/* Menu */}
            <div className="hidden sm:-my-px sm:ml-6 sm:flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Product
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Solutions
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Developers
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Docs
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Cloud
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a href="https://github.com/strapi/strapi" className="text-gray-500 hover:text-gray-700 flex items-center space-x-1">
              <FaGithub size={20} />
              <span className="text-sm font-medium">63.0k</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 10h4m1 0a7 7 0 100-14 7 7 0 000 14zm0 7v2a7 7 0 01-7-7H5a7 7 0 007 7z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Contact Sales
            </a>
            <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-500">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

