import './HomePage.scss'
const Homepage = () => {
    return(
        <section className='landingpage'>
            <header>
                <div class="container">
      <h1 class="feedMeH1">Feed Me!</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
            </header>
            <div className='landing-D1'>
                <div className='landing-leftDiv'>
                    <img className='landing-image'  src='https://media.giphy.com/media/yGuw6xE6VUnPQ1hD2S/giphy.gif' alt="opening fridge"/>
                </div>
                <div className='landing-rightDiv-d1'>
                    <h1 className='rd1-text'>What's in your Fridge?</h1>
                    <h4>A smarter way to eat</h4>
                    <br/><br/>
                    <button className='landing-d1-btn'>Learn More</button>
                </div>
            </div>
            <div className='landing-D2'>
                <div className='landing-leftDiv'>
                <h2>Eating at home is made easy <br/>
                search items in your Fridge
                and <br/>
                get recipe recommendations!</h2>
                <br/><br/>
                <button className='landing-d1-btn'>Start the Process</button>
                </div>
                <div className='landing-rightDiv'>
                <img className="landing-image2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIx7NHvcRRGjapwPIO2L1N2Xg5wcRWOMD0vymzRoibjbeH9GqNYexqDrYF4_6j0CJxR8&usqp=CAU' alt='Feast'/>
                </div>
            </div>
            <div className='landing-D3'>
                <div className='landing-leftDiv-d3'>
                    <img className= "landing-image3-1" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMuX1dB2NkoQ-HRFRtPVywmegV0KzaZGzNv1aEKgqw4JlMuACli1gFKeTqvamzUY7QVw&usqp=CAU' alt='cooking'/>
                </div>
                <div className='landing-rightDiv-d3'>
                    <h2 className='d3-text'>Save money by eating at home,
                     <br/>reduce food waste
                    <br/>and save the planet. </h2>
                </div>
            </div>
            <div className="motto">
                <h2 className='review'>"With the Feed Me app I always know what to make!"</h2>
                <div className="author">
                    <h4 className='noone'>-No one</h4>
                </div>
                </div>
            <div className='landing-D4'>
                <div className='landing-D4-sec'>
                    <div className ='d4-text'>
            <h2>Sign up is easy.
                Click the link below to get started </h2>
                <h4>Must be 18 years old or older to join</h4>
                <br/><br/>
                <button className='landing-d1-btn'>Register Now</button>
                </div>
                <div className='landing-D4-img'>
                    <img className= "landing-image4" src='https://study-buddy-bucket.s3.us-east-2.amazonaws.com/sign+up+d4+study+buddy.PNG' alt='sign up'/>
                </div>
                </div>
                <footer>
                    <h3> Find us on:</h3>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">YouTube</a></li>
                </footer>
            </div>
        </section>
    )
}

export default Homepage;