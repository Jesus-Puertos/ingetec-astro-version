const domain = import.meta.env.WP_DOMAIN
console.log(domain)

interface Post {
    title: {rendered: string}, 
    excerpt: {rendered: string},
    content: {rendered: string}, 
    date: string,
    slug: string,
    _embedded: {
        'wp:featuredmedia': {
            source_url: string
        }[]
    }
  }  

const apiUrl = `${domain}/wp-json/wp/v2`

export const getPageInfo = async (slug: string)=>{
    const response = await fetch(`${apiUrl}/pages?slug=${slug}`)

    if(!response.ok)  throw new Error('Error al pedir informacion...')

    const [data] = await response.json();
    const  {title: {rendered: title}, content: {rendered:content}} = data
    return {title, content}
}


export const getLatestPost = async ({ perPage = 10, page = 1 }: { perPage?: number; page?: number } = {}) => {
    const response = await fetch(`${apiUrl}/posts?per_page=${perPage}&page=${page}&_embed`);
    if (!response.ok) throw new Error('Failed to fetch latest post');

    const results = await response.json();
    if (!results.length) throw new Error("No Post found");

    const posts = results.map((post: Post) => {
        const {
            title: { rendered: title },
            excerpt: { rendered: excerpt },
            content: { rendered: content },
            date,
            slug
        } = post;

        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

        return { title, excerpt, content, date, slug, featuredImage };
    });

    return posts;
};


// export const getAllPostsSlugs = async () => {
//     const response = await fetch(`${apiUrl}/posts?per_page=100`)
//     if(!response.ok) throw new Error('Failed to fetch latest post')
    
//     const results =  await response.json();
//     if(!results.length) throw new Error("No Post found")

//     const slugs = results.map(post => post.slug)

//     return slugs
// }

export const getPostInfo = async (slug: string)=>{
    const response = await fetch(`${apiUrl}/posts?slug=${slug}`)

    if(!response.ok)  throw new Error('Error al pedir informacion...')

    const [data] = await response.json();
    const  {title: {rendered: title}, content: {rendered:content}} = data
    return {title, content}
}