"use client";

import { useEffect, useState } from "react";
import { 
  SiAdobe, SiReact, SiAdobephotoshop, SiGoogleads, SiWriteas, SiGoogle, 
  SiBlender, SiShopify, SiQuickbooks, SiGift, SiWordpress, SiGodaddy, 
  SiCloudflare, SiTshirt, SiReadthedocs 
} from "react-icons/si";

// Map your JSON titles to React Icons
const iconMap = {
  "graphic design": SiAdobe,
  "web & software development": SiReact,
  "multimedia and video editing": SiAdobephotoshop,
  "Digital Marketing": SiGoogleads,
  "Creative Writting Solution": SiWriteas,
  "Seo": SiGoogle,
  "3D Animation & Visualisation": SiBlender,
  "E-Commerce Solution": SiShopify,
  "Accounting": SiQuickbooks,
  "Special Combo": SiGift,
  "Premium Website": SiWordpress,
  "Premium Domains": SiGodaddy,
  "Proxy": SiCloudflare,
  "Merchandise": SiTshirt,
  "Academy": SiReadthedocs
};

const Service = () => {
  const [services, setServices] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Prevent server/client mismatch
  if (!mounted) return null;

  return (
    <div className="py-16 bg-[#0a0311]">
      <div className="text-center mb-12">
        <h1 className="text-white text-4xl font-bold mb-2">Our Services</h1>
        <p className="text-white max-w-xl mx-auto">
          Enter your personal real estate sanctuary, where finding the ideal
          <br />
          home is effortless and comfortable with our assistance.
        </p>
      </div>

      <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-0 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.title] || SiReact; // default icon
          return (
            <div
              key={index}
              className="bg-[#130c1a] hover:bg-gradient-to-tr to-purple-500/50 from-black rounded-xl p-6 flex flex-col items-start   hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <IconComponent size={48} color="white" />
              </div>
              <h2 className="text-white text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
