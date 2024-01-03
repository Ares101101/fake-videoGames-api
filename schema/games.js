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

const dpSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required'
  })
})

export function validateGame (index) {
  return gameSchema.safeParse(index)
}

export function validatePartialGame (index) {
  return gameSchema.partial().safeParse(index)
}

export function validateDP (index) {
  return dpSchema.safeParse(index)
}
export function validatePartialDP (index) {
  return dpSchema.partial().safeParse(index)
}
