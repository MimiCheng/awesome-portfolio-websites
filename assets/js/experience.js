AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Machine Learning Engineer Intern",
    cardImage: "assets/images/experience-page/jumio.jpeg",
    place: "Jumio",
    time: "(May 2021 - present)",
    desp: "<li>Developing self-supervised learning models such as Bootstrap Your Own Latent (BYOL) and Autoencoder for image similarity search.</li> <li>Integrating and training ML models from POC to production using Amazon Web Services (AWS).</li> <li>Designing experiments to test the image search results.</li>",
  },
  {
    title: "AI Engineer",
    cardImage: "assets/images/experience-page/truedigital.jpeg",
    place: "True Digital Group",
    time: "(Nov 2017 - Jul 2020)",
    desp: "<li>Built, validated, tested, and identified improvement for recommendation systems with Neural Networks on Google Cloud Platform (GCP).</li><li>Developed Natural Language ​Latent Representation using Self-Supervised methods such as LDA, Doc2vec, and Word2vec.</li><li>Productionized​ data pre-​processing​ (ETL) jobs and algorithms written in Scala and Python.</li><li>Developed movie personalized reranking models with listwise approaches for ordering movies on shelves based on the user's watch history.</li>",
  },
  {
    title: "Research Assistant (Contract)",
    cardImage: "assets/images/experience-page/vistec.png",
    place: "Vidyasirimedhi Institute of Science and Technology",
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
    title: "Speech Brain",
    cardImage: "assets/images/experience-page/speechbrain.png",
    description:
      "Speech Separation for Unknown Number of Speakers. Decomposed a mixed signal into the original signals prior to the mixing procedure.",
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
    subtitle: "1st Place - Rank 1/894",
    image: "assets/images/experience-page/protein_image.png",
    desp: "Developed models to classify mixed patterns of proteins in microscope images using Pytorch.",
    link: "https://github.com/MimiCheng/kaggle-protein-image-classification/blob/master/README.md"
  },
  {
    title: "Kaggle Competition - Hand-Drawn Image Classification",
    subtitle: "Ranked 5/68",
    image: "assets/images/experience-page/dessin.png",
    desp: "Developed models to classify muti-classes of hand drawn images by people around the world, as part of the project Quickdraw.",
    link: "https://www.kaggle.com/c/ift3395-6390-quickdraw/leaderboard"
  },
  {
    title: "Kaggle Competition - Social Media Prediction",
    subtitle: "Ranked 4/31",
    image: "assets/images/project-page/socialmedia.jpeg",
    desp: "Developed models to predict the number of 'likes' for given details about the simulated profiles of users on social media.",
    link: "https://github.com/MimiCheng/kaggle-social-media-prediction/blob/main/README.md"
  },
  {
    title: "Kaggle Competition - Classification d'articles ArXiv",
    subtitle: "Ranked 23/115",
    image: "assets/images/experience-page/article.jpeg",
    desp: "Developed models to predict the number of 'likes' for given details about the simulated profiles of users on social media.",
    link: "https://www.kaggle.com/c/ift3395-6390-arxiv/leaderboard"
  },
  {
    title: "The Siam Innovation District (SID) TechTalent - Build Smarter Products with Machine Learning Hackathon",
    subtitle: "Best Showcase Project",
    image: "assets/images/experience-page/cuhub.png",
    desp: "SID Tech Talent is a 48 hour long hackathon organized by CU Innovation Hub for trainees to apply the knowledge from the machine learning courses on solving real-world problems.",
    link: "https://devpost.com/software/lung-disease-classification-on-mobile-application"
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, link}) =>
      (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href=${link} class="blog-slider__button">Read More</a>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
