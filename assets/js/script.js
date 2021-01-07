var app = new Vue({
  el: "#root",
  data: {
    active: "active",
    hover: false,
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
    portfolio_categories: [
      { name: "All categories" },
      { name: "HTML + CSS" },
      // { name: "JQuery" },
      { name: "VueJs" },
      { name: "Javascript" },
    ],
    portfolio: [
      // {
      //   src: "assets/img/portfolio_project/Html+Css_DigitalOcean.PNG",
      //   categories: "html_css",
      //   visible: true,
      // },
      {
        src: "assets/img/portfolio_project/Html+Css_Helbiz.PNG",
        categories: "html_css",
        visible: true,
        description: "Helbiz",
      },
      {
        src: "assets/img/portfolio_project/Html+Css_Spotify.PNG",
        categories: "html_css",
        visible: true,
        description: "Spotify Web",
      },
      // {
      //   src: "assets/img/portfolio_project/JQuery_Carousel.PNG",
      //   categories: "JQuery",
      //   visible: true,
      // },
      {
        src: "assets/img/portfolio_project/VueJs_Boolzapp.PNG",
        categories: "VueJs",
        visible: true,
        description: "Whatsapp Web",
      },
      {
        src: "assets/img/portfolio_project/VueJs_ToDoList.PNG",
        categories: "VueJs",
        visible: true,
        description: "To do List",
      },
      {
        src: "assets/img/portfolio_project/Js_BigliettoTreno.PNG",
        categories: "Javascript",
        visible: true,
        description: "Train Ticket",
      },
      {
        src: "assets/img/portfolio_project/Js_EmailDadi.PNG",
        categories: "Javascript",
        visible: true,
        description: "Email & Dice game",
      },
    ],
  },

  methods: {
    selectPortfolio: function (index) {
      console.log(this.portfolio_categories[index].name);

      if (this.portfolio_categories[index].name == "All categories") {
        this.portfolio.forEach((element) => {
          element.visible = false;
          console.log(element.visible);
          element.visible = true;
        });
      } else if (this.portfolio_categories[index].name == "HTML + CSS") {
        this.portfolio.forEach((element) => {
          console.log(element.categories);
          if (element.categories != "html_css") {
            element.visible = false;
          } else {
            element.visible = true;
          }
        });
      } else if (this.portfolio_categories[index].name == "JQuery") {
        this.portfolio.forEach((element) => {
          console.log(element.categories);
          if (element.categories != "JQuery") {
            element.visible = false;
          } else {
            element.visible = true;
          }
        });
      } else if (this.portfolio_categories[index].name == "VueJs") {
        this.portfolio.forEach((element) => {
          console.log(element.categories);
          if (element.categories != "VueJs") {
            element.visible = false;
          } else {
            element.visible = true;
          }
        });
      } else if (this.portfolio_categories[index].name == "Javascript") {
        this.portfolio.forEach((element) => {
          console.log(element.categories);
          if (element.categories != "Javascript") {
            element.visible = false;
          } else {
            element.visible = true;
          }
        });
      }
    },

  },
});



// TODO

// 1- Trigger animations when scroll
// 2- Connect Php file to webhost
// 3- Add popup to view img in full screen when clicked
// 4- Implement footer with an UP bottom to go automatically on top of the page
// 5- Insert the right informations
// 6- Change the icons for the different sections
// 7- Navbar mobile to work
