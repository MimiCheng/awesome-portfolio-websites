/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Towards Asynchronous Motor Imagery-Based Brain-Computer Interfaces: a joint training scheme using deep learning",
        authors : "P.Cheng (First Author), P.Autthasan, B.Pijarana, E.Chuangsuwanich, and T.Wilaiprasitporn",
        conferences : "IEEE Region Ten Conference",
        researchYr : 2018,
        citebox : "popup1",
        image : "assets/images/research-page/paper1.png",
        citation: {
            vancouver: "-"
        },
        abstract: "Deep learning approach is applied to a joint training scheme for asynchronous motor imagerybased Brain-Computer Interface (BCI). The proposed DL approach is a cascade of one-dimensional convolutional neural networks and fully-connected neural networks.",
        absbox: "absPopup1"
    },

];

AOS.init();
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
          <tr data-aos="zoom-in-left">
              <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="https://arxiv.org/abs/1808.10852" class="paperTitle"> ${title} </a>
                    <div> ${authors} </div> <div class="rConferences"> ${conferences}
                        <div class="researchY">${researchYr}</div>
                    </div>

                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract" type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href="https://arxiv.org/abs/1808.10852" class="button button-accent button-small text-right button-abstract" role="button" aria-pressed="true">PAPER</a>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Image Similarity Search with self-supervised learnings",
    cardImage: "assets/images/experience-page/image-sim.jpeg",
    description: "",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Protein Classification",
    cardImage: "assets/images/experience-page/protein_image.png",
    description: "Exercise tracker built using basic redux.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://github.com/MimiCheng/kaggle-protein-image-classification/blob/master/README.md",
    Githublink: "https://github.com/MimiCheng/kaggle-protein-image-classification/blob/master/README.md"
  },
  {
    title: "Card Segmentation",
    cardImage: "assets/images/project-page/unet.png",
    description: "Built a card segmentation using U-Net with Resnet34 backbone, encoder weights were pretrained on the Imagenet. The project is implemented in Pytorch Lightning.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/MimiCheng/card-segmentation/blob/main/README.md",
    Githublink: "https://github.com/MimiCheng/card-segmentation",
  },
  {
    title: "Content-based Movie Recommender",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Unsupervised Learning models Word2vec and Doc2vec. Evaluated the model using Triplet Loss",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Music Recommender",
    cardImage: "assets/images/project-page/music.jpeg",
    description: "Built a recommendation system with GPUs and LSTMs using Keras.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/MimiCheng/Music-Recommender-with-RNN",
    Githublink: "https://github.com/MimiCheng/Music-Recommender-with-RNN",
  },
  {
    title: "Hand-Drawn Image Classification",
    cardImage: "assets/images/project-page/dessin.png",
    description: "Built a recommendation system with GPUs and LSTMs using Keras.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://www.kaggle.com/c/ift3395-6390-quickdraw",
    Githublink: "https://drive.google.com/file/d/1tfgJ_MxgMytwucmYpDEsGr6wLmeywDxd/view?usp=sharing",
  },
  {
    title: "Social Media Prediction",
    cardImage: "assets/images/project-page/socialmedia.jpeg",
    description: "Developed models to predict the number of 'likes' for given details about the simulated profiles of users on social media.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/MimiCheng/kaggle-social-media-prediction/blob/main/README.md",
    Githublink: "https://github.com/MimiCheng/kaggle-social-media-prediction/blob/main/README.md",
  },
  {
    title: "Lung Diseases Classification",
    cardImage: "assets/images/project-page/lung.png",
    description:
      "Modified InceptionV3, a pretrained neural network widely use for one-class classification to predict multi-class classification problem 4whGxt3lM9egyG3I75y09XUYSjppugoR8zaUOriga1NGsb1vkPu Tensorflow and Nodejs.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://devpost.com/software/lung-disease-classification-on-mobile-application",
    Githublink: "https://github.com/MimiCheng/tensorflow_lung",
  },
  {
    title: "Speech Source Separation",
    cardImage: "assets/images/experience-page/speechbrain.png",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://docs.google.com/presentation/d/1csGcbgILSi6DdF_EbHgbV6tfjCAECj3nn1txJM6LIuo/edit?usp=sharing",
    Githublink: "https://github.com/mravanelli-mila/speechbrain_sep",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Githublink }) => {
      (output += `
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
