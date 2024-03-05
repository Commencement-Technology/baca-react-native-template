/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Generated by orval 🍺
 * Do not edit manually.
 * API
 * API documentation for the starter-kit project in NestJS by BinarApps. The API allows management of users, sessions and offers various functions for logged in users. Contains examples of authentication, authorization, and CRUD for selected resources.
 * OpenAPI spec version: 1.0
 */
import type { UserEntity } from './userEntity'

export interface AuthEntity {
  /** The access token for authentication. */
  accessToken: string
  /** The refresh token for refreshing the access token. */
  refreshToken: string
  /** The expiry timestamp of the access token. */
  tokenExpires: string
  /** The user entity associated with the authentication. */
  user: UserEntity
}
