/** CMS contracts: null means unknown, never zero. Draft content cannot imply a verified fact. */
export type LocalizedText = { fr: string; en: string };
export interface ContentRecord { id: string; slug: string; title: LocalizedText; status: 'draft' | 'review' | 'published'; reviewedAt: string | null }
export interface Document extends ContentRecord { url: string | null; kind: 'legal' | 'annual' | 'financial' | 'policy' | 'project'; sizeBytes: number | null }
export interface ImpactMetric extends ContentRecord { value: number | null; unit: LocalizedText; period: string | null; source: string | null; methodology: LocalizedText | null }
export interface Partner extends ContentRecord { logoUrl: string | null; authorizationRef: string | null; category: 'donor' | 'ngo' | 'foundation' | 'company' | 'academic' | 'community' }
export interface TeamMember extends ContentRecord { role: LocalizedText; portraitUrl: string | null; consentRef: string | null }
export interface Testimonial extends ContentRecord { quote: LocalizedText; attribution: LocalizedText; consentRef: string | null }
export interface Program extends ContentRecord { description: LocalizedText; projectIds: string[] }
export interface Project extends ContentRecord {
  programId: string | null; location: LocalizedText | null; stage: 'planned' | 'active' | 'completed' | null;
  problem: LocalizedText | null; objective: LocalizedText | null; activities: LocalizedText[];
  beneficiaries: LocalizedText | null; metricIds: string[]; documentIds: string[]; partnerIds: string[];
  gallery: { url: string; alt: LocalizedText; consentRef: string | null }[];
  budget: { amount: number; currency: string; source: string } | null;
}
export interface Article extends ContentRecord { category: 'news' | 'report' | 'story' | 'press'; body: LocalizedText; publishedAt: string | null }
export interface FundingOpportunity extends ContentRecord {
  projectId: string; objective: LocalizedText | null; expectedResults: LocalizedText[];
  targetAmount: number | null; securedAmount: number | null; currency: string | null;
  budgetSource: string | null; startDate: string | null; endDate: string | null;
  sdgIds: number[]; documentIds: string[];
}
