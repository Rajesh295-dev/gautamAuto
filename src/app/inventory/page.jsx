"use client";
import styles from "./inventory.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/inventory");
        const data = await response.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const displayProducts = () => {
    return (
      <div className={styles.products}>
        {filteredData.map((product) => (
          <Link
            className={styles.product}
            key={product._id}
            href={`/inventory/${product._id}`}
          >
            <Image
              className={styles.img}
              src={product.img}
              alt=""
              width={250}
              height={300}
              key={product.id}
            />
            <span className={styles.name}>{product.brand}</span>
            <span className={styles.productPrice}>${product.price}</span>
          </Link>
        ))}
      </div>
    );
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
      setFilteredData(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      setFilteredData(data);
    }
  };

  const handleCategoryClick = (selectedCat) => {
    if (selectedCat === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.cat === selectedCat));
    }
  };

  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = ["All", ...new Set(allCats)];

    return categories.map((cat) => (
      <span
        key={cat}
        className={styles.cat}
        onClick={() => handleCategoryClick(cat)}
      >
        {cat}
      </span>
    ));
  };

  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    const [selectedPrice, setSelectedPrice] = useState(maxPrice);

    const handlePriceChange = (e) => {
      const rangeValue = parseInt(e.target.value, 10);
      setSelectedPrice(rangeValue);
      setFilteredData(data.filter((item) => item.price <= rangeValue));
    };

    return (
      <>
        <input
          type="range"
          className="priceRange"
          min={minPrice}
          max={maxPrice}
          value={selectedPrice}
          onChange={handlePriceChange}
        />
        <span className={styles.priceValue}>${selectedPrice}</span>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftMenu}>
        <input
          type="text"
          className={styles.search}
          placeholder="Search your next car..."
          onChange={handleSearch}
        />

        <h1>Categories</h1>
        <div className={styles.cats}>{setCategories()}</div>
        <h1>Maximum Price</h1>
        <div className={styles.price}>
          <span className={styles.priceRange}>{setPrices()}</span>
        </div>
      </div>

      <div className={styles.inventory}>{displayProducts()}</div>
    </div>
  );
};

export default Products;
