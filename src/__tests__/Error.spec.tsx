import { render } from '@testing-library/react'
import Error from '../components/layouts/Error'


describe('Error', () => {
  it('should render error code 500 correctly', () => {
    const { getByTestId } = render(
      <Error errorCode={500} />,
    )
    expect(getByTestId('error-title'))
      .toBeTruthy()
    expect(getByTestId('error-message'))
      .toBeTruthy()
    
    expect(getByTestId('error-title').textContent)
      .toBe('500 Erreur serveur')
  })
  
  it('should render error code 404 correctly', () => {
    const { getByTestId } = render(
      <Error errorCode={404} />,
    )
    expect(getByTestId('error-title'))
      .toBeTruthy()
    expect(getByTestId('error-message'))
      .toBeTruthy()
    
    expect(getByTestId('error-title').textContent)
      .toBe('404 Fichier introuvable')
  })
})