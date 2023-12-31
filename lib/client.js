import {createClient} from "@sanity/client";
import createImageUrlBuilder  from "@sanity/image-url";


export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-06-06",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})


const builder = createImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)