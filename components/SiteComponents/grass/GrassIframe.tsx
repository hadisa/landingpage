import React, { useEffect, useRef, useState } from "react";
import { ABOUT_US } from "../constant";
import PageModals from "../modals/PageModals";
import Spinner from "../spinner/Spinner";
import { useWindowSize } from "../utils/utility";

const GrassIframe = () => {
  const pageRef = useRef();
  const size = useWindowSize();
  const [src, setSrc] = useState(`../glade/Glade.htm`);

  const [, setHeight] = React.useState("0px");
  const onLoad = () => {
    setHeight(size.height + "px");
  };
  if (typeof window == "undefined") {
    return null;
  }
  const [load, setLoad] = useState(false);
  useEffect(() => {
    document.getElementById("grass-iframe").onload = () => {
      {
        setLoad(true);
      }
    };
  }, []);
  return (
    <div className="w-full h-full">
      {!load ? <Spinner /> : null}
      <iframe
        ref={pageRef}
        id="grass-iframe"
        src={src}
        scrolling="yes"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; fullscreen"
        width="100%"
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        height={size.height + 100}
        onLoad={onLoad}
        loading="lazy"
      />
      {/* <InlineModals /> */}
      {load && <PageModals title={`SERVICE`} content={ABOUT_US} />}
    </div>
  );
};

export default GrassIframe;
