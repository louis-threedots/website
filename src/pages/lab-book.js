import React from "react"
import SEO from "../components/seo"
import ImageGallery from 'react-image-gallery';
// import "~react-image-gallery/styles/scss/image-gallery.scss";
// import "~react-image-gallery/styles/css/image-gallery.css"
 
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const LabBook = () => (
  <>
    <SEO title="Lab Book" />
    <ImageGallery items={images} />
  </>
)

export default LabBook
