import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <section className="py-10 bg-primary text-gray-800 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
          <div className="mx-auto">
            <p className="text-gray-800">
              <strong>Email:</strong> ghoshsujon420@gmail.com
            </p>
            <p className="text-gray-800">
              <strong>Phone:</strong> +91 7384505581
            </p>
            <p className="text-gray-800">
              <strong>Address:</strong> Kolkata, West Bengal, India
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://www.apdux.com/images/team/ApDux-Team-Sujan-Ghosh.jpg"
              alt="Contact"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                placeholder="First Name"
                required
                className="mt-1 block w-full px-3 py-2 bg-primary rounded-md shadow-sh-2 focus:outline-none  sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                placeholder="Last Name"
                required
                className="mt-1 block w-full px-3 py-2 bg-primary rounded-md shadow-sh-2 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                placeholder="Email Address"
                required
                className="mt-1 block w-full px-3 py-2 bg-primary rounded-md shadow-sh-2 focus:outline-none  sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                id="phoneNumber"
                placeholder="Phone Number"
                className="mt-1 block w-full px-3 bg-primary py-2 rounded-md shadow-sh-2 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              placeholder="Message"
              required
              rows="4"
              className="mt-1 block w-full px-3 py-2 bg-primary rounded-md shadow-sh-2 focus:outline-none sm:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 text-gray-800 font-medium rounded-md shadow-sh-1 hover:shadow-sh-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
