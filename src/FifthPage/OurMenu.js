import SandwichWithFriesPic from "../img/Sandwichwitfires.jpg"
import HoogiesOldSchoolPic from "../img/HoogiesOldSchool.jpg"
import SpicyChickenPic from "../img/ChickenBurgerWithFries.jpg"
import PizzaColaPic from "../img/PizzaCola.avif"
import RedValvetPic from "../img/RedValvet.jpg"
import Cupcake from "../img/Cupcake.jpg"

function OurMenu() {

  return (
    <div className="OurMenu">
      <nav>
  <h1>Our Menu</h1>
  <ul>
    <li><a href="/">Best sellers</a></li>
    <li><a href="/">Hoogies</a></li>
    <li><a href="/">Pizza</a></li>
    <li><a href="/">Burger</a></li>
    <li><a href="/">French fries</a></li>
    <li><a href="/">Ice Cream</a></li>
    <li><a href="/">Drinks</a></li>
  </ul>
</nav>
<div className="OurMenuPic">
  <img src={SandwichWithFriesPic} alt="" />
  <img src={HoogiesOldSchoolPic} alt="" />
  <img src={SpicyChickenPic} alt="" />
</div>
<div className="OurMenuDescription">
<span>Hogies Chilly Cheese Sauce With French Fries
<p>Ground Beef, Onion, Chilly, Butter, Cheese</p>
<a href="/">6.95$</a>
</span>
<span>Hogies Old School
<p>Tomatoes, onion, and deli dressing on bottom half of bread. Top with ham, salami and top half of bread.</p>
<a href="/">9.09$</a>
</span>
<span>Spicy Chicken Burger With Fries
<p>Ground Chicken, Red Hot Sauce, Garlic , Onion, Pepper Jack Cheese</p>
<a href="/">12.95$</a>
</span>
</div>
<div className="OurMenuPic">
  <img src={PizzaColaPic} alt="" />
  <img src={RedValvetPic} alt="" />
  <img src={Cupcake} alt="" />
</div>
<div className="OurMenuDescription">
<span>Pizza Black Meat Monsta + Coca-Cola 
<p>Meat Monsta.Pizza is made of smoked beef, sausage meat, minced beef, mushrooms. Pizza is also wrapped with mozzarella.</p>
<a href="/">14.95$</a>
</span>
<span>Red Valvet
<p>Ice Cube, Red Valvet, Fruits and Sugar</p>
<a href="/">2.95$</a>
</span>
<span>Ice Cream Cupecakes
<p>Cup cakes, Guarana ice cream / Vanila ice cream</p>
<a href="/">1.95$</a>
</span>
</div>



    </div>
  )

}

export default OurMenu