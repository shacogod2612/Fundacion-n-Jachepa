import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'fundacionInfo',
  title: 'Información de la Fundación',
  type: 'document',
  fields: [
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
            select: {
              title: 'titulo',
              media: 'imagen'
            }
          }
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Datos Generales de la Fundación'
      }
    }
  }
})