import type { Article, Document, FundingOpportunity, ImpactMetric, Partner, Program, Project, TeamMember, Testimonial } from './models';

/** Provider boundary for a future headless CMS. Only published, reviewed records may be exposed. */
export interface PublicContent {
  programs: readonly Program[];
  projects: readonly Project[];
  articles: readonly Article[];
  testimonials: readonly Testimonial[];
  metrics: readonly ImpactMetric[];
  documents: readonly Document[];
  partners: readonly Partner[];
  team: readonly TeamMember[];
  funding: readonly FundingOpportunity[];
}
export interface ContentRepository { getPublishedContent(): Promise<PublicContent> }

/** No official records were supplied. UI placeholders are not published CMS records. */
export const contentRepository: ContentRepository = {
  async getPublishedContent() {
    return { programs: [], projects: [], articles: [], testimonials: [], metrics: [], documents: [], partners: [], team: [], funding: [] };
  },
};
