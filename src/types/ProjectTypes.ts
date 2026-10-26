export type LogoProject = {
    logo: string;
    mockup1: string;
    mockup2: string;
}

export type ImageOnlyProj = {
    image: string;
    alt: string;
}

export type UIXProject = {
    thumbnail: string;
    name: string;
};

export type Project = LogoProject | ImageOnlyProj | UIXProject;

export type ProjectPageState = {
    title: string;
    projects: Project[];
};