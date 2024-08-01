import { Technology } from "./technology";

export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    deployUrl: string;
    repositoryUrl: string;
    active: boolean;
    technologies: Technology[];
}
