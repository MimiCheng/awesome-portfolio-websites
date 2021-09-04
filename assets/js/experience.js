AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Machine Learning Engineer Intern",
    cardImage: "assets/images/experience-page/jumio.jpeg",
    place: "Jumio",
    time: "(May 2021 - present)",
    desp: "<li>Developed self-supervised learning models such as Bootstrap Your Own Latent (BYOL) and Autoencoder for image search.</li> <li>Integrating and training ML models from POC to production using AWS.</li> <li>Designed and created experiments to test the image search results.</li>",
  },
  {
    title: "AI Engineer",
    cardImage: "assets/images/experience-page/truedigital.jpeg",
    place: "True Digital Group",
    time: "(Nov 2017 - Jul 2020)",
    desp: "<li>Built, validated, tested, and identified improvement for movie and music recommendation systems with neural networks such as RNN, CNN, Attention models using Keras and Tensorflow.</li><li>Extracted document features by ​using​ Natural Language ​Processing​ ​models​ such as TF-IDF, LDA, doc2vec, and word2vec.</li><li>Productionized​ data pre-​processing​ (ETL) jobs and machine learning models written in Scala and Python.</li><li>Developed internal utilities for the whole team used</li>",
  },
  {
    title: "Research Assistant (Contract)",
    cardImage: "assets/images/experience-page/vistec.png",
    place: "Vidyasirimedhi Institute of Science and Technology (VISTEC)",
    time: "(Apr 2018 - Jul 2018)",
    desp: "<li>Research Assistant at Bio-inspired Robotics and Neural Engineering Lab.</li><li>Researched, designed, and developed 5 experimental scenarios using CNN for predicting EEG signal processing, the model performed significantly higher accuracy than SVM in 4 tasks.</li>",
  },
  {
    title: "Thai Language Specialist (Contract)",
    cardImage: "assets/images/experience-page/cerence.jpeg",
    place: "Cerence",
    time: "(Jun 2019 - Sep 2020)",
    desp: "<li>Generated new resources for the Thai language such as grammar, dictionary, and annotated data for automobile and handset domains.</li><li>Developed high-performance cloud-based Thai Natural Language Understanding (NLU) solutions in the R&D department.</li>",
  },

  {
    title: "Data Scientist",
    cardImage: "assets/images/experience-page/g-able.png",
    place: "G-able Group",
    time: "(Aug 2016 - Apr 2017)",
    desp:"<li>Built predictive analytics on CRM banking data using statistics and machine learning techniques using Python, Scala, and R.</li><li>Used Kafka and Spark Streaming with Scala to analyze real-time banking fraudulent transactions.</li>",
  },
  {
    title: "Data Analyst Intern",
    cardImage: "assets/images/experience-page/aig.png",
    place: "AIG Insurance (Thailand)",
    time: "(Jun 2015 - Jul 2015)",
    desp:"<li>Analyzed market trends on Indonesia’s automobile claimed data to produce marketing strategies using R.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Speech Brain Open Source - Speech Separation for Unknown Number of Speakers",
    cardImage: "assets/images/experience-page/speechbrain.png",
    description:
      "Decomposed a mixed signal into the origibnal signals prior to the mixing procedure. The goal is to improve the accuracy of speech recognition with unknown number of speakers. The work is heavily inspired by current famous speech separation models such as DPRNN, Contasnet, and Sepformer in SpeechBrain.",
  },
  {
    title: "Siam Innovation District (SID) Tech Talent",
    cardImage: "assets/images/experience-page/cuhub.png",
    description:
      "TAing a 6 weeks intensive machine learning course from fundamentals to developing algorithms for hackathon projects.",
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Kaggle Competition - Human Protein Classification with Pytorch",
    subtitle: "Rank 1/894 on private leaderboard",
    image: "assets/images/experience-page/kaggle.png",
    desp: "Developed models to classify mixed patterns of proteins in microscope images using Pytorch.",
  },
  {
    title: "In-class Machine Learning Competition - Classification de dessins",
    subtitle: "Rank 5/68 on private leaderboard",
    image: "assets/images/experience-page/dessin.png",
    desp: "Developed models to classify from 6 classes: [ant, spider, flower, dolphin, lobster, bulldozer]. These image were hand drawn by people around the world, as part of the project Quickdraw.",
  },
  {
    title: "In-class Data Science Competition - Social Media Prediction",
    subtitle: "Rank 4/31 on private leaderboard",
    image: "assets/images/project-page/socialmedia.jpeg",
    desp: "Developed models to predict the number of 'likes' for given details about the simulated profiles of users on social media.",
  },
  {
    title: "In-class Machine Learning Competition - Classification d'articles ArXiv",
    subtitle: "Rank 23/115 on private leaderboard",
    image: "assets/images/experience-page/article.jpeg",
    desp: "Developed models to predict the number of 'likes' for given details about the simulated profiles of users on social media.",
  },
  {
    title: "The Siam Innovation District (SID) TechTalent - Build Smarter Products with Machine Learning Hackathon",
    subtitle: "Best Showcase Project",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "SID Tech Talent is a 48 hour long hackathon organized by CU Innovation Hub for trainees to apply the knowledge from the machine learning courses on solving real-world problems.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
