import React from "react";
import { client } from "../../../../sanity/lib/client";
import BlogClient, { SanityBlogPost } from "./BlogClient";

export const revalidate = 60; // revalidate every minute

export default async function BlogPage() {
    // Fetch all published blog posts ordered by publication date
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        author,
        mainImage,
        excerpt
    }`;

    const posts: SanityBlogPost[] = await client.fetch(query);

    return <BlogClient initialPosts={posts} />;
}
