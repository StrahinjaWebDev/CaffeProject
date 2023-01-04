import PromoPic from "../img/CaffePromo.jpg"

function SeePromo() {

  return (
    <div className="Promo">
      <div className="PromoPic">
        <img src={PromoPic} alt=""/>
      </div>
      <div className="PromoTextFirst">
        <p>We strive to always bring convenience to you.
          Our continiusly-growii outlets are located at all over Indonesia, where you can indulge yourself of with loved ones within a luxorius envoriment and warm.
        </p>
        <button>See outlet</button>
      </div>
      <div className="PromoTextSecond">
        <p> After we give you so so so much more recomendations. You can choose whatevere you want based on your needs. Don't forget to apply code for discount 50%. Just for today!
        </p>
        <button>See promo</button>
      </div>
    </div>
  )
}

export default SeePromo