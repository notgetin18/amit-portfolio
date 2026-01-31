import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  thumbnailImage,
  publishedAt,
  "categories": coalesce(array::compact(categories[]->title) + categories[!defined(_type)], [category]),
  readTime
}`;

export const paginatedPostsQuery = groq`*[_type == "post" && (title match $search || excerpt match $search || categories[] match $search || categories[]->title match $search || category match $search) && ($category == "All" || $category in categories[]->title || $category in categories || category == $category)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  thumbnailImage,
  publishedAt,
  "categories": coalesce(array::compact(categories[]->title) + categories[!defined(_type)], [category]),
  readTime
}`;

export const totalPostsQuery = groq`count(*[_type == "post" && (title match $search || excerpt match $search || categories[] match $search || categories[]->title match $search || category match $search) && ($category == "All" || $category in categories[]->title || $category in categories || category == $category)])`;

export const categoriesQuery = groq`array::unique([
  ...*[_type == "category"].title,
  ...*[_type == "post"].categories[@._type == "reference"]->title,
  ...*[_type == "post"].categories[!defined(_type)],
  ...*[_type == "post"].category
])`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  body,
  excerpt,
  mainImage,
  thumbnailImage,
  publishedAt,
  "categories": coalesce(array::compact(categories[]->title) + categories[!defined(_type)], [category]),
  readTime,
  keywords,
  "relatedPosts": *[_type == "post" && _id != ^._id] | order(count(categories[]->title[@ in ^.categories[]->title]) desc, count(categories[@ in ^.categories]) desc, publishedAt desc) [0...5] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    thumbnailImage,
    "categories": coalesce(array::compact(categories[]->title) + categories[!defined(_type)], [category]),
    publishedAt,
    readTime
  }
}`;

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
