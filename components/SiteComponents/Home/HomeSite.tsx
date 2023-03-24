import { useEffect, useRef, useState } from "react";
import CarouselHorizontal from "../carousel/CarouselHorizontal";
import CloudDataComponent from "../cloud/CloudDataComponent";
import { SLIDER_IMAGES } from "../constant";
import GlobalEdgeNetwork from "../globe/GlobalEdgeNetwork";
import Layout from "../layout/Layout";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { useScroll } from "../utils/utility";

const HomeSite = () => {
  const globeRef = useRef(undefined);
  const cloudRef = useRef(undefined);
  useScroll(cloudRef, globeRef);
  const [isGlobePart, setIsGlobePart] = useState(false);

  return (
    <div style={{ zIndex: 1000, position: "relative", width: "100%" }}>
      <Layout>
        <div className="header33_background-video-wrapper">
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            className="header33_background-video"
          >
            <source src="/images/clouds.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CarouselHorizontal images={SLIDER_IMAGES} scrollFun={null} />

          <div
            ref={cloudRef}
            style={{
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              marginBottom: "300px",
            }}
          >
            <CloudDataComponent />
          </div>

          <div
            ref={globeRef}
            style={{
              height: "100%",
              width: "100%",
              padding: 0,
              margin: 0,
              zIndex: 1000,
            }}
          >
            <GlobalEdgeNetwork />
          </div>
        </div>
        <ScrollToTop />
      </Layout>
    </div>
  );
};

export default HomeSite;
