import React from "react";
import { client } from "../../../../sanity/lib/client";
import ProjectsClient, { SanityProject } from "./ProjectsClient";

export const revalidate = 60; // revalidate every minute

export default async function ProjectsPage() {
    // Fetch all published projects ordered by creation date
    const query = `*[_type == "project"] | order(_createdAt desc) {
        _id,
        clientName,
        "slug": slug.current,
        serviceCategories,
        metricBadge,
        hook,
        "heroImage": heroImage.asset->url,
        "heroVideo": heroVideo.asset->url,
        heroMediaType
    }`;

    const projects: SanityProject[] = await client.fetch(query);

    return <ProjectsClient initialProjects={projects} />;
}
