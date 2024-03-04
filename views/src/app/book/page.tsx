import React from 'react';

const Book = () => {
  return (
    <div className="book-container">
      <h1 className="book-title">Book by Naoto</h1>
      <h2 className="book-subtitle">Beachcombing for Dreams</h2>
      <p className="book-description">
        This is an on-going book project for young readers with the working title Beachcombing for Dreams. The story is set in a small fishing village on the central coast of Vietnam though the theme is universally Southeast Asian or perhaps relevant to young folks of any less developed land. The heroine, Mi-Lien is enthralled by the activity of scavenging junk from the beach, the dumpsters and various places in and around her village. She makes toys for her younger siblings and together they invent stories and adventures to go with them. The recurrent theme is about uncovering the spirit in an old piece of driftwood (or anything else others might consider junk) and giving it new life. 
        <br /><br />
        Mi-Lien would spend every moment of her time, when not helping with the family restaurant, making things and creating new dreams and adventures. Her nemesis is the ever-hovering need to do schoolwork. The sense of impending drudgery takes the form of the evil demon Greysmoke. While the tale is, hopefully, uplifting and life-affirming it is interwoven with the conflict of encroaching development and the continuing devastation in the aftermath of war. War and the use of landmines and Agent Orange play into the story – not for the purpose of dwelling on negative chapters of history, but in hopes that our young people learn that bad things do happen in our world and we should learn from our mistakes. Sadly, it seems that all too often we either don’t learn or forget much too quickly. 
        <br />
        The joys, adventures, creative expression swirl with conflict and clashes with evil demons until Halong and Greysmoke merge in a magical way. It is then that Mi-Lien and the kids come to the understanding that schoolwork and knowledge serve to give her dreams and creative endeavors ever more significance and meaning. Most of the writing and illustrations were done while wandering through Vietnam, Cambodia, Laos, Southwest China and while living and working in Thailand. Some were started simply as travel sketches and later modified for the book. Further rewriting and a few more drawings were done in the States. The best ones in my mind were done in collaboration with my then six year old nephew Evan. He was the primary artist for the illustrations titled: Ogre Cave, Poison Cloud Demon and Halong Sleeping Under the Sea. I gave Evan only vague instructions to draw an ogre in a cave, a foggy demon in the sky that eats trees and plants on the ground and a dragon sleeping on the bottom of the sea with craggy mountains with trees poking out. As Evan produced masterful work I only had to add a bit of texture and a few refinements.    
      </p>
      <div className="book-images">
        <img src="/images/MiLienOgreCave.jpg" alt="Mi Lien Creates Dreams from Junk" className="book-image" />
        <img src="/images/MiLiensDreams.jpg" alt="Ogre Cave" className="book-image" />
      </div>
    </div>
  );
}

export default Book;
