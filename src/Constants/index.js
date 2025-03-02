import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
export const WORK_EXPERIENCE = [
    {
        company: "ConcertAI",
        role: "Software Engineer",
        duration: "July 2023 - Present",
        workList: [
            {
                name: "Digital Trial Solution (DTS) Development",
                description: "Played a key role in the creation of DTS, a comprehensive platform designed to streamline and optimize clinical trials within the healthcare and life sciences industry."
            },
            {
                name: "Test-Driven Development (TDD) Implementation",
                description: "Integrated React Testing Library with Jest as the test runner, spearheading the adoption of Test-Driven Development (TDD) practices across the entire project, enhancing code quality and reliability."
            },
            {
                name: "VEEVA API Integration",
                description: "Seamlessly integrated the VEEVA API into the existing DTS platform, enabling users to manage clinical trial data from both EDC and VEEVA within a single module, thus simplifying data management and accessibility."
            },
            {
                name: "eCRF Flow Contribution",
                description: "Contributed significantly to the development of the electronic Case Report Form (eCRF) workflow, including functionalities for saving, submitting, and auditing clinical trial data within EDC, ensuring compliance and data integrity."
            }
        ],
        skills: [
            "JavaScript",
            "React.js",
            "Redux",
            "React query",
            "ES6",
            "WebPack",
            "Node.js",
            "HTML",
            "CSS",
            "SCSS",
            "Materil-Ui",
            "Jest",
            "react-testing-library"
        ]
    },
    {
        company: "Publicis Sapient",
        role: "Associate Technology L2",
        duration: "May 2021 - Jul 2023",
        workList: [
            {
                name: "Client Requirement Gathering & Feature Development:",
                description: "Led the client requirement gathering process and developed new features for Dynamic and Manual Offers, significantly enhancing the readability and customer comprehension of incentives and offers."
            },
            {
                name: "UI Development",
                description: "Engineered sophisticated UI applications using React.js, Redux, JavaScript, and TypeScript, while adhering to a Test-Driven Development (TDD) approach to ensure high-quality and maintainable code."
            },
            {
                name: "Responsiveness & Web Analytics Integration:",
                description: "Ensured seamless responsiveness across devices and integrated Adobe Analytics for advanced web analytics, enabling data-driven insights and enhanced user experience."
            }
        ],
        skills: [
            "JavaScript",
            "React.js",
            "Redux",
            "Web Accessibility",
            "Responsive Design",
            "ES6",
            "WebPack",
            "HTML",
            "CSS",
            "SCSS",
            "Materil Ui",
            "Jest",
            "React Testing Library",
            "Performance Optimization"
        ]
    },
    {
        company: "Infosys",
        role: "System Engineer",
        duration: "Aug 2019 - May 2021",
        workList: [
            {
                name: "Developed",
                description: "a comprehensive enterprise application for tracking and managing the lifecycle of iOS devices, facilitating seamless access to device details from manufacturing through to customer sales."
            },
            {
                name: "Translated",
                description: "intricate designs and wireframes into high-quality, responsive code using React.js workflows."
            }
        ],
        skills: [
            "JavaScript",
            "React.js",
            "Redux",
            "ES6",
            "HTML",
            "CSS"
        ]
    },
];
export const NAVBAR_ITEMS = [
    {
        Icon: AiOutlineHome,
        name: 'Home',
        to: '/'
    },
    {
        Icon: AiOutlineUser,
        name: 'Experience',
        to: '/experience'
    },
    {
        Icon: AiOutlineFundProjectionScreen,
        name: 'Projects',
        to: '/projects'
    },
    {
        Icon: CgFileDocument,
        name: 'Resume',
        to: '/resume'
    },
]

export const SKILLS = [
    {

    }
] 