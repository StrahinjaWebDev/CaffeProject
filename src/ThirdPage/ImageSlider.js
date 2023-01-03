import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "../img/burger.jpg" },
  { url: "../img/fries.jpg" },
];

const ImageSlider = () => {

  return (
    <div>
      <SimpleImageSlider
        width={950}
        height={510}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default ImageSlider