import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const SearchBar = ({ closeSearch }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchResult([]);
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          const groceriesOnly = (data.products || []).filter(
            (item) => item.category === "groceries"
          );
          setSearchResult(groceriesOnly);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <div className="fixed z-20 backdrop-blur-lg w-full h-full top-0 overflow-y-auto">
      {/* Close Button */}
      <div
        onClick={closeSearch}
        className="absolute right-[20px] top-[10px] w-[40px] h-[40px] border border-green-300 flex items-center justify-center text-green-400 font-bold text-2xl cursor-pointer"
      >
        <IoCloseSharp />
      </div>

      {/* Input */}
      <div className="search-header flex justify-center p-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product"
          className="border-0 outline-0 border-b-2 w-xl border-b-green-300 pb-3 bg-transparent text-black"
        />
      </div>

      {/* Results */}
      <div className="search-body p-5">
        <div className="container mx-auto">
          <h1 className="text-3xl text-gray-500 capitalize font-bold">
            Search Results {searchResult.length > 0 && `(${searchResult.length})`}
          </h1>

          {loading && <p className="text-white mt-5">Loading...</p>}

          {!loading && search && searchResult.length === 0 && (
            <p className="text-white mt-5">No products found</p>
          )}

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5">
            {searchResult.map((product) => (
              <div key={product.id} className="bg-white shadow-lg p-5 rounded">
                <h4 className="text-xl font-semibold mb-2 truncate">{product.title}</h4>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <b className="text-lg text-green-600">${product.price}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
