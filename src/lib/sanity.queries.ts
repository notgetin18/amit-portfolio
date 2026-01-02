import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  category,
  readTime
}`;

export const paginatedPostsQuery = groq`*[_type == "post" && (title match $search || excerpt match $search || category match $search)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  category,
  readTime
}`;

export const totalPostsQuery = groq`count(*[_type == "post" && (title match $search || excerpt match $search || category match $search)])`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  body,
  mainImage,
  publishedAt,
  category,
  readTime,
  "relatedPosts": *[_type == "post" && category == ^.category && _id != ^._id][0...3] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    category
  }
}`;
