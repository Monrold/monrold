
import {z, defineCollection} from "astro:content";



const allProyects = defineCollection({
    type: 'content',
    schema:({
        title: z.string(),
        cliente: z.string(),
        categoria: z.object({
            ux: z.string().optional(),
            brandign: z.string().optional()
        }).optional(),
        date: z.string().date(),
        descripcion: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        images: z.object({
            imageMobile: z.object({
                src: z.string(),
                alt: z.string()
            }).optional(),
            imageDesktop: z.object({
                src: z.string(),
                alt: z.string()
            }).optional()
        }).optional()
    })
})

export const collections = {
    'proyects': allProyects,
}