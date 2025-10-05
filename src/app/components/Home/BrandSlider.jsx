"use client";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Luminus_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/7/73/Brembo_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8f/Motorola_logo_2019.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b7/Tesla_T_symbol.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Nike_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Facebook_f_logo_%282021%29.svg",
];

const MarqueeSlider = () => {
  // Repeat logos to make a continuous scroll
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="py-8 bg-[#0a0311] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="mx-10 flex-shrink-0">
            <img
              src={logo}
              alt={`brand-${index}`}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeSlider;
