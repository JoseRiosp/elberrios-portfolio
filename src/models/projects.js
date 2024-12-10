import { faCss, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { CgCPlusPlus } from "react-icons/cg";

export const projects = [
    {
        id: 'fullstack',
        type: 'Full Stack',
        projects:[
        {   id: 1,
            name: 'Product Store Management',
            description: 'Your online store to promote all your products',
            language: [faJs, faHtml5, faCss],
            technologies:'Nextjs - Reactjs - Tailwindcss',
            powered:'Vercel',
            status: 'in development...',
            image: '/product.png',    
            github: 'https://github.com/JoseRiosp/next-task-app.git', 
            deploy: ''
        }
        ]

    },
    {
        id: 'frontend',
        type: 'Front-End',
        projects:[]
    },
    {
        id: 'backend',
        type: 'Back-End',
        projects:[{
            name: 'Battle Naval Game',
            description: 'A CLI mini-game for two players',
            language:[<CgCPlusPlus className="text-green-400"/>],
            technologies:'CLI, bash/zsh',
            status: 'finished',
            image: '/naval-game.png',
            github: 'https://github.com/JoseRiosp/naval-game-c.git'
        }]
    },
    {
        id: 'designs',
        type: 'Designs/Ideas',
        projects:[]
    }
]