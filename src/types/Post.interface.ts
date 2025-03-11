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