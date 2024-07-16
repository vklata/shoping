import Layout from "../../components/layout/Layout";

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/cart";
import { toast } from "react-toastify";
const ProductInfo = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [cart,setCart]=useCart();

  
    //initalp details
    useEffect(() => {
      if (params?.slug) getProduct();
    }, [params?.slug]);
    //getProduct
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://back-o58i.vercel.app/api/get-product/${params.slug}`
        );
        setProduct(data?.product);
      } catch (error) {
        console.log(error);
      }
    };
    //get similar product
    // const getSimilarProduct = async (pid, cid) => {
    //   try {
    //     const { data } = await axios.get(
    //       `http://localhost:3000/api/related-product/${pid}/${cid}`
    //     );
    //     setRelatedProducts(data?.products);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-white-800">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="">
                                <div className="">
                                    <img
                                        className=" w-full lg:h-[39em] rounded-lg"
                                        src={`http://localhost:3000/api/product-photo/${product._id}`}
                                        // alt={product.name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <h2 className="max-w-xl mb-6 text-xl font-bold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-black-300">
                                        {/* Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60 GHz) */}{product.name}
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                        <ul className="flex mb-4 mr-2 lg:mb-0">
                                            <li>
                                                <a href="">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="inline-block text-2xl font-bold text-gray-700 dark:text-green-400 ">
                                        <span>{product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-red-400">
                                        Description :{product.description}
                                    </h2>
                                    <p className="mb-2 text-lg text-gray-700 dark:text-gray-400">{product.description}</p>
                                </div>

                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">
                                   
                                    <button
                                        className="w-full px-4 py-3 text-center text-gray-600 bg-yellow-100 border border-blue-600  hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                                        onClick={()=>{setCart([...cart,product])
                                            toast.success("Add Product Sucessfully")
                                        }}    >
                                        Add to cart
                                    </button>
                                </div>
            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}

export default ProductInfo;
