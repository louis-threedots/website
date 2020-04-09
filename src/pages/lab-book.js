import React from "react"
import SEO from "../components/seo"
import GallerySwiper from "react-native-gallery-swiper";

const LabBook = () => (
  <>
    <SEO title="Lab Book" />
    <GallerySwiper
      images={[
        { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
        { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg" },
        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
      ]}
      // Version *1.15.0 update
      // onEndReached={() => {
      //     // add more images when scroll reaches end
      // }}
    />
  </>
)

export default LabBook
