export interface IndustriesListProps {
  industry: {
    title: string;
  };
}

export interface JobListProps {
  opened: boolean;
  close: () => void;
  job: {
    img: string;
    title: string;
    company: string;
    location: string;
    tags: string[];
    description: string[];
    posted: string;
    role: string;
    qualifications: string[];
    responsibilities: string[];
    opened: boolean;
    close: () => void;
  };
  similarJob: {
    img: string;
    title: string;
    company: string;
    location: string;
    tags: string[];
    description: string[];
    posted: string;
    role: string;
    qualifications: string[];
    responsibilities: string[];
    opened: boolean;
    close: () => void;
  };
}

export interface BenefitsProps {
  benefit: {
    icon: string;
    title: string;
    description: string;
  };
}
