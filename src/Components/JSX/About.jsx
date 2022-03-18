import React from 'react';
import '../CSS/About.css';
import owner from '../../Assets/owner.jpeg';

const About = () => {
  return (
    <section className = "about-section">
      <h1>About <span style = {{color : 'var(--light-red)'}}>Us</span></h1>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.
      </p>

      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </p>
      
      <div className = "owner-class">
        <p>
          <i class="fas fa-quote-left"></i>
          Even the world's most successful individuals have experienced their fair share of setbacks and hardships. There's much to learn from their challenges as well as their success. Luckily, they've condensed their wisdom into meaningful quotes that you can store for later use.
          <i class="fas fa-quote-right"></i>
        </p>
        <img src = {owner} alt = "Owner Image"/>
      </div>
    </section>
  )
}

export default About
