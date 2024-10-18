import Image from 'next/image';
import { FaShopify } from 'react-icons/fa'; // Shopify icon from react-icons
import { SiSentry } from 'react-icons/si'; // Sentry icon from react-icons

const ServiceCards = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      {/* Main container for the app */}
      <div className="relative w-[350px] h-[450px] max-w-4xl  p-2 bg-white shadow-lg rounded-lg">
        {/* Placeholder background with left menu */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-blue-100 rounded-lg"></div>

        {/* Content section for service icons */}
        <div className="relative grid grid-cols-2 gap-1 mt-10">
          {/* Mux card */}
          <div className="flex flex-col items-center justify-centerbg-transparent    rounded-lg">
            <Image
              src="https://www.kisacoresearch.com/sites/default/files/logos/mux-logo.png" // Replace with your local MUX logo image path
              alt="Mux"
              width={50}
              height={50}
              className="mb-2"
            />
            <p className="text-lg text-gray-700 font-semibold">Mux</p>
          </div>

          {/* Shopify card */}
          <div className="flex flex-col items-center justify-center bg-transparent  mb-10 p-6 rounded-lg">
            <FaShopify className="text-green-500 mb-2" size={20} />
            <p className="text-lg text-gray-700 font-semibold">Shopify</p>
          </div>

          {/* CKEditor card */}
          <div className="flex flex-col items-center justify-center bg-transparent  mt-12 p-2 rounded-lg">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-BbreBgkO07U7fsLeBA08aohkEBK87ZeoQ&s" // Replace with your local CKEditor logo image path
              alt="CKEditor"
              width={50}
              height={50}
              className="mb-2"
            />
            <p className="text-lg text-gray-700 font-semibold">CKEditor</p>
          </div>

          {/* Sentry card */}
          <div className="flex flex-col items-center justify-center bg-transparent p-6 rounded-lg">
            <SiSentry className="text-purple-500 mb-2" size={30} />
            <p className="text-lg text-gray-700 font-semibold">Sentry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
