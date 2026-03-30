import React from "react";
import { notFound } from "next/navigation";
import { client } from "../../../../../sanity/lib/client";
import BlogPostClient from "./BlogPostClient";

export const revalidate = 60;

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Fetch the specific post
    const postQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        publishedAt,
        author,
        mainImage,
        body
    }`;

    const post = await client.fetch(postQuery, { slug });

    if (!post) {
        return notFound();
    }

    // Fetch related posts (excluding current, latest 3)
    const relatedPostsQuery = `*[_type == "blogPost" && slug.current != $slug] | order(publishedAt desc) [0...3] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        author,
        mainImage,
        excerpt
    }`;

    const relatedPosts = await client.fetch(relatedPostsQuery, { slug });

    return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}
