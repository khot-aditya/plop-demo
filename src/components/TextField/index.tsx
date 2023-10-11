import * as S from './TextField.styles'

import type { TextFieldProps } from './types'

export function TextField({ prop = 'TextField' }: TextFieldProps) {
  return (
    <S.Box>
      <h1>{prop}</h1>
    </S.Box>
  )
}