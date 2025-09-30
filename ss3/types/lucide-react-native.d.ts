declare module 'lucide-react-native' {
  import { ComponentType } from 'react'
    import { ColorValue } from 'react-native'

  export interface IconProps {
    size?: number
    color?: ColorValue | string
    strokeWidth?: number
  }

  export const Heart: ComponentType<IconProps>
  export const MessageCircle: ComponentType<IconProps>
  export const Send: ComponentType<IconProps>
  export const Sun: ComponentType<IconProps>
  export const Waves: ComponentType<IconProps>
  export default any
}


