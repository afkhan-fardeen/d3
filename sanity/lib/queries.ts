import { client } from './client';

export async function getAllSolutions() {
  return client.fetch(`*[_type == "solution"] | order(_createdAt asc) {
    _id, title, slug, shortDesc, tags, icon, seoTitle, seoDesc
  }`);
}

export async function getSolutionBySlug(slug: string) {
  return client.fetch(`*[_type == "solution" && slug.current == $slug][0] {
    _id, title, slug, shortDesc, description, features, tags, icon,
    seoTitle, seoDesc, seoKeyword, arabicTitle, arabicDesc,
    "relatedSolutions": relatedSolutions[]->{_id, title, slug, shortDesc, icon},
    "industry": industry->{_id, title, slug},
    "caseStudy": caseStudy->{_id, clientName, clientType, problem, result}
  }`, { slug });
}

export async function getAllIndustries() {
  return client.fetch(`*[_type == "industry"] | order(_createdAt asc) {
    _id, title, slug, shortDesc, icon,
    "solutionCount": count(solutions)
  }`);
}

export async function getIndustryBySlug(slug: string) {
  return client.fetch(`*[_type == "industry" && slug.current == $slug][0] {
    _id, title, slug, shortDesc, challenges, icon,
    "solutions": solutions[]->{_id, title, slug, shortDesc, icon},
    "caseStudies": caseStudies[]->{_id, clientName, clientType, problem, result, slug}
  }`, { slug });
}

export async function getAllCaseStudies() {
  return client.fetch(`*[_type == "caseStudy"] | order(_createdAt asc) {
    _id, slug, clientName, clientType, problem, result,
    "solution": relatedSolution->{title, slug}
  }`);
}

export async function getCaseStudyBySlug(slug: string) {
  return client.fetch(`*[_type == "caseStudy" && slug.current == $slug][0] {
    _id, slug, clientName, clientType, problem, solution, result,
    "relatedSolution": relatedSolution->{_id, title, slug}
  }`, { slug });
}

export async function getAllClients() {
  return client.fetch(`*[_type == "client"] | order(category asc, name asc) {
    _id, name, logo, category
  }`);
}

export async function getAllBlogPosts() {
  return client.fetch(`*[_type == "blog"] | order(publishedAt desc) {
    _id, title, slug, excerpt, tags, publishedAt
  }`);
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(`*[_type == "blog" && slug.current == $slug][0] {
    _id, title, slug, excerpt, content, tags, publishedAt,
    "relatedSolutions": relatedSolutions[]->{_id, title, slug}
  }`, { slug });
}
