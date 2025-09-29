import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Carts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState();
  const navigate = useNavigate();


  const moreInfo = () => {
    console.log("more========");
    
    <Link to={navigate("/moreinfo")}></Link>
     

  };
  async function getproducts() {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });
      if (response.status == "200") {
        const data = await response.json();
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function fetchdata() {
      await getproducts();
    }
    fetchdata();
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen grid place-content-center bg-white">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

          {/* Loading Text */}
          <h1 className="text-lg font-semibold text-gray-700">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-auto grid grid-cols-4 gap-2 m-auto p-4 bg-gradient-to-l from-slate-800 to-violet-900">
      {products.map((item, index) => {
        return (
          <div className="w-[260px] h-[355px] shadow-2xl border-2 rounded-md bg-white grid place-content-center">
            <img src={item.thumbnail} alt=".." className="h-[155px]" />
            <p>{item.title}</p>
            <p>{item.category}</p>
            <p> &#8377;{item.price}</p>
            <p>Stock-{item.stock}</p>

            <div className="flex text-yellow-500 text-3xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                  {item.rating >= star ? "★" : rating >= star - 0.5 ? "⯨" : "☆"}
                </span>
              ))}
            </div>
            <div className="flex gap-19">
              <button className="border-1 pl-4 pr-4 bg-amber-400 text-white rounded hover:bg-amber-500">
                Add
              </button>

              <button onClick={moreInfo} className="border-1 pl-4 pr-4 bg-amber-400 text-white rounded hover:bg-amber-500">
                More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Carts;
