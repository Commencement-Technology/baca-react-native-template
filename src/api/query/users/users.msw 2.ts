/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Generated by orval 🍺
 * Do not edit manually.
 * API
 * API documentation for the starter-kit project in NestJS by BinarApps. The API allows management of users, sessions and offers various functions for logged in users. Contains examples of authentication, authorization, and CRUD for selected resources.
 * OpenAPI spec version: 1.0
 */
import { faker } from '@faker-js/faker'
import { HttpResponse, delay, http } from 'msw'

import type { UserEntity } from '../../types'

export const getUsersControllerCreateResponseMock = (overrideResponse: any = {}): UserEntity => ({
  consent: faker.helpers.arrayElement([
    {
      createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      privacyPolicyAccepted: faker.datatype.boolean(),
      privacyPolicyVersion: faker.word.sample(),
      termsAccepted: faker.datatype.boolean(),
      termsVersion: faker.word.sample(),
      updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      ...overrideResponse,
    },
    undefined,
  ]),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  firstName: faker.word.sample(),
  id: faker.word.sample(),
  lastName: faker.word.sample(),
  locale: faker.word.sample(),
  provider: faker.word.sample(),
  role: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.helpers.arrayElement(['ADMIN', 'USER'] as const),
    ...overrideResponse,
  },
  socialId: faker.word.sample(),
  status: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.word.sample(),
    ...overrideResponse,
  },
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  ...overrideResponse,
})

export const getUsersControllerFindAllResponseMock = (overrideResponse: any = {}): UserEntity[] =>
  Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
    consent: faker.helpers.arrayElement([
      {
        createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
        privacyPolicyAccepted: faker.datatype.boolean(),
        privacyPolicyVersion: faker.word.sample(),
        termsAccepted: faker.datatype.boolean(),
        termsVersion: faker.word.sample(),
        updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
        ...overrideResponse,
      },
      undefined,
    ]),
    createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    email: faker.word.sample(),
    firstName: faker.word.sample(),
    id: faker.word.sample(),
    lastName: faker.word.sample(),
    locale: faker.word.sample(),
    provider: faker.word.sample(),
    role: {
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.helpers.arrayElement(['ADMIN', 'USER'] as const),
      ...overrideResponse,
    },
    socialId: faker.word.sample(),
    status: {
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.word.sample(),
      ...overrideResponse,
    },
    updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    ...overrideResponse,
  }))

export const getUsersControllerFindOneResponseMock = (overrideResponse: any = {}): UserEntity => ({
  consent: faker.helpers.arrayElement([
    {
      createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      privacyPolicyAccepted: faker.datatype.boolean(),
      privacyPolicyVersion: faker.word.sample(),
      termsAccepted: faker.datatype.boolean(),
      termsVersion: faker.word.sample(),
      updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      ...overrideResponse,
    },
    undefined,
  ]),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  firstName: faker.word.sample(),
  id: faker.word.sample(),
  lastName: faker.word.sample(),
  locale: faker.word.sample(),
  provider: faker.word.sample(),
  role: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.helpers.arrayElement(['ADMIN', 'USER'] as const),
    ...overrideResponse,
  },
  socialId: faker.word.sample(),
  status: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.word.sample(),
    ...overrideResponse,
  },
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  ...overrideResponse,
})

export const getUsersControllerUpdateResponseMock = (overrideResponse: any = {}): UserEntity => ({
  consent: faker.helpers.arrayElement([
    {
      createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      privacyPolicyAccepted: faker.datatype.boolean(),
      privacyPolicyVersion: faker.word.sample(),
      termsAccepted: faker.datatype.boolean(),
      termsVersion: faker.word.sample(),
      updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      ...overrideResponse,
    },
    undefined,
  ]),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  firstName: faker.word.sample(),
  id: faker.word.sample(),
  lastName: faker.word.sample(),
  locale: faker.word.sample(),
  provider: faker.word.sample(),
  role: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.helpers.arrayElement(['ADMIN', 'USER'] as const),
    ...overrideResponse,
  },
  socialId: faker.word.sample(),
  status: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.word.sample(),
    ...overrideResponse,
  },
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  ...overrideResponse,
})

export const getUsersControllerRemoveResponseMock = (overrideResponse: any = {}): UserEntity => ({
  consent: faker.helpers.arrayElement([
    {
      createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      privacyPolicyAccepted: faker.datatype.boolean(),
      privacyPolicyVersion: faker.word.sample(),
      termsAccepted: faker.datatype.boolean(),
      termsVersion: faker.word.sample(),
      updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      ...overrideResponse,
    },
    undefined,
  ]),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  firstName: faker.word.sample(),
  id: faker.word.sample(),
  lastName: faker.word.sample(),
  locale: faker.word.sample(),
  provider: faker.word.sample(),
  role: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.helpers.arrayElement(['ADMIN', 'USER'] as const),
    ...overrideResponse,
  },
  socialId: faker.word.sample(),
  status: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.word.sample(),
    ...overrideResponse,
  },
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  ...overrideResponse,
})

export const getUsersControllerCreateMockHandler = (overrideResponse?: UserEntity) => {
  return http.post('*/api/v1/users', async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(overrideResponse ? overrideResponse : getUsersControllerCreateResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  })
}

export const getUsersControllerFindAllMockHandler = (overrideResponse?: UserEntity[]) => {
  return http.get('*/api/v1/users', async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(overrideResponse ? overrideResponse : getUsersControllerFindAllResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  })
}

export const getUsersControllerFindOneMockHandler = (overrideResponse?: UserEntity) => {
  return http.get('*/api/v1/users/:id', async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(overrideResponse ? overrideResponse : getUsersControllerFindOneResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  })
}

export const getUsersControllerUpdateMockHandler = (overrideResponse?: UserEntity) => {
  return http.patch('*/api/v1/users/:id', async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(overrideResponse ? overrideResponse : getUsersControllerUpdateResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  })
}

export const getUsersControllerRemoveMockHandler = (overrideResponse?: UserEntity) => {
  return http.delete('*/api/v1/users/:id', async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(overrideResponse ? overrideResponse : getUsersControllerRemoveResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  })
}
export const getUsersMock = () => [
  getUsersControllerCreateMockHandler(),
  getUsersControllerFindAllMockHandler(),
  getUsersControllerFindOneMockHandler(),
  getUsersControllerUpdateMockHandler(),
  getUsersControllerRemoveMockHandler(),
]
