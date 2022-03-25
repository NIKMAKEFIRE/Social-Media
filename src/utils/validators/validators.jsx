export const required = (value) => {
  if (value) return undefined;
  return "Обязательное поле"
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Макс кол-во ${maxLength} символов`
  return undefined
}