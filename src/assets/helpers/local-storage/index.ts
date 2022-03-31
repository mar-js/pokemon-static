export const TOGGLE_FAVORITE = (id: number) => {
  let favorites: any[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(poke_id => poke_id !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}
