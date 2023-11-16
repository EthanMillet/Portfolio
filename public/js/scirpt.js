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
  const spellbinderDescription = `Spell Binder: Unleash Your Imagination with Worldbuilding Mastery

  Embark on a creative journey like never before with Spell Binder, your digital haven for worldbuilding and storytelling. This unique website, powered by GraphQL and MongoDB, redefines the art of world creation by seamlessly blending notes and interactive maps into personalized binders that bring your imaginative realms to life.
  
  Key Features:
  
  Intuitive Binder Creation:
  Spell Binder empowers you to craft intricate worlds with ease. Create personalized binders for each of your projects, providing a centralized space to organize notes, details, and interactive maps for a seamless worldbuilding experience.
  
  Graphical User Interface (GUI):
  Navigate through the enchanting realms of Spell Binder effortlessly. The website boasts a user-friendly interface, ensuring that even novice worldbuilders can easily access and manage their creative projects.
  
  Interactive Maps:
  Dive deep into your created worlds with interactive maps that breathe life into your imagination. Pin locations, add annotations, and create a visual representation of your universe that evolves with your storytelling.
  
  Notes and Lore Management:
  Capture every nuance of your world's lore with a comprehensive note-taking system. Spell Binder allows you to jot down details, character backgrounds, and historical events to build a rich tapestry for your narrative.
  
  Collaborative Worldbuilding:
  Unlock the potential of collaborative storytelling by inviting others to contribute to your world. Whether you're co-authoring a novel or building a role-playing game universe, Spell Binder fosters teamwork and shared creativity.
  
  GraphQL Integration:
  Experience seamless data retrieval and manipulation with Spell Binder's integration of GraphQL. This powerful technology ensures efficient communication between the front end and back end, enhancing the overall performance of the website.
  
  Secure MongoDB Backend:
  Trust in the security and reliability of your creative endeavors with Spell Binder's MongoDB backend. Your data is stored securely, allowing you to focus on expanding your worlds without worry.`;
  
  const spellbinderLink = "https://spell-binder-b54535cd293c.herokuapp.com/";
  const spellbinderGitLink = "https://github.com/EthanMillet/spellBinderMain";

  const sewerIMG = ["sewer.PNG"];
  const sewerDescription = `
  Southern Sewer Services Bid Calculator: Streamlining Contract Bidding with Precision
  
  Welcome to Southern Sewer Services Bid Calculator, your go-to solution for simplifying and optimizing the contract bidding process. This cutting-edge React Native application is designed to empower sewer service professionals by efficiently calculating project bids based on a comprehensive set of inputs.
  
  Key Features:
  
  Intuitive Interface:
  Navigate through the app effortlessly with an intuitive and user-friendly interface. The design ensures a seamless user experience, allowing you to focus on the details that matter most.
  
  Comprehensive Input Fields:
  Southern Sewer Services Bid Calculator provides a wide array of input fields tailored to the specific requirements of sewer service contracts. Input factors include project size, materials, labor costs, equipment expenses, and more.
  
  Customizable Parameters:
  Tailor your bids with ease by adjusting parameters to reflect the unique aspects of each project. Whether it's the type of sewer system, geographical location, or other variables, the app allows for fine-tuning to ensure accuracy.
  
  Real-Time Calculation:
  Experience the power of real-time bid calculation. As you input project details, the app instantly computes the bid amount, providing you with immediate insights into the financial aspects of the contract.`;
  
  const sewerLink = "#";
  const sewerGitLink = "https://github.com/MrBrandtCox/Whats-The-Charge";

  const cocalendarIMG = ["CoCalendar.PNG"];
  const cocalendarDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc nunc, tristique sit amet ultricies a, mattis sed enim. Donec ante mauris, bibendum vitae malesuada quis, dapibus nec dolor. Nunc rutrum, tellus a viverra maximus, sem libero dignissim lorem, vitae ultrices ante libero ut arcu. Ut in lectus dapibus, mollis lacus sit amet, semper lorem. Integer vitae cursus ligula. Nullam eget lorem at dui scelerisque tristique. Suspendisse lobortis, diam eget hendrerit euismod, sapien enim blandit arcu, ac luctus justo nulla placerat sem. Praesent suscipit ipsum sem, ut volutpat nisi facilisis sed. Morbi et dui tincidunt, fermentum eros et, mollis ex. Nam ex nisl, dignissim commodo facilisis in, fringilla luctus enim.";
  const cocalendarLink = "https://chalcalendar.herokuapp.com/";
  const cocalendarGitLink = "https://github.com/magjoker/repo-title-goes-here";

  const skyjamIMG = ["SkyJam.png"];
  const skyjamDescription = `SkyJam: Your Personalized Weather-Inspired Music Experience

  Welcome to SkyJam, where music meets meteorology to create a unique auditory journey tailored just for you. This innovative website, crafted with HTML, CSS, JavaScript, and REST APIs, seamlessly combines real-time weather data with an extensive music library to curate playlists that perfectly match your current atmospheric vibes.
  
  Key Features:
  
  Automatic Location Detection:
  SkyJam utilizes cutting-edge geolocation technology to pinpoint your current location, ensuring that your music experience is tailored to the specific weather conditions around you.
  
  Live Weather Updates:
  Stay informed about the weather in real-time. The website fetches the latest weather data using REST APIs, offering a visually appealing and accurate representation of your current weather conditions.`;
  
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

SpellBinderbtn.onclick = function() {
  SpellBinder.renderModal();
 };

 Sewerbtn.onclick = function() {
  Sewer.renderModal();
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
