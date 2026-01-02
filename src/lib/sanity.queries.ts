import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "categories": coalesce(categories, [category]),
  readTime
}`;

export const paginatedPostsQuery = groq`*[_type == "post" && (title match $search || excerpt match $search || categories[] match $search || category match $search) && ($category == "All" || $category in categories || category == $category || ($category == "Others" && count(categories[@ in ["Development", "React", "Backend", "UI/UX", "Tutorial"]]) == 0 && !(category in ["Development", "React", "Backend", "UI/UX", "Tutorial"])))] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "categories": coalesce(categories, [category]),
  readTime
}`;

export const totalPostsQuery = groq`count(*[_type == "post" && (title match $search || excerpt match $search || categories[] match $search || category match $search) && ($category == "All" || $category in categories || category == $category || ($category == "Others" && count(categories[@ in ["Development", "React", "Backend", "UI/UX", "Tutorial"]]) == 0 && !(category in ["Development", "React", "Backend", "UI/UX", "Tutorial"])))])`;

export const categoriesQuery = groq`array::unique([...*[_type == "post"].categories[], ...*[_type == "post"] {category}.category])`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  body,
  excerpt,
  mainImage,
  publishedAt,
  "categories": coalesce(categories, [category]),
  readTime,
  "relatedPosts": *[_type == "post" && _id != ^._id] | order(count(categories[@ in ^.categories]) desc, count(categories[@ in [^.category]]) desc, publishedAt desc) [0...5] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    "categories": coalesce(categories, [category]),
    publishedAt,
    readTime
  }
}`;
