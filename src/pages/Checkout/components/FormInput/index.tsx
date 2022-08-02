import { ErrorMessage } from '@hookform/error-message'
import { InputHTMLAttributes } from 'react'
import { FieldErrors, useFormContext } from 'react-hook-form'
import { ICoffeProps } from '../../../../reducers/checkout/reducers'
import * as S from './styles'

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string
  errors: FieldErrors<ICoffeProps>
  containerStyle?: object
}

export function FormInput({
  inputName,
  errors,
  containerStyle,
  ...rest
}: IFormInputProps) {
  const { register } = useFormContext()

  return (
    <S.Container style={containerStyle}>
      <S.BaseInput {...rest} {...register(inputName)} />
      <ErrorMessage errors={errors} name={inputName} as="span" />
    </S.Container>
  )
}
