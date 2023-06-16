// import { Container } from "@mui/system";
import React from "react";
import styles from "../css/explore.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from "./footer";
export const Explore=()=> {
  AOS.init({
    disableOnInteraction: true,
  });
  // Get the AOS instance
// AOS.init();

// Disable animations on reverse scrolling
// var lastScrollTop = 0;
// window.addEventListener("scroll", function() {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop){
//     aos.disable = false; // enable animations on forward scroll
//   } else {
//     aos.disable = true; // disable animations on reverse scroll
//   }
//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
// });

  
  return (
    <div>

    <div className="container">
      {/* <Container> */}
        <div className={styles.section1}>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center" > 
             <div>
              <h1>
                About<br></br> <span>Vasavi Mahal</span>
              </h1>
              <p>
              Sri Kanyaka Parameshwari Devasthanam and Charities owes its existence to the blessings of Sri Vasavamba, the presiding deity of the Arya Vysya community.
With the philanthropic services and support of the members of the community and under the able leadership of P.A Raju Chettiar and Sundaram Chettiar, a temple for Sri Kanyaka Parameshwari Ammavaru was constructed in the year 1960 at South car Street, Palani.
              </p>
              <p>
                Vasavi Mahal has well constructed Dining Halls, Rooms and Meeting Halls and have a capacity of holding upto 700 people for a function.
              </p>
              </div>
              
            </div>
            <div className="col-md-6">
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center">
                <img className="rounded" src={require('../images/entrance.jpg')} alt="hj" />
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container className={styles.container2}> */}
        <div className={styles.section2}>
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center" >
                <img src={require('../images/temple.jpg')} alt="hj" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center" >
              <div>
              <h1>
                Vasavi<br></br><span>Kanyaka Parameshvari</span>
              </h1>
              <p>
              Vasavi Kanyaka Parameshvari is a Hindu goddess, primarily revered by the Komati community of Andhra Pradesh.She is primarily recognised by her adherents as a virgin form of Parvati, and sometimes also identified as a form of Lakshmi in Vaishnava tradition.
              </p>
              <p>
              According to legend, a powerful Chalukya monarch called Vishnuvardhana ruled Andhra in the 11th century CE. During this period, a prominent Vaishya named Kusuma Sreshti lived at Penugonda, under the king's domain. Due to his wisdom, the king treated the man like a chieftain. Due to his childlessness, the merchant prayed to Virupaksha, who blessed him with a son, Virupaksha, as well as a daughter, Vasavi, who grew up to become a comely and pious maiden. She caught the attention of the king, who wished to marry her. Despite the fact that her parents objected to the match, they could not dissuade the king of his desire. On the day of her wedding, the bride, her parents, as well as all the leaders of the community's 102 gotras showed their opposition by leaping into the homam fire, performing the act of agni pravesham. After her death, Vasavi's soul was sanctified at Penugonda, and elevated to the status of a deity.
              </p>
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      
      {/* <Container> */}
      <div className={styles.section1}>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center" >
              <div>
              <h1>
                Marriage <span>Halls</span>
              </h1>
              <p>
                Vasavi Mahal consist of Marriage Hall of 70 X210 sq.feet and 16X16 sq.feet of Stage and around capacity of 200 people seatable. Orchestra stage should be constructed by the event planner if they have idea of conducting Orchestra
              </p>
              <p>
                This hall has 2 ways to get down through the steps which helps the people to navigate easily. All functions like Marriage,60th Birthday Celebration,Rituals,Reception,Meetings,Speech can be conducted in this hall 
              </p>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center">
                <img src={require('../images/stage.jpg')} alt="hj" />
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container className={styles.container2}> */}
      <div className={styles.section2}>
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center" >
                <img src={require('../images/mahal1.jpg')} alt="hj" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center" >
              <div>

              
              <h1>
                Decors and<span>Lighting</span>
              </h1>
              <p>
                The mahal has a generator to support power outages at unexpected times.
                The halls, rooms and the dinings are connected with unlimited power supply.
             </p>
              <p>
                Lighting is the most important thing in capturing our memorable moments.
                The halls are provided with immense lighting and space for aeration.
                The decorations are to be carried out by the clients or we'll suggest handy 
                and classy decorators based on the client's budget and requirements.
              </p>
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container> */}
      <div className={styles.section1}>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center" >
              <div>
              <h1>
                Dining <span>Halls</span>
              </h1>
              <p>
                Palani Vasavi Mahal has Dining Hall of 180X60 sq.feet and seating capacity of 200 people.Dining Hall is attached with the kitchen and Restrooms are attached with the dining halls.
                The dining halls are spacious with aeration and cleanly environment. The seats are properly cleaned and maintained before every function and after every function also.
                This is done to ensure that the eating environment is cleanly and sanitary to prevent any infections and diseases.
                Sitting and eating is the culture of our country and our hall supports this ethnicity. All the food are served with care to the people who are seated. 
              </p>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center">
                <img src={require('../images/dining-2.jpg')} alt="hj" />
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container className={styles.container2}> */}
      <div className={styles.section2}>
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center" >
                <img src={require('../images/green room-2.jpg')} alt="hj" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center" >
              <div>
              <h1>
                Rooms
              </h1>
              <p>
                There are 15 rooms on the first floor of the mahal. 
                These rooms are for the guests and separate charges are alloted for the rooms based on the time slots.
                The rooms contain attached restrooms, door mats, clean beds, cupboards.
                The rooms are 16 x 16 and spacious. The bedspreads are cleansed for every function.
              </p>
              <p>
                Sleep is very essential for a relaxed mind.Our rooms provide the optimal environment for relaxation for the tired guests.
              </p>
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container> */}
      
    </div>
      <Footer/>
    </div>
  );
}
