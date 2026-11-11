import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'fundacionInfo',
  title: 'Configuración General del Sitio',
  type: 'document',
  fields: [
    // --- 1. HEADER & NAVEGACIÓN ---
    defineField({
      name: 'header',
      title: ' Header / Encabezado',
      type: 'object',
      fields: [
        { name: 'logo', title: 'Logo de la Fundación', type: 'image', options: { hotspot: true } },
        { name: 'nombreSitio', title: 'Nombre del Sitio / Marca', type: 'string' },
        {
        name: 'menuEnlaces',
        title: 'Enlaces del Menú',
        type: 'array',
        of: [
            {
            type: 'object',
            fields: [
                { name: 'texto', title: 'Texto del enlace (ej: Inicio)', type: 'string' },
                { 
                name: 'url', 
                title: 'Sección o Destino', 
                type: 'string',
                options: {
                    list: [
                    { title: 'Sección Inicio', value: '#inicio' },
                    { title: 'Sección Nosotros', value: '#nosotros' },
                    { title: 'Sección Proyectos', value: '#proyectos' },
                    { title: 'Sección Galería', value: '#galeria' },
                    { title: 'Sección Contacto', value: '#contacto' },
                    { title: 'Enlace externo / Web completa', value: 'custom' }
                    ]
                }
                }
            ]
            }
        ]
        }
      ]
    }),

    // --- 2. SECCIÓN HERO (PORTADA) ---
    defineField({
      name: 'hero',
      title: ' Hero / Portada Principal',
      type: 'object',
      fields: [
        { name: 'tituloPrincipal', title: 'Título Principal del Hero', type: 'string' },
        { name: 'subtitulo', title: 'Subtítulo / Bajada', type: 'text', rows: 3 },
        { name: 'imagenFondo', title: 'Imagen de Fondo o Ilustración', type: 'image', options: { hotspot: true } },
        { name: 'textoBoton', title: 'Texto del Botón Principal', type: 'string' },
        { name: 'enlaceBoton', title: 'Enlace del Botón', type: 'string' }
      ]
    }),

    // --- 3. INFORMACIÓN INSTITUCIONAL ---
    defineField({
      name: 'mision',
      title: 'Misión',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'vision',
      title: 'Visión',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'whatsapp',
      title: 'Número de WhatsApp (ej: 573245884759)',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Correo de Contacto',
      type: 'string'
    }),

    // --- 4. PROYECTOS ---
    defineField({
      name: 'proyectos',
      title: 'Proyectos de la Fundación',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titulo', title: 'Nombre del Proyecto', type: 'string' },
            { name: 'enfoque', title: 'Enfoque / Descripción corta', type: 'text', rows: 2 },
            { name: 'imagen', title: 'Imagen del Proyecto', type: 'image', options: { hotspot: true } },
            { name: 'enlace', title: 'Enlace a detalles', type: 'string' }
          ],
          preview: {
            select: { title: 'titulo', media: 'imagen' }
          }
        }
      ]
    }),

    // --- 5. FOOTER / PIE DE PÁGINA ---
    defineField({
      name: 'footer',
      title: ' Footer / Pie de Página',
      type: 'object',
      fields: [
        { name: 'textoDerechos', title: 'Texto de Copyright', type: 'string' },
        { name: 'direccion', title: 'Dirección Física', type: 'string' },
        {
          name: 'redesSociales',
          title: 'Redes Sociales',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'nombre', title: 'Red Social (ej: Facebook, Instagram)', type: 'string' },
                { name: 'url', title: 'Enlace a la cuenta', type: 'string' }
              ]
            }
          ]
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: 'Configuración General del Sitio' }
    }
  }
})