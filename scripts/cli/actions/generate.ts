// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import selectPrompt from 'select-prompt'

import { generateIconTypes } from '../commands/generateIconTypes'

const generatePrompts = [
  {
    title: 'Screen',
    value: 'screen',
  },
  {
    title: 'Component',
    value: 'component',
  },
  {
    title: 'Icon types',
    value: 'icon-types',
  },
]

const commands = {
  screen: () => {
    console.log('Generate Screen')
  },
  component: () => {
    console.log('Generate Component')
  },
  'icon-types': generateIconTypes,
}

export const generate = () => {
  selectPrompt('What do you want to generate?', generatePrompts).on(
    'submit',
    async (value: keyof typeof commands) => {
      commands[value]()
    }
  )
}
