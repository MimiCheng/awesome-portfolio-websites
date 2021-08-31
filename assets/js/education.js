AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "AI for Medical Diagnosis",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://coursera.org/share/b02daf877b4f542843cb587a30832ddd",
  },
  {
    title: "Deep Learning Specialization",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/specialization/J5MZE7AVYAU4",
  },
  {
    title: "Natural Language Processing Fundamentals in Pythodatacamp",
    cardImage: "assets/images/education-page/datacamp.png",
    moocLink: "https://www.datacamp.com/statement-of-accomplishment/course/8bd5e1e70247c3963edb2dc4b2039308cebb7614",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.jpeg"
  },
  {
    img: "assets/images/education-page/c2.png"
  },
  {
    img: "assets/images/education-page/c3.jpeg"
  },
  {
    img: "assets/images/education-page/c4.jpeg"
  },
  {
    img: "assets/images/education-page/c5.jpeg"
  },
  {
    img: "assets/images/education-page/c6.jpeg"
  },
  {
    img: "assets/images/education-page/c7.jpeg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Cloud Training",
    image: "assets/images/education-page/badge.png",
    description: "Earned Apr 05, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline-container");
const timelinesection = [
  {
    heading: "MILA - Quebec AI Institute",
    image: "assets/images/education-page/mila.png",
    subheading: "Professional Masters in Machine Learning (2020-2022)",
    description: "<li>Recipient of Microsoft Diversity Award</li><li>SpeechBrain(an open-source speech toolkit) Contributor</li>",
  },

  {
    heading: "University of Montreal",
    image: "assets/images/education-page/udem.jpeg",
    subheading: "Masters of Science in Computer Science (2020-2022)",
    description: "<li>Fundamentals of Machine Learning</li><li>Data Science</li><li>Representation Learning</li><li>Advance Machine Learning Project</li><li>Data Structure</li><li>Introduction to Algorithms</li>",
  },
  {
    heading: "Chulalongkorn University",
    image: "assets/images/education-page/chula.png",
    subheading: "Bachelors of Science in Statistics, Minor in Acturial Science (2012-2016)",
    description: "<li>Led the team to win 1st runner-up in critical thinking skill development competition held by Statistics Department.</li><li>Past into the final round of Thailand Big Data Challenge #2</li><li>Member of CU Photography Club.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `
    <div class="timeline-item">
    <div class="timeline-img">

    </div>

    <div class="timeline-content js--fadeInLeft">
        <img src="${image}">
    <div class="timeline-content-text">
      <h2>${heading}</h2>
      <h6>${subheading}</h6>
      <p>${description}</p>

    </div>
    </div>
  </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
