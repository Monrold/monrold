// Importa las funciones necesarias de Contentful y los tipos correspondientes.
import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

// Interfaz que define la estructura de los datos de tu blog.
export interface Blog {
  contentTypeId: "blog", // ID del tipo de contenido, que parece ser "blog" en tu caso.
  fields: {
    titulo: EntryFieldTypes.Text; // Título del blog.
    imagenPortada: EntryFieldTypes.AssetLink,
    resumen: EntryFieldTypes.Text; // Resumen del blog.
    cuerpo: EntryFieldTypes.RichText; // Cuerpo (puede ser texto plano o RichText).
    images: EntryFieldTypes.AssetLink,
    fecha: EntryFieldTypes.Date,
  }
}

// Crea un cliente de Contentful para hacer consultas.
export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID, // Espacio de Contentful.
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN // Token de vista previa en desarrollo.
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN, // Token de entrega en producción.
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com", // Dependiendo de si estás en desarrollo o producción.
});
