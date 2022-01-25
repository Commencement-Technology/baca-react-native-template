import { cleanup, render } from '@testing-library/react-native'

import { ComponentsScreen } from './ComponentsScreen'

afterEach(cleanup)

it('renders a component screen', () => {
  const { findByText } = render(<ComponentsScreen />)
  expect(findByText('Button')).toBeTruthy()
  expect(findByText('This is component screen')).toBeTruthy()
})
