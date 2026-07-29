import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export type WithoutChild<T> = T extends {child?: unknown} ? Omit<T, 'child'> : T
export type WithoutChildren<T> = T extends {children?: unknown} ? Omit<T, 'children'> : T
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
	ref?: U | null
}
