import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <section className="bio-section">
        <h1>Naoto Sekiguchi - A Musical Journey</h1>
        <img src="/images/naotophoto.jpeg" alt="Naoto Sekiguchi" className="bio-image"/>
        <p>Naoto Sekiguchi, an architect, educator, and musician, left an indelible mark on the world through his creativity, compassion, and dedication to justice. Born in Tokyo and raised in the U.S., Naoto's journey from architecture to teaching across the globe reflected his insatiable curiosity and love for humanity. His work, whether in design or music, challenged societal ills with humor and empathy. Naoto's legacy, enriched by his travels and the deep connections he formed, continues to inspire those who knew him and were touched by his creative spirit and unwavering kindness.</p>
      </section>
      
      <section className="cd-section">
        <h2>Featured Album: Ceasefire Between My Brain & My Heart</h2>
        <img src="/images/cdfront.jpg" alt="Ceasefire Between My Brain & My Heart Front" className="cd-image"/>
        <img src="/images/cdback.jpg" alt="Ceasefire Between My Brain & My Heart Back" className="cd-image"/>
        <p>This album is the result of many years of travel, human interactions and life experiences expressed through music and words....... </p>
        <ul className="track-list">
          <li>Missing single: Hope Out of Chaos - In Honor of George Floyd, Breonna Taylor, and All the Others</li>
          <li>Missing single: Life & Hopes Tangled Up</li>
          {/* Add other tracks here */}
        </ul>
      </section>
    </div>
  );
}

export default Home;
