import React from 'react';
import '../CSS/About.css';
import owner from '../../Assets/owner.jpeg';
import {NavLink} from 'react-router-dom';

const About = () => {
  return (
    <section className = "about-section">
      <h1 className="text-center">About <span style = {{color : 'var(--light-red)'}}>Us</span></h1>
      <p>
      Sitting in Gujrat and feeling like – ‘Yarr bengal ke street foods khane ko mil jaate toh mazaa aa jata.’
      </p>

      <p>
      Don’t worry gupta ji hain a!
      </p>
      
      <p>
      guptaJizz is one the best Indian fast food delivery services. We have been working for past 10 years in the main streets of Kolkata but with lots of courage and support we started giving our services pan India for last 3-4 years. We have been worked on many states like Gujrat, Rajasthan, Odisha, Kerela and many more. 
      </p>
      
      <p>
      We feel blessed whenever a customer says ‘ummm – hmmm, kya baat hai gupta ji, mazaa aa gya’. We are building this brand with lots of efforts and passion. 
      </p>
      
      <p>
      What is most important for us? 
      </p>
      
      <p>
      Quality of food. Whenever we hear fast food. We will be like – ‘umm fast foods are good for the health.’ But gupta ji provides quality food, so no need to worry about your health.  
      </p>
      
      <p>
      What makes us different? 
      </p>
      
      <p>
      Majority of our customers are those who don’t takes ginger or garlic in their meal. So, your request we make fast foods without ginger-garlic also. 
      </p>
      
      <p>
      Toh fir soch kya rahe ho? Arrey apna party order abhi register karwao bhai.
      </p>
      
      <div className = "owner-class">
        <p>
          <i class="fas fa-quote-left"></i>
          The path of the human heart passes through the stomach.
          <i class="fas fa-quote-right"></i>
          <NavLink className="navItem nav-link lik" to="/order"> <span>Book your meal now.</span> </NavLink>
        </p>
        <img src = {owner} alt = "Owner Image"/>
      </div>
    </section>
  )
}

export default About
