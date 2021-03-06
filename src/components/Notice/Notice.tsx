import { HTMLProps, forwardRef, LegacyRef } from 'react'
import cn from 'classnames'

type Props = HTMLProps<HTMLAnchorElement>

export const Notice = forwardRef<unknown, Props>(
  ({ children, className, ...restProps }, ref) => (
    <a
      ref={ref as LegacyRef<HTMLAnchorElement>}
      className={cn(
        'block cursor-pointer text-center bg-purple-50 border border-purple-200 p-4 mb-2 rounded shadow-sm hover:shadow transition duration-300',
        className
      )}
      {...restProps}
    >
      {children}
    </a>
  )
)
