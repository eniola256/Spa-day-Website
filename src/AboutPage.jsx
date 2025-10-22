import NavBar from "./NavBar.jsx";
import "./AboutPage.css"
function AboutPage(){
return(
    <>
      <div className="about">
        <div className="main">
            <NavBar />
            <div className="abt-main">
            <h2 className="abt-main-head">About Us</h2>
            </div>
        </div>
        <div className="abt-text">
            <div className="about-main-txt">
                <div className="wwa">
                    <h3>Who we are</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius ut illo dicta? Tenetur autem at ab labore necessitatibus quis molestiae cupiditate possimus quam mollitia, aut esse et cum delectus quidem quod fugit praesentium porro. Accusantium odit repellendus pariatur tempore fuga, iure nihil asperiores perferendis molestias neque temporibus culpa maiores tenetur obcaecati. Cupiditate amet repudiandae voluptatibus deserunt, quidem dolores nostrum.</p>
                </div>
                <div className="ou">
                    <h3>Our Vision</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius ut illo dicta? Tenetur autem at ab labore necessitatibus quis molestiae cupiditate possimus quam mollitia, aut esse et cum delectus quidem quod fugit praesentium porro. Accusantium odit repellendus pariatur tempore fuga, iure nihil asperiores perferendis molestias neque temporibus culpa maiores tenetur obcaecati. Cupiditate amet repudiandae voluptatibus deserunt, quidem dolores nostrum.</p>
                </div>
                <div className="om">
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius ut illo dicta? Tenetur autem at ab labore necessitatibus quis molestiae cupiditate possimus quam mollitia, aut esse et cum delectus quidem quod fugit praesentium porro. Accusantium odit repellendus pariatur tempore fuga, iure nihil asperiores perferendis molestias neque temporibus culpa maiores tenetur obcaecati. Cupiditate amet repudiandae voluptatibus deserunt, quidem dolores nostrum.</p>
                </div>
            </div>
        </div>
      </div>
    </>
)
}

export default AboutPage