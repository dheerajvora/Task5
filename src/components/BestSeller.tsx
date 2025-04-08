import React from 'react';
import { products, Product } from '../data/products';

const BestSeller: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-25">
            <div className="text-center mb-12">
                <h3 className="title-subtitle font-medium mb-2 ">Featured Products</h3>
                <h2 className="title text-dark-blue mb-4">BESTSELLER PRODUCTS</h2>
                <p className="title-para max-w-2xl mx-auto">
                    Problems trying to resolve the conflict between
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="group">
                        <div className="relative overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-[360px] object-cover"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h4 className="font-bold">{product.title}</h4>
                            <p className="text-gray-600">{product.department}</p>
                            <div className="mt-2">
                                <span className="text-gray-500 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
                                <span className="text-blue-500 font-semibold">${product.discountedPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-center gap-2 mt-2">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="w-4 h-4 rounded-full cursor-pointer"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
