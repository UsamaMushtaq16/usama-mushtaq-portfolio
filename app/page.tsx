import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"

async function getData() {

  const data = {
    main: {
      "name": "Usama Mushtaq",
      "shortDesc": "I specialize in creating intuitive web applications tailored to client needs, emphasizing detail, scalability, and high performance.",
      "titles": [
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
      ],
      "heroImage": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      "techStackImages": [
        "https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000001",
        "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      ]
    },
    "about": {
      "aboutImage": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      "aboutImageCaption": "Let's Build Dreams Together",
      "title": "Full Stack Developer",
      "about": "I have more than 4 years of full-stack programming experience, and As a proficient Full-Stack developer of MERN, I have experience creating scalable and maintainable web applications. I have a solid history in developing online applications utilising Node.js/Nest, Express.js, React.js, Next.js, and MongoDB. I am dedicated to providing high-quality code that satisfies the needs of my clients, and I am constantly searching for fresh challenges to advance my abilities.",
      "callUrl": "",
      "resumeUrl": ""
    },
    "skills": [
      {
        "name": "HTML",
        "image": "https://img.icons8.com/?size=100&id=EAUyKy3IwmqM&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "CSS",
        "image": "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "JavaScript",
        "image": "https://img.icons8.com/color/144/null/javascript--v1.png",
        "category": "Frontend"
      },
      {
        "name": "React js",
        "image": "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "Next.js",
        "image": "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "Tailwind CSS",
        "image": "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "Bootstrap",
        "image": "https://img.icons8.com/?size=100&id=84710&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "TypeScript",
        "image": "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
        "category": "Backend"
      },
      {
        "name": "Node.js",
        "image": "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        "category": "Backend"
      },
      {
        "name": "NestJS",
        "image": "https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000000",
        "category": "Backend"
      },
      {
        "name": "Express JS",
        "image": "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
        "category": "Backend"
      },
      {
        "name": "MongoDB",
        "image": "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
        "category": "Backend"
      },
      {
        "name": "SQL",
        "image": "https://img.icons8.com/?size=100&id=3767&format=png&color=000000",
        "category": "Backend"
      },
      {
        "name": "PostgreSQL",
        "image": "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
        "category": "Backend"
      },
      {
        "name": "Firebase",
        "image": "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
        "category": "Backend"
      },
    ],
    "projects": [
      {
        "name": "Project Title",
        "techstack": "HTML5, CSS3, JavaScript, jQuery",
        "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        "links": {
          "code": "",
          "video": "",
          "visit": "www.facebook.com"
        }
      },
      {
        "name": "Project Title",
        "techstack": "Flutter, Dart, Firebase",
        "category": "Flutter",
        "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        "links": {
          "code": "",
          "video": "",
          "visit": ""
        }
      },
      {
        "name": "Project Title",
        "techstack": "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        "category": "LAMP Stack",
        "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        "links": {
          "code": "",
          "video": "",
          "visit": ""
        }
      }
    ],
    "educations": [
      {
        "institute": "Government Graduate College Township, Lahore",
        "degree": "Intermediate of Computer Science",
        "duration": "September 2014 - April 2016",
      },
      {
        "institute": "University of Engineering and Technology, Lahore",
        "degree": "Bachelor in Computer Science",
        "duration": "August 2016 - May 2020",
      }
    ],
    "experiences": [
      {
        "company": "Dynamic Solutions",
        "position": "Associate Software Engineer",
        "duration": "June 2019 - July 2020",
        "desc": [
          "Learned professional practices using JavaScript in the start and then with Typescript.",
          "Created and Integrated Node Js backend with React Applications.",
          "Built the official site for the company and deployed using AWS."
        ]
      },
      {
        "company": "DHives",
        "position": "Software Engineer",
        "duration": "August 2020 - July 2022",
        "desc": [
          "Learnt Social Media API's integration to manage social media platforms.",
          "Google Map API's integration and map components.",
          "AWS Lambda functions and AWS Cloud-Watch logging for Project."
        ]
      },
      {
        "company": "Zeikh Technologies",
        "position": "Senior Software Engineer",
        "duration": "August 2022 - April 2024",
        "desc": [
          "Developed full stack application using ReactJs and NodeJs (Typescript)",
          "Worked as Senior backend engineer on various Node Js application",
          "Contributed in application architecture design"
        ]
      }
    ]
  }
  return data
}

export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      }
    </>
  )
}