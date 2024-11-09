import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null); // Ref to detect clicks outside the mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    // Add event listener for clicks outside the menu
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-primary shadow-sh-1 fixed w-full top-0 z-50">
      <div className="container px-4 py-4 flex items-center justify-between max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="w-10 aspect-square rounded-full overflow-hidden">
          <img
            src={"https://www.apdux.com/images/team/ApDux-Team-Sujan-Ghosh.jpg"}
            alt="Logo"
            width={50}
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-gray-950">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-950">
            About
          </a>
          <a href="#education" className="text-gray-700 hover:text-gray-950">
            Education
          </a>
          <a href="#services" className="text-gray-700 hover:text-gray-950">
            Project
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-950">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        ref={mobileMenuRef} // Attach ref to mobile menu
        className={`fixed inset-y-0 right-0 w-64 bg-primary shadow-sh-2 p-6 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleMobileMenu}
          className="text-xl mb-6 focus:outline-none"
        >
          ✕
        </button>
        <ul className="space-y-4">
          <li>
            <a href="#home" className="text-gray-700 hover:text-gray-950">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-gray-950">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-gray-950">
              Education
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-gray-950">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-gray-950">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// import React, { useState } from "react";

// const Header = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-gray-400 shadow-lg fixed w-full top-0 z-50">
//       <div className="container px-4 py-4 flex items-center justify-between max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
//         <div className="w-10 aspect-square rounded-full overflow-hidden">
//           <img
//             src={"https://www.apdux.com/images/team/ApDux-Team-Sujan-Ghosh.jpg"}
//             alt="Logo"
//             width={50}
//           />
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex space-x-8">
//           <a href="#home" className="text-gray-700 hover:text-gray-950">
//             Home
//           </a>
//           <a href="#about" className="text-gray-700 hover:text-gray-950">
//             About
//           </a>
//           <a href="#services" className="text-gray-700 hover:text-gray-950">
//             Education
//           </a>
//           <a href="#services" className="text-gray-700 hover:text-gray-950">
//             project
//           </a>
//           <a href="#contact" className="text-gray-700 hover:text-gray-950">
//             Contact
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="lg:hidden text-2xl focus:outline-none"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <nav
//         className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         } lg:hidden`}
//       >
//         <button
//           onClick={toggleMobileMenu}
//           className="text-xl mb-6 focus:outline-none"
//         >
//           ✕
//         </button>
//         <ul className="space-y-4">
//           <li>
//             <a href="#home" className="text-gray-700 hover:text-gray-950">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="text-gray-700 hover:text-gray-950">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#services" className="text-gray-700 hover:text-gray-950">
//               Education
//             </a>
//           </li>
//           <li>
//             <a href="#services" className="text-gray-700 hover:text-gray-950">
//               project
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="text-gray-700 hover:text-gray-950">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
