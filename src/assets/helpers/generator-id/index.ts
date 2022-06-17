import { v4 } from 'uuid'

export const GENERATOR_ID = (id?: number | string) => {
  const ID: string = id ? `${v4() + id}` : v4()

  return ID
}
