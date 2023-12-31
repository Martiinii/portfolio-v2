import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { ProjectType } from ".";

export const portfolioV1Project: ProjectType = {
    title: 'Portfolio v1',
    date: 'July 2022',
    shortDescription: 'First version of my personal website',
    description: 'Created when I first started applying for jobs.',
    skills: ['React', 'JavaScript', 'Tailwind'],
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Martiinii/portfolio',
            icon: GithubIcon
        },
        {
            title: 'Website',
            href: 'https://portfolio-v1.martiinii.dev',
            icon: ExternalLinkIcon
        }
    ]
}