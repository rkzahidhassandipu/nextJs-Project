import React from "react";
import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";

const PopularProducts = async () => {
  const productsCollection = dbConnect(collectionNamesOb.productsCollection);
  const products = await productsCollection.find({}).toArray();

  return (
    <div className="w-11/12 mx-auto mb-20">
      <div className="text-center mb-8">
        <h4 className="text-orange-600 font-semibold text-lg mb-6">
          Popular Products
        </h4>
        <h2 className="text-3xl font-bold mb-6">Browse Our</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
      </div>

      {/* 5 column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 text-center">
        {products.map((product) => (
          <Card key={product._id}>
            <CardHeader>
              <Image
                src={product.img}
                alt={product.title}
                width={300}
                height={160}
                className="w-full h-40 object-contain"
              />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-yellow-600">⭐ {product.rating}</p>
              <h2 className="font-bold text-xl">{product.title}</h2>
              <p className="font-semibold text-base text-orange-600">
                ${product.price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      

      {/* See More Button */}
      <div className="text-center mt-8">
        <Link
          href="/products"
          className="inline-block  border border-orange-600 text-orange-600 hover:text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition-colors"
        >
           More Products
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;
