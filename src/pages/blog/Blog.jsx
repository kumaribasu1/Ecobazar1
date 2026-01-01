import React from "react";
import {
  FiSearch,
  FiMessageSquare,
  FiUser,
  FiTag,
  FiCalendar,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import Newsletter from "../../utills/Newsletter";

const Blog = () => {
  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* --- Top Banner*/}
      <div className="w-full flex justify-center">
        <img
          className="w-full h-auto object-cover max-h-[400px]"
          src="/images/bannar.jpg"
          alt="Banner"
        />
      </div>

      {/* Main Content*/}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 mt-10">
          {/* --- কলাম ১*/}
          <div className="lg:col-span-8">
            <img
              src="/images/blg 1.jpg"
              alt="Main Blog"
              className="w-full h-auto rounded-lg mb-6 shadow-sm"
            />

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <FiTag className="text-green-600" /> Food
              </span>
              <span className="flex items-center gap-1">
                <FiUser className="text-green-600" /> By Admin
              </span>
              <span className="flex items-center gap-1">
                <FiMessageSquare className="text-green-600" /> 65 Comments
              </span>
            </div>

            <h1 className="text-2xl md:text-[30px] font-semibold text-gray-900 mb-6 leading-tight">
              Maecenas tempor urna sed quam mollis, a placerat dui fringill
              Suspendisse.
            </h1>

            {/* Author and Social Icons Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-300 pb-6 mb-6 gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/blg 2.jpg"
                  alt="Author"
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    Cameron Williamson
                  </p>
                  <p className="text-xs text-gray-500">
                    4 April, 2021 • 6 min read
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white rounded-full transition-all">
                  <FaFacebookF size={16} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full shadow-md transition-all">
                  <FaTwitter size={18} />
                </button>
                <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white rounded-full transition-all">
                  <FaPinterestP size={16} />
                </button>
                <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white rounded-full transition-all">
                  <FaInstagram size={16} />
                </button>
                <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white rounded-full transition-all">
                  <FaLink size={16} />
                </button>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-10 text-[15px] md:text-base">
              Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
              dolor at scelerisque imperdiet. Phasellus tristique felis dolor.
              Maecenas elementum in risus sed condimentum. Duis convallis ante
              ac tempus maximus.
            </p>

            {/* ২ ছবি পাশাপাশি */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <img
                src="/images/blog org.jpg"
                alt="Oranges"
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-sm"
              />
              <img
                src="/images/blog mango.jpg"
                alt="Mango"
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-sm"
              />
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-[15px] md:text-base">
              Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate
              quis vehicula ut, vestibulum ut mauris. Nullam non felis varius
              dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem
              sed luctus.
            </p>

            {/* Sale Banner */}
            <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:h-[280px] flex items-center justify-center bg-black shadow-lg mb-12">
              <img
                src="/images/blog BG.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Fresh Fruit Banner"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1A1A1A]/90 border border-gray-800 flex flex-col items-center justify-center text-white backdrop-blur-sm shadow-xl">
                  <p className="text-[7px] md:text-[9px] uppercase text-gray-400">
                    Up to
                  </p>
                  <p className="text-sm md:text-xl font-bold text-[#FF8A00]">
                    56%
                  </p>
                  <p className="text-[7px] md:text-[9px] text-gray-400 uppercase">
                    Off
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-14 py-8">
                <div className="text-white text-center md:text-left">
                  <p className="uppercase tracking-[0.15em] text-[11px] md:text-sm font-semibold text-gray-300 mb-2">
                    Summer Sales
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                    Fresh Fruit
                  </h2>
                  <button className="bg-[#00B207] hover:bg-[#009206] text-white px-7 py-2.5 md:py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all mx-auto md:mx-0">
                    Shop Now <span className="text-lg">→</span>
                  </button>
                </div>
                <div className="hidden md:block w-20 h-20 invisible"></div>
              </div>
            </div>

            {/* Leave a Comment Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Leave a Comment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Zakir Hossen"
                    className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="zakirsoft.20@gl"
                    className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label className="text-sm text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your comment here..."
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <input
                  type="checkbox"
                  id="saveInfo"
                  className="w-4 h-4 accent-green-600"
                />
                <label htmlFor="saveInfo" className="text-sm text-gray-500">
                  Save my name and email in this browser for the next time I
                  comment.
                </label>
              </div>
              <button className="bg-[#00B207] text-white px-8 py-3 rounded-full font-bold hover:bg-[#009206] transition-all mb-12">
                Post Comments
              </button>

              {/* Comments List */}
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">
                Comments
              </h3>
              <div className="space-y-8">
                {[
                  {
                    name: "Annette Black",
                    date: "26 Apr, 2021",
                    comment:
                      "In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
                  },
                  {
                    name: "Devon Lane",
                    date: "24 Apr, 2021",
                    comment:
                      "Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros.",
                  },
                  {
                    name: "Jacob Jones",
                    date: "20 Apr, 2021",
                    comment:
                      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
                  },
                  {
                    name: "Jane Cooper",
                    date: "18 Apr, 2021",
                    comment:
                      "Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex.",
                  },
                  {
                    name: "Darrell Steward",
                    date: "7 Apr, 2021",
                    comment: "Nulla molestie interdum ultricies.",
                  },
                ].map((comm, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border-b border-gray-300 pb-6 last:border-0"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <img
                        src={`/images/author${index + 1}.jpg`}
                        alt={comm.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900">{comm.name}</h4>
                        <span className="text-gray-400 text-sm">
                          • {comm.date}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {comm.comment}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Load More Button */}
                <button className="mt-4 border-2 border-green-600 text-green-600 px-8 py-2.5 rounded-full font-bold hover:bg-green-600 hover:text-white transition-all">
                  Load More
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8 lg:self-start">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-900 border-gray-300">
                Top Categories
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Fresh Fruit", count: 134 },
                  { name: "Vegetables", count: 150 },
                  { name: "Cooking", count: 54 },
                  { name: "Snacks", count: 47 },
                  { name: "Beverages", count: 43 },
                  { name: "Beauty & Health", count: 38 },
                  { name: "Bread & Bakery", count: 15 },
                ].map((cat, i) => (
                  <li
                    key={i}
                    className="flex justify-between text-gray-600 hover:text-green-600 cursor-pointer transition-colors leading-tight"
                  >
                    <span>{cat.name}</span>
                    <span className="text-gray-400">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2 text-gray-900">
                Popular Tag
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Healthy",
                  "Low fat",
                  "Vegetarian",
                  "Bread",
                  "Kid foods",
                  "Vitamins",
                  "Snacks",
                  "Tiffin",
                  "Meat",
                  "Launch",
                  "Dinner",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className={`px-4 py-1.5 rounded-full text-sm cursor-pointer transition-all ${
                      tag === "Low fat"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2 text-gray-900">
                Our Gallery
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    className="aspect-square overflow-hidden rounded-lg"
                  >
                    <img
                      src={`/images/gallery${num}.jpg`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                      alt="Gallery"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2 text-gray-900">
                Recently Added
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 items-center group cursor-pointer"
                  >
                    <img
                      src={`/images/recent${item}.jpg`}
                      className="w-20 h-16 object-cover rounded-lg"
                      alt="Recent"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors leading-snug">
                        Curabitur porttitor orci eget nequ accumsan.
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <FiCalendar className="text-green-600" size={12} /> Apr
                        25, 2021
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Blog;