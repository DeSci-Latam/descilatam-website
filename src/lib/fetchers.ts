import { getCollection } from "astro:content";

export async function getCategories(collection = "blog") {
  const posts = await getCollection(collection);
  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat()),
  ];

  return categories;
}

export async function getPosts(collection = "blog") {
  const posts = (await getCollection(collection)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getPostsByCategory(category: string, collection = "blog") {
  const posts = (await getCollection(collection))
    .filter((post) => post.data.category.includes(category))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}

export async function getGuides() {
  const guides = (await getCollection("guides"))
    .filter((guide) => guide.data.published)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}
