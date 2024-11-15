import { Technology } from "../enums/technology";

export interface Project {
    name: string;
    description: string;
    imageUrl: string;
    deployUrl: string | null;
    repositoryUrl: string | null;
    active: boolean;
    professional: boolean;
    technologies: Technology[];
}
