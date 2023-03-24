/* eslint-disable @next/next/no-img-element */
import GlobeCardList from "./GlobeCardList";
import GlobeComponent from "./GlobeComponent";

const GlobalEdgeNetwork = () => {
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
