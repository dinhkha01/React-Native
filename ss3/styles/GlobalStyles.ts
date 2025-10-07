export const COLORS = {
  primary: '#0EA5E9',
  secondary: '#6366F1',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#111827',
  mutedText: '#6B7280',
  border: '#E5E7EB',
  error: '#EF4444',
} as const

export const FONT_SIZES = {
  small: 12,
  medium: 14,
  large: 16,
  title: 18,
} as const

export const SPACING = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
} as const

export const CONTAINER_STYLES = {
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    padding: SPACING.md,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
  },
}

export type GlobalColors = typeof COLORS
export type GlobalFontSizes = typeof FONT_SIZES
export type GlobalSpacing = typeof SPACING

