const domain = "http://localhost:8882";
console.log(domain);
const apiUrl = `${domain}/wp-json/wp/v2`;
const getPageInfo = async (slug) => {
  const response = await fetch(`${apiUrl}/pages?slug=${slug}`);
  if (!response.ok) throw new Error("Error al pedir informacion...");
  const [data] = await response.json();
  const { title: { rendered: title }, content: { rendered: content } } = data;
  return { title, content };
};
const getLatestPost = async ({ perPage = 10, page = 1 } = {}) => {
  const response = await fetch(`${apiUrl}/posts?per_page=${perPage}&page=${page}&_embed`);
  if (!response.ok) throw new Error("Failed to fetch latest post");
  const results = await response.json();
  if (!results.length) throw new Error("No Post found");
  const posts = results.map((post) => {
    const {
      title: { rendered: title },
      excerpt: { rendered: excerpt },
      content: { rendered: content },
      date,
      slug
    } = post;
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    return { title, excerpt, content, date, slug, featuredImage };
  });
  return posts;
};
const getPostInfo = async (slug) => {
  const response = await fetch(`${apiUrl}/posts?slug=${slug}`);
  if (!response.ok) throw new Error("Error al pedir informacion...");
  const [data] = await response.json();
  const { title: { rendered: title }, content: { rendered: content } } = data;
  return { title, content };
};

export { getLatestPost as a, getPageInfo as b, getPostInfo as g };
