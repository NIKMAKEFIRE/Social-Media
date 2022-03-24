export const required = (value) => {
  if (value) return undefined
  return "Поле обязательно"
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Макс кол-во символов должно быть ${maxLength}`
  return undefined
}
