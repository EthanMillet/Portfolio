/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Get the button that opens the modal
const Eventifybtn = document.getElementById("Eventify");
const SpellBinderbtn = document.getElementById("Binder")
const Sewerbtn = document.getElementById("SoutherSewerServices")
const cocalendarBtn = document.getElementById("CoCalendar")
const skyjamBtn = document.getElementById("SkyJam")
const comingBtn = document.getElementById("Project3")

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

  // Get the modal
const modal = document.getElementById("myModal");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalSiteLink = document.getElementById("modalSiteLink");
const modalGitLink = document.getElementById("modalGitLink");
const modalBackBtn = document.getElementById("modalBackBtn");
const modalNextBtn = document.getElementById("modalNextBtn");
const modalIMG = document.getElementById("modalIMG");

  class Project {
    constructor(title, img, description, siteLink, gitLink) {
      this.title = title;
      this.img = img;
      this.description = description;
      this.gitLink = gitLink;
      this.siteLink = siteLink;
    }
    
    renderModal = () => {
    modal.style.display = "flex";
    modalTitle.innerHTML = this.title;
    modalDescription.innerHTML = this.description;
    modalSiteLink.setAttribute("href", this.siteLink);
    modalGitLink.setAttribute("href", this.gitLink);
    modalIMG.style.backgroundImage = "url(public/assets/" + this.img[0] +")"
  }
}

  const evetifyIMGs = ["notepad-g715443781_1920.jpg"];
  const eventifyDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc nunc, tristique sit amet ultricies a, mattis sed enim. Donec ante mauris, bibendum vitae malesuada quis, dapibus nec dolor. Nunc rutrum, tellus a viverra maximus, sem libero dignissim lorem, vitae ultrices ante libero ut arcu. Ut in lectus dapibus, mollis lacus sit amet, semper lorem. Integer vitae cursus ligula. Nullam eget lorem at dui scelerisque tristique. Suspendisse lobortis, diam eget hendrerit euismod, sapien enim blandit arcu, ac luctus justo nulla placerat sem. Praesent suscipit ipsum sem, ut volutpat nisi facilisis sed. Morbi et dui tincidunt, fermentum eros et, mollis ex. Nam ex nisl, dignissim commodo facilisis in, fringilla luctus enim.";
  const eventifyLink = "#";
  const eventifyGitLink = "#";

  const spellbinderimgs = ["candle-gaa52aafd9_1920.jpg"];
  const spellbinderDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc nunc, tristique sit amet ultricies a, mattis sed enim. Donec ante mauris, bibendum vitae malesuada quis, dapibus nec dolor. Nunc rutrum, tellus a viverra maximus, sem libero dignissim lorem, vitae ultrices ante libero ut arcu. Ut in lectus dapibus, mollis lacus sit amet, semper lorem. Integer vitae cursus ligula. Nullam eget lorem at dui scelerisque tristique. Suspendisse lobortis, diam eget hendrerit euismod, sapien enim blandit arcu, ac luctus justo nulla placerat sem. Praesent suscipit ipsum sem, ut volutpat nisi facilisis sed. Morbi et dui tincidunt, fermentum eros et, mollis ex. Nam ex nisl, dignissim commodo facilisis in, fringilla luctus enim.";
  const spellbinderLink = "#";
  const spellbinderGitLink = "https://github.com/EthanMillet/GM-s-Binder";

  const sewerIMG = ["sewer.PNG"];
  const sewerDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc nunc, tristique sit amet ultricies a, mattis sed enim. Donec ante mauris, bibendum vitae malesuada quis, dapibus nec dolor. Nunc rutrum, tellus a viverra maximus, sem libero dignissim lorem, vitae ultrices ante libero ut arcu. Ut in lectus dapibus, mollis lacus sit amet, semper lorem. Integer vitae cursus ligula. Nullam eget lorem at dui scelerisque tristique. Suspendisse lobortis, diam eget hendrerit euismod, sapien enim blandit arcu, ac luctus justo nulla placerat sem. Praesent suscipit ipsum sem, ut volutpat nisi facilisis sed. Morbi et dui tincidunt, fermentum eros et, mollis ex. Nam ex nisl, dignissim commodo facilisis in, fringilla luctus enim.";
  const sewerLink = "#";
  const sewerGitLink = "https://github.com/MrBrandtCox/Whats-The-Charge";

  const cocalendarIMG = ["CoCalendar.PNG"];
  const cocalendarDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc nunc, tristique sit amet ultricies a, mattis sed enim. Donec ante mauris, bibendum vitae malesuada quis, dapibus nec dolor. Nunc rutrum, tellus a viverra maximus, sem libero dignissim lorem, vitae ultrices ante libero ut arcu. Ut in lectus dapibus, mollis lacus sit amet, semper lorem. Integer vitae cursus ligula. Nullam eget lorem at dui scelerisque tristique. Suspendisse lobortis, diam eget hendrerit euismod, sapien enim blandit arcu, ac luctus justo nulla placerat sem. Praesent suscipit ipsum sem, ut volutpat nisi facilisis sed. Morbi et dui tincidunt, fermentum eros et, mollis ex. Nam ex nisl, dignissim commodo facilisis in, fringilla luctus enim.";
  const cocalendarLink = "https://chalcalendar.herokuapp.com/";
  const cocalendarGitLink = "https://github.com/magjoker/repo-title-goes-here";

  const skyjamIMG = ["SkyJam.PNG"];
  const skyjamDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc nunc, tristique sit amet ultricies a, mattis sed enim. Donec ante mauris, bibendum vitae malesuada quis, dapibus nec dolor. Nunc rutrum, tellus a viverra maximus, sem libero dignissim lorem, vitae ultrices ante libero ut arcu. Ut in lectus dapibus, mollis lacus sit amet, semper lorem. Integer vitae cursus ligula. Nullam eget lorem at dui scelerisque tristique. Suspendisse lobortis, diam eget hendrerit euismod, sapien enim blandit arcu, ac luctus justo nulla placerat sem. Praesent suscipit ipsum sem, ut volutpat nisi facilisis sed. Morbi et dui tincidunt, fermentum eros et, mollis ex. Nam ex nisl, dignissim commodo facilisis in, fringilla luctus enim.";
  const skyjamLink = "https://j3rkstore.github.io/weatheringo/";
  const skyjamGitLink = "https://github.com/J3rkStore/weatheringo";

  const comingsoonIMG = ["pexels-sonny-sixteen-14019519.jpg"];
  const comingsoonDescription = "I am always working on new projects so stay tuned to see what I come up with next.";
  const comingsoonLink = "https://github.com/EthanMillet/";
  const comingsoonGitLink = "https://github.com/EthanMillet/";

  const Eventify = new Project("Eventify", evetifyIMGs, eventifyDescription, eventifyLink, eventifyGitLink);
  const SpellBinder = new Project("SpellBinder", spellbinderimgs, spellbinderDescription, spellbinderLink, spellbinderGitLink);
  const Sewer = new Project("Souther Sewer", sewerIMG, sewerDescription, sewerLink, sewerGitLink);
  const CoCalendar = new Project("CoCalendar", cocalendarIMG, cocalendarDescription, cocalendarLink, cocalendarGitLink);
  const SkyJam = new Project("SkyJam", skyjamIMG, skyjamDescription, skyjamLink, skyjamGitLink);
  const ComingSoon = new Project("Coming Soon", comingsoonIMG, comingsoonDescription, comingsoonLink, comingsoonGitLink);

// When the user clicks on the button, open the modal
Eventifybtn.onclick = function() {
  Eventify.renderModal();
};

SpellBinderbtn.onclick = function() {
  SpellBinder.renderModal();
 };

 Sewerbtn.onclick = function() {
  Sewer.renderModal();
 };

 cocalendarBtn.onclick = function() {
  CoCalendar.renderModal();
 };

 skyjamBtn.onclick = function() {
  SkyJam.renderModal();
 };

 comingBtn.onclick = function() {
  ComingSoon.renderModal();
 };


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}