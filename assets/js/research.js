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
    // {
    //     title : "Towards Asynchronous Motor Imagery-Based Brain-Computer Interfaces: a joint training scheme using deep learning",
    //     authors : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
    //     conferences : "IEEE Region Ten Conference",
    //     researchYr : 2018,
    //     citebox : "popup2",
    //     image : "assets/images/research-page/crossLingual.png",
    //     citation: {
    //         vancouver: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 2",
    //     absbox: "absPopup2"
    // },

];
AOS.init();
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left">
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a>
                    <div> ${authors} </div> <div class="rConferences"> ${conferences}
                        <div class="researchY">${researchYr}</div>
                    </div>

                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}
                        </div>
                    </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);
