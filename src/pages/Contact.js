import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-black p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg -ml-16 mt-20">
          <iframe
            title="Google Map"
            width="100%"
            height="560"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11400.689983242294!2d79.0965227!3d21.146633799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a198440cc05d4dd%3A0x6375220d1f92d67b!2sGanesh%20Peth%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629442010706!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="ml-56 mt-20">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2 transition-transform hover:scale-105">
        <span className="text-yellow-500"> SEND US </span>
        <span className="text-stone-900"> A MESSAGE</span>
      </h3>
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-stone-900 transition-colors duration-300 hover:border-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-stone-900 transition-colors duration-300 hover:border-yellow-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-stone-900 transition-colors duration-300 hover:border-yellow-500"
              rows="4"
            ></textarea>
          </div>
          <button className="px-6 py-2 bg-yellow-500 border border-stone-900 text-stone-900 font-semibold rounded hover:bg-yellow-600 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
      <div className="-mt-[8%] ml-[63%]">
        <h2 className="text-2xl font-bold mb-2">
        <span className="text-stone-900">CONTACT</span>
        <span className="text-yellow-500"> INFO</span>
      </h2>
        <p className="text-l font-bold flex items-center mb-1 mt-5">
          <i className="mr-2 ">📍</i>
          Ratan Apartment No. 03, Block No. 07, Bus Stand Road, Ganesh Peth,
        </p>
        <p className="text-l font-bold flex items-center mb-1 ml-5">
          Nagpur - 440018 (Behind Agyaram Devi Mandir)
        </p>
        <p className="flex items-center mb-1">
          <i className="mr-2">📞</i>
          <b>Ph. No.</b> +917122720367/663777
        </p>
        <p className="flex items-center mb-1">
          <i className="mr-2">📠</i>
          <b>Fax No.</b> +91 712 6637773
        </p>
        <p className="flex items-center mb-1">
          <i className="mr-2">✉️</i>
          <b>Email:</b> smoverseas@hotmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
