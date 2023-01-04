import VideoCompetitionImg from "../img/VideoCompetition.jpg"
import Budaya from "../img/Budaya.jpg"
import FoodOutleImg from "../img/FoodOutlet.jpg"

function SmartMealsNews() {
  return (
    <div className="SmartMealsNews">
      <div className="NewsHeader">
        <h1>Smart Meals News</h1>
        <p>We share about news in smart meals to give more information to user</p>
      </div>
      <div className="NewsPhotos">
      <img src={VideoCompetitionImg} alt="" />
      <img src={FoodOutleImg} alt="" />
      <img src={Budaya} alt="" />
</div>
<div className="NewsDescription">
<span>Smart Meals Video Competitions
<p>Smart Meals hold a video competition witch aim to intertain friends who are unable to go here because it's to far.</p>
<a href="/">Read more</a>
</span>
<span>Present The 4th Outlet
<p>A form all love and graditute from Smart Meals for Indonesia are joy to us.</p>
<a href="/">Read more</a>
</span>
<span>Reach out Budaya Beberes
<p>Toghter with the students, Smart Meals amouses everyday with its hygiene.</p>
<a href="/">Read more</a>
</span>
</div>
    </div>
  )
}

export default SmartMealsNews