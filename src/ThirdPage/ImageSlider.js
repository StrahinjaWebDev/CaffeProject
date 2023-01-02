import Slider from 'react-slick';

const ImageSlider = (props) => {
  const { images } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={image.alt} />
          <p>{image.text}</p>
        </div>
      ))}
    </Slider>
  );
};

const images = [
  { id: 1, src: '/path/to/image1.jpg', alt: 'Image 1', text: 'Image 1 text' },
  { id: 2, src: '/path/to/image2.jpg', alt: 'Image 2', text: 'Image 2 text' },
  { id: 3, src: '/path/to/image3.jpg', alt: 'Image 3', text: 'Image 3 text' },
];

<ImageSlider images={images} />

export default ImageSlider;