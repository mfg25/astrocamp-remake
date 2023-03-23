import "./aboutUs.css";

function contentAboutUs() {
  let mainContainer = document.createElement("main");
  mainContainer.id = "contentAboutUs";

  let textContainer = document.createElement("div");
  textContainer.id = "textContainer";

  let description = document.createElement("p");
  description.id = "description";
  description.innerText = `Astrocamp is a website that offers a variety of online courses in astronomy for people of all ages and skill levels. Our courses are designed to be interactive and engaging, with a focus on helping students learn about the cosmos in a fun and meaningful way.

    Our course offerings range from basic introductions to astronomy for beginners to more advanced courses that delve into the latest research and theories in the field. We also offer courses on practical astronomy skills, such as how to use telescopes and other observational equipment, as well as courses on the history of astronomy and the cultural and societal impacts of our understanding of the universe.
    
    In addition to our course offerings, Astrocamp also has a thriving community of students and enthusiasts who share their own observations, photos, and experiences with astronomy. Our forums and chatrooms provide a place for students to connect with others who share their passion for the stars, and our social media pages keep students up to date on the latest news and developments in the world of astronomy.

    Whether you're a beginner looking to learn about the basics of astronomy or a seasoned enthusiast looking to deepen your understanding of the cosmos, Astrocamp has something for everyone.

    Astrocamp's courses are designed by experienced astronomers and educators who are passionate about sharing their knowledge and love of astronomy with others. The courses are presented in a user-friendly, interactive format that combines text, images, videos, and animations to create an engaging learning experience.
    
    In addition to these courses, Astrocamp also offers workshops, webinars, and other special events throughout the year. These events provide opportunities for students to interact with astronomers and other experts in the field, ask questions, and deepen their understanding of astronomy.`;

  textContainer.appendChild(description);

  mainContainer.appendChild(textContainer);

  return mainContainer;
}

export default contentAboutUs;
