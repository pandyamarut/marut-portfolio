/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Marut's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Marut Pandya website",
    type: "website",
    // url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Marut Pandya",
  logo_name: "Marut Pandya",
  nickname: "mwiki",
  subTitle:
    "I'm a Computer Science enthusiast who always thrives to work on end to end products. I am a Philosophy Nerd who loves reading non-fiction, loves playing guitar and likes watching documentaries. ",
  resumeLink:
    "https://drive.google.com/file/d/1PpBs_AWyhKc6ZpehDVc1GQ_EcRtRZxfn/view?usp=sharing",
  portfolio_repository: "https://github.com/pandyamarut",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/pandyamarut",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/marutpandya/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pandyamarut@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/pandya_marut",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive SaaS front end using React-Redux",
        "⚡ Creating services in backend using GoLang, Python and Java.",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "simple-icons:golang",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ deploying multiple cloud resources on the container orchestration platform.  ",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/pandyamarut",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dayananda Sagar College of Engineering",
      subtitle: "B.Tech. in Information Science",
      logo_path: "iiitk_logo.png",
      alt_name: "DSCE Bangalore",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied subjects like Data structures, Algorithms, Machine learning, Operating system etc under the guidance of highly qualified professors. Apart from the core subjects I learned many soft skills like resilience, endurance and patience which will help me throughout my life. ",
      ],
      website_link: "https://www.dsce.edu.in/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Mentorships",
  description:
    "I have worked with many evolving startups as Software Developer and currently I am working at a cyber security startup DeepFence Inc. as a Member of Technical staff-01.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Member of technical staff",
          company: "Deepfence Inc.",
          company_url: "https://deepfence.io/",
          // logo_path: "legato_logo.png",
          duration: "December 2020 - PRESENT",
          location: "Bangalore, Karnataka",
          description:
            "I am working on user interface of the enterprise product using ReactJs and leading effort a",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "MayaData Inc.",
          company_url: "https://mayadata.io/",
          // logo_path: "muffito_logo.png",
          duration: "September 2020 - November 2020",
          location: "Bangalore, Karnataka",
          description:
            "I was part of the team working on the continuous development of the SaaS User Interface made major contributions by single handedly adding the features, integrating the Backend APIs using the EmberJs. I contributed in re-writing and revamping the UI components to make it more user-friendly. I worked on cloud visualisation tools like Grafana, where I created the 10+ Grafana dashboards to visualise the stats for more than 6 workload applications hosted on Kubernetes.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "MayaData Inc.",
          company_url: "https://mayadata.io/",
          // logo_path: "muffito_logo.png",
          duration: "Jan 2020 - August 2020",
          location: "Bangalore, Karnataka",
          description:
            "I was part of the team working on the continuous development of the SaaS User Interface made major contributions by single handedly adding the features, integrating the Backend APIs using the EmberJs. I contributed in re-writing and revamping the UI components to make it more user-friendly. I worked on cloud visualisation tools like Grafana, where I created the 10+ Grafana dashboards to visualise the stats for more than 6 workload applications hosted on Kubernetes.",
          color: "#9b1578",
        },
        {
          title: "Software Engineer Intern",
          company: "MayaData Inc.",
          company_url: "https://mayadata.io/",
          // logo_path: "muffito_logo.png",
          duration: "Jan 2019 - August 2019",
          location: "Bangalore, Karnataka",
          description:
            "I was part of the team working on the continuous development of the SaaS User Interface made major contributions by single handedly adding the features, integrating the Backend APIs using the EmberJs. I contributed in re-writing and revamping the UI components to make it more user-friendly. I worked on cloud visualisation tools like Grafana, where I created the 10+ Grafana dashboards to visualise the stats for more than 6 workload applications hosted on Kubernetes.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Mentorships",
      experiences: [
        {
          title: "Mentor",
          company: "Girlscript summer of code 2020",
          company_url: "https://about.google/",
          // logo_path: "google_logo.png",
          duration: "feb 2020 - july 2020",
          location: "Remote",
          description:
            "Mentored and encouraged the software developers to work on open source projects. Helped them in understanding the benefits of contributing to open source projects and how it will help them enhance their skills and in career perspective. It was learning for me as well from the diverse community of developers.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    // profile_image_path: "animated_ashutosh.png",
    description: "",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@pandyamarut",
    avatar_image_path: "blogs_image.svg",
  },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "+91 8320758513",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  contactPageData,
};
