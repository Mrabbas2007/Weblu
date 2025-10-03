
export type FullPortfolioType = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    images?: string[];
    category: "web" | "app" | "uiux" | "branding" | "other";
    client?: string;
    date?: string;
    technologies: string[];
    link?: string;
};


export type PortfolioCardType = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
};

