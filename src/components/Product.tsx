import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        {product.items.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div className={`flex flex-wrap`} key={index}>
                <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
                  <h3
                    className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                  >
                    {item?.title}
                  </h3>
                  <p className={`text-gray-600`}>{item?.description}</p>
                </div>
                <div className={`w-full sm:w-1/2 p-6`}>
                  <img className="h-6/6" src={item?.img} alt={item?.title} />
                </div>
              </div>
            );
          }
          return (
            <div
              className={`flex flex-wrap flex-col-reverse sm:flex-row`}
              key={index}
            >
              <div className={`w-full sm:w-1/2 p-6`}>
                <img className="h-6/6" src={item?.img} alt={item?.title} />
              </div>
              <div className={`w-full sm:w-1/2 p-6 mt-20`}>
                <div className={`align-middle`}>
                  <h3
                    className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                  >
                    {item?.title}
                  </h3>
                  <p className={`text-gray-600 mb-8`}>{item?.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
