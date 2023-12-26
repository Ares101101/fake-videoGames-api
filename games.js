import z from 'zod'

const gameSchema = z.object({
  title: z.string({
    invalid_type_error: 'Video game title must be a string',
    required_error: 'Video game title is required'
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

export function validateGame (index) {
  return gameSchema.safeParse(index)
}

export function validatePartialGame (index) {
  return gameSchema.partial().safeParse(index)
}
