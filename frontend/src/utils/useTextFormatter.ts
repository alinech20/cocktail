export const useTextFormatter = () => {
  const capitalizeFirstLetter = (text: string) => text[0].toUpperCase() + text.slice(1)

  return {
    capitalizeFirstLetter
  }
}
