import React, { useEffect, useRef, useState } from "react";
import { ABOUT_US } from "../constant";
import InlineModals from "../modals/InlineModals";
import PageModals from "../modals/PageModals";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";

const IframeFood = () => {
  const pageRef = useRef(null);
  const size = useWindowSize();
  const [src, setSrc] = useState(`../foodGallery/FoodGallery.htm`);
  const [load, setLoad] = useState(false);
  const [, setHeight] = React.useState("0px");
  const onLoad = () => {
    setHeight(size.height + "px");
  };
  useEffect(() => {
    document.getElementById("food-iframe").onload = () => {
      {
        setLoad(true);
      }
    };
  }, []);
  return (
    <div className="w-full h-full">
      {!load ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      ) : null}
      <iframe
        id="food-iframe"
        src={src}
        scrolling="yes"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; fullscreen"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        width="100%"
        ref={pageRef}
        height={size.height + 100}
        onLoad={onLoad}
        loading="lazy"
      />
      {/* <InlineModals /> */}
      {load && <PageModals title={`ABOUT US`} content={ABOUT_US} />}
    </div>
  );
};

export default IframeFood;
