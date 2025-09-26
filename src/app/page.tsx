import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">Hello World</h1>
      <Link href={"/products"}>Products</Link>
    </div>
  );
};

export default HomePage;
