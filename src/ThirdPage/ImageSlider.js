import SimpleImageSlider from "react-simple-image-slider";



const images = [
  { url: "../img/burger.jpg" },
  { url: "../img/fries.jpg" },
];

const ImageSlider = () => {
 console.log(images)
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default ImageSlider