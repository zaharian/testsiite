export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface AudienceCard {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  type: 'startup' | 'developers' | 'business';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  accentColor: string;
  type: 'transport' | 'trading' | 'consult';
}
