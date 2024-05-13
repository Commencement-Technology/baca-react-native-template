/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Generated by orval 🍺
 * Do not edit manually.
 * API
 * API documentation for the starter-kit project in NestJS by BinarApps. The API allows management of users, sessions and offers various functions for logged in users. Contains examples of authentication, authorization, and CRUD for selected resources.
 * OpenAPI spec version: 1.0
 */
import { useMutation, useQuery } from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { customInstance } from '../../axios/custom-instance'
import type { ErrorType, BodyType } from '../../axios/custom-instance'
import type { FileEntity, FilesControllerUploadFileBody } from '../../types'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Uploads a file with a specified category.
 * @summary Upload File
 */
export const filesControllerUploadFile = (
  filesControllerUploadFileBody: BodyType<FilesControllerUploadFileBody>,
  options?: SecondParameter<typeof customInstance>
) => {
  const formData = new FormData()
  if (filesControllerUploadFileBody.file !== undefined) {
    formData.append('file', filesControllerUploadFileBody.file)
  }
  if (filesControllerUploadFileBody.category !== undefined) {
    formData.append('category', filesControllerUploadFileBody.category)
  }

  return customInstance<FileEntity>(
    {
      url: `/api/v1/files/upload`,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    },
    options
  )
}

export const getFilesControllerUploadFileMutationOptions = <
  TError = ErrorType<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof filesControllerUploadFile>>,
    TError,
    { data: BodyType<FilesControllerUploadFileBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof filesControllerUploadFile>>,
  TError,
  { data: BodyType<FilesControllerUploadFileBody> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof filesControllerUploadFile>>,
    { data: BodyType<FilesControllerUploadFileBody> }
  > = (props) => {
    const { data } = props ?? {}

    return filesControllerUploadFile(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type FilesControllerUploadFileMutationResult = NonNullable<
  Awaited<ReturnType<typeof filesControllerUploadFile>>
>
export type FilesControllerUploadFileMutationBody = BodyType<FilesControllerUploadFileBody>
export type FilesControllerUploadFileMutationError = ErrorType<void>

/**
 * @summary Upload File
 */
export const useFilesControllerUploadFile = <
  TError = ErrorType<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof filesControllerUploadFile>>,
    TError,
    { data: BodyType<FilesControllerUploadFileBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const mutationOptions = getFilesControllerUploadFileMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Downloads the specified file.
 * @summary Download File
 */
export const filesControllerDownload = (
  fileName: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<unknown>(
    { url: `/api/v1/files/${fileName}`, method: 'GET', signal },
    options
  )
}

export const getFilesControllerDownloadQueryKey = (fileName: string) => {
  return [`/api/v1/files/${fileName}`] as const
}

export const getFilesControllerDownloadQueryOptions = <
  TData = Awaited<ReturnType<typeof filesControllerDownload>>,
  TError = ErrorType<void>
>(
  fileName: string,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof filesControllerDownload>>, TError, TData>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFilesControllerDownloadQueryKey(fileName)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof filesControllerDownload>>> = ({
    signal,
  }) => filesControllerDownload(fileName, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!fileName, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof filesControllerDownload>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type FilesControllerDownloadQueryResult = NonNullable<
  Awaited<ReturnType<typeof filesControllerDownload>>
>
export type FilesControllerDownloadQueryError = ErrorType<void>

/**
 * @summary Download File
 */
export const useFilesControllerDownload = <
  TData = Awaited<ReturnType<typeof filesControllerDownload>>,
  TError = ErrorType<void>
>(
  fileName: string,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof filesControllerDownload>>, TError, TData>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getFilesControllerDownloadQueryOptions(fileName, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Deletes the specified file.
 * @summary Delete File
 */
export const filesControllerDeleteFile = (
  fileName: string,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<unknown>({ url: `/api/v1/files/${fileName}`, method: 'DELETE' }, options)
}

export const getFilesControllerDeleteFileMutationOptions = <
  TError = ErrorType<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof filesControllerDeleteFile>>,
    TError,
    { fileName: string },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof filesControllerDeleteFile>>,
  TError,
  { fileName: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof filesControllerDeleteFile>>,
    { fileName: string }
  > = (props) => {
    const { fileName } = props ?? {}

    return filesControllerDeleteFile(fileName, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type FilesControllerDeleteFileMutationResult = NonNullable<
  Awaited<ReturnType<typeof filesControllerDeleteFile>>
>

export type FilesControllerDeleteFileMutationError = ErrorType<void>

/**
 * @summary Delete File
 */
export const useFilesControllerDeleteFile = <
  TError = ErrorType<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof filesControllerDeleteFile>>,
    TError,
    { fileName: string },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const mutationOptions = getFilesControllerDeleteFileMutationOptions(options)

  return useMutation(mutationOptions)
}
