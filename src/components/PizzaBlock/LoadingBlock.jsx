import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
      <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="138" cy="132" r="131" />
        <rect x="186" y="375" rx="0" ry="0" width="0" height="1" />
        <rect x="0" y="277" rx="0" ry="0" width="280" height="26" />
        <rect x="0" y="317" rx="5" ry="5" width="280" height="84" />
        <rect x="0" y="422" rx="0" ry="0" width="88" height="27" />
        <rect x="123" y="414" rx="25" ry="25" width="151" height="44" />
      </ContentLoader>
  )
}

export default LoadingBlock;

