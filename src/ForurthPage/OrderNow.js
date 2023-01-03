import Sandwich from "../img/sandwich.png"

function OrderNow() {
  return (
    <div className="OrderNow">
      <div className="OrderNowBlue">
      <img src={Sandwich} alt=""/>
    <nav className="Beef"><h1>Beef Submarine Sandwich</h1>
    <p>With the spicy and savory taste of meat,plus for those who like vegetables, it adds to the warmth of this Christmas.</p>
    <button>Order now</button></nav>
      </div>

    </div>

  )

}

export default OrderNow