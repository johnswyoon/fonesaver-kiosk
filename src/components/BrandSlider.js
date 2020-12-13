import React from "react";

function BrandSlider() {
  return (
    <div class="pad">
      <br />
      <h2 class="text-center">
        <strong>Partners with Global Brands</strong>
      </h2>
      <p class="text-center">
        We provide solutions to some of the largest brands from every industry
      </p>
      <div id="slider">
        <figure>
          <img
            src="https://cdn.shopify.com/s/files/1/0488/1022/9921/files/brands-1.png?v=1603319434"
            alt="bmw wells-fargo wimbledon w-hotels"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0488/1022/9921/files/brands-2.png?v=1603319435"
            alt="rbc pwc chevrolet detroit-redwings"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0488/1022/9921/files/brands-3-v2.png?v=1604598901"
            alt="espn mercedes-benz bell pga"
          />
        </figure>
      </div>
    </div>
  );
}

export default BrandSlider;
