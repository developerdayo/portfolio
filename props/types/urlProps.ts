import { EMAIL_LITERAL_TYPE } from '@constants/index'

declare const _brand: unique symbol

type Brand<T, TBrand> = T & { [_brand]: TBrand }

// trick to get typescript to behave as a nominal
// usage: cast values as one of the following types
// i.e see constants/index.ts & components/Menu.tsx

export type AbsolutePath = Brand<string, 'AbsolutePath'>
export type RelativePath = Brand<string, 'RelativePath'>
export type IncompleteAbsolutePath = Brand<string, 'IncompleteAbsolutePath'>

export type EmailPath = Brand<typeof EMAIL_LITERAL_TYPE, 'EmailPath'>