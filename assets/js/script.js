var app = new Vue({
  el: "#root",
  data: {
    card_interests: "card_interests",
    skills: [
      "assets/img/skills/html5.svg",
      "assets/img/skills/css3.svg",
      "assets/img/skills/javascript.svg",
      "assets/img/skills/jquery-1.svg",
      "assets/img/skills/vue-9.svg",
      "assets/img/skills/bootstrap-4.svg",
    ],
    resume_card: "resume_card",
    formation: [
      {
        subject: "Web Developer Bootcamp",
        year: "2020 - 2021",
        description:
          "Full Stack Web Developer bootcamp of six months in which i studied different programming languages and frameworks such as the ones i call my skills",
      },
      {
        subject: "High School Degree in Turin, Italy",
        year: "2013",
        description: "Scientific High School Degree",
      },
    ],
    workexperience: [
      {
        position: "Swag",
        year: "2013/2015",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet!",
      },
    ],
  },
});