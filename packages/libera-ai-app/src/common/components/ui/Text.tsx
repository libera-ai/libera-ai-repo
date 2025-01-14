import { Text as DefaultText } from 'react-native'

import { cn } from '@common/utils/theme.utils'

export type TextProps = {
  clsName?: string
  /**
   * @deprecated Please use clsName instead
   */
  className?: string
} & DefaultText['props']

export function Text(props: TextProps) {
  const weights = {
    'font-thin': 'Raleway100Thin',
    'font-light': 'Raleway300Light',
    'font-normal': 'Raleway400Regular',
    'font-medium': 'Raleway500Medium',
    'font-semibold': 'Raleway600SemiBold',
    'font-bold': 'Raleway700Bold',
    'font-extrabold': 'Raleway800ExtraBold',
  }

  const className = cn('font-normal font-gray-2 font-base', props?.clsName)

  const weight =
    className.split(' ').find((name) => Object.keys(weights).includes(name)) ??
    'font-normal'
  const fontFamily =
    weights?.[weight as unknown as keyof typeof weights] ?? 'Raleway400Regular'

  return <DefaultText {...props} className={className} style={{ fontFamily }} />
}
