import z from 'zod'

const gameSchema = z.object({
  title: z.string({
    invalid_type_error: 'Video game title must be a string',
    required_error: 'Video game title is required'
  }),
  genres: z.array(z.number().int().positive()),
  publisher: z.number().int().positive(),
  description: z.string(),
  developer: z.number().int().positive(),
  coverImage: z.string().url()
})

export function validateGame (index) {
  return gameSchema.safeParse(index)
}

export function validatePartialGame (index) {
  return gameSchema.partial().safeParse(index)
}
