import * as S from './Button.styles'

import type { ButtonProps } from './types'

export function Button({ prop = 'Button' }: ButtonProps) {
  return (
    <S.Box>
      <h1>{prop}</h1>
    </S.Box>
  )
}