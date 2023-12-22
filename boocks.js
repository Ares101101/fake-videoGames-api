import z from 'zod'

const boockSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required'
  }),
  isbn: z.string(),
  pageCount: z.number().int().positive(),
  publishedDate: z.object({ $date: z.string() }),
  thumbnailUrl: z.string().url({
    message: 'Posted must be a valid URL'
  }),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  status: z.string(),
  authors: z.array(z.string()),
  categories: z.array(z.string())
})

export function validateBoock (index) {
  return boockSchema.safeParse(index)
}

export function validatePartialBoock (index) {
  return boockSchema.partial().safeParse(index)
}
