/* eslint-disable @next/next/no-img-element */
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useState } from "react";
import GlobeCardList from "./GlobeCardList";
import GlobeComponent from "./GlobeComponent";

const GlobalEdgeNetwork = () => {
  const {
    fontSizeDataTitle,
    fontDataTitle,
    colorDataTitle,
    // backgroundColorDataTitle,
    //  border
    borderBottomColorDataTitle,
    borderBottomWidthDataTitle,
    borderTopColorDataTitle,
    borderTopWidthDataTitle,
    borderLeftColorDataTitle,
    borderLeftWidthDataTitle,
    borderRightColorDataTitle,
    borderRightWidthDataTitle,
    // border style
    borderRightStyleDataTitle,
    borderLeftStyleDataTitle,
    borderTopStyleDataTitle,
    borderBottomStyleDataTitle,
    // border radius
    borderTopRightRadiusDataTitle,
    borderTopLeftRadiusDataTitle,
    borderBottomRightRadiusDataTitle,
    borderBottomLeftRadiusDataTitle,
    // padding
    paddingTopDataTitle,
    paddingBottomDataTitle,
    paddingLeftDataTitle,
    paddingRightDataTitle,
    // margin
    marginTopDataTitle,
    marginBottomDataTitle,
    marginLeftDataTitle,
    marginRightDataTitle,

    // -------------------------

    borderBottomColorData,
    borderBottomWidthData,
    borderTopColorData,
    borderTopWidthData,
    borderLeftColorData,
    borderLeftWidthData,
    borderRightColorData,
    borderRightWidthData,
    // border style
    borderRightStyleData,
    borderLeftStyleData,
    borderTopStyleData,
    borderBottomStyleData,
    // border radius
    borderTopRightRadiusData,
    borderTopLeftRadiusData,
    borderBottomRightRadiusData,
    borderBottomLeftRadiusData,
    // padding
    paddingTopData,
    paddingBottomData,
    paddingLeftData,
    paddingRightData,
    // margin
    marginTopData,
    marginBottomData,
    marginLeftData,
    marginRightData,
    fontSizeData,
    colorData,
    fontData,
  }: any = useModalsAppProvider();
  const [contentStyle, setContentStyle] = useState({ display: "none" });
  const [titleStyle, setTitleStyle] = useState({ display: "none" });
  const { isReadOnly }: any = useAppProvider();

  return (
    <div style={{ backgroundColor: "#000" }}>
      <div
        className="globe"
        style={{
          marginTop: "100px",
          zIndex: 10,
          width: "100%",
          margin: 0,
          height: "100%",
          paddingTop: "20px",
          backgroundColor: "#000",
        }}
      >
        <div
          className={`flex flex-row relative lg:flex-row lg:justify-between`}
          id={`sectionId`}
        >
          <div
            style={{
              position: "sticky",
              bottom: "auto",
              top: "0",
              left: "0",
              height: "fit-content",
              width: "40%",
              alignSelf: "auto",
              alignItems: "stretch",
              zIndex: 1000,
            }}
          >
            <GlobeComponent />
          </div>
          <div className="flex flex-col w-[50%] z-20">
            <GlobeCardList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalEdgeNetwork;
