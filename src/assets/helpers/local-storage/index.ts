
export const TOGGLE_FAVORITE = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(poke_id => poke_id !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const GET_FAVORITE = (id: number): boolean => {
  if (typeof window === 'undefined') return false

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  return favorites.includes(id)
}


export const GET_FAVORITES = (): any => JSON.parse(localStorage.getItem('favorites') || '[]')
