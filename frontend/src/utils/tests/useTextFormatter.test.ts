import { describe, it, expect } from 'vitest'
import { useTextFormatter } from '../useTextFormatter'

describe('testing text formatter', () => {
  const formatter = useTextFormatter()

  describe('testing capitalizeFirstLetter', () => {
    const { capitalizeFirstLetter } = formatter

    it('should return empty string when getting empty string', () => {
      expect(capitalizeFirstLetter()).toBe('')
      expect(capitalizeFirstLetter('')).toBe('')
    })

    it('should return same character when getting one non letter char', () => {
      expect(capitalizeFirstLetter('7')).toBe('7')
      expect(capitalizeFirstLetter(' ')).toBe(' ')
      expect(capitalizeFirstLetter('!')).toBe('!')
    })

    it('should return capitalized letter when getting one char', () => {
      expect(capitalizeFirstLetter('a')).toBe('A')
      expect(capitalizeFirstLetter('f')).toBe('F')
    })

    it('should return same text if does not start with letter', () => {
      expect(capitalizeFirstLetter('1wksc3')).toBe('1wksc3')
      expect(capitalizeFirstLetter('!@sa-xvq')).toBe('!@sa-xvq')
      expect(capitalizeFirstLetter(' asc3')).toBe(' asc3')
    })

    it('should return text with capitalized first letter', () => {
      expect(capitalizeFirstLetter('yes')).toBe('Yes')
      expect(capitalizeFirstLetter('no but yes')).toBe('No but yes')
      expect(capitalizeFirstLetter('a1sd')).toBe('A1sd')
    })
  })
})
