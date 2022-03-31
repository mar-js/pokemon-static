import { IHeart } from '@assets/interfaces'

import { TOGGLE_FAVORITE } from '@assets/helpers'

import { HeartStyle } from './styles'

export const Heart: React.FC<IHeart> = ({ id }) => {
  const HANDLE_CLICK = (id: number) => {
    TOGGLE_FAVORITE(id)
  }

  return (
    <HeartStyle
      onClick={() => HANDLE_CLICK(id)}
      stroke="#ffffff"
      fill="#ffffff"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        stroke="none"
      />
    </HeartStyle>
  )
}
