import React, { useEffect, useMemo, useState } from 'react'
import { Dimensions, FlatList, Image, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'

type Product = {
  id: string
  name: string
  price: string
  image: string
}

const SAMPLE_PRODUCTS: Product[] = Array.from({ length: 12 }).map((_, idx) => ({
  id: String(idx + 1),
  name: `Sản phẩm ${idx + 1}`,
  price: `${(idx + 1) * 10}.000đ`,
  image: `https://picsum.photos/seed/p${idx + 1}/300/300`,
}))

function computeNumColumns(windowWidth: number): number {
  if (windowWidth >= 900) return 4 // Tablet large
  if (windowWidth >= 600) return 3 // Landscape phone / small tablet
  return 2 // Portrait phone
}

export default function ProductsGrid() {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width)

  useEffect(() => {
    const sub = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width)
    })
    return () => {
      // @ts-expect-error RN new API returns subscription with remove
      sub?.remove?.()
    }
  }, [])

  const numColumns = useMemo(() => computeNumColumns(windowWidth), [windowWidth])

  const { cardWidth, cardHeight, titleFontSize, priceFontSize, imageSize } = useMemo(() => {
    const spacing = 16
    const containerPadding = 16
    const totalSpacing = containerPadding * 2 + spacing * (numColumns - 1)
    const widthAvailable = windowWidth - totalSpacing
    const cardWidthLocal = Math.floor(widthAvailable / numColumns)
    const cardHeightLocal = Math.floor(cardWidthLocal * 1.25)
    return {
      cardWidth: cardWidthLocal,
      cardHeight: cardHeightLocal,
      titleFontSize: Math.max(12, Math.min(16, Math.floor(cardWidthLocal / 10))),
      priceFontSize: Math.max(12, Math.min(15, Math.floor(cardWidthLocal / 12))),
      imageSize: Math.floor(cardWidthLocal - 16),
    }
  }, [numColumns, windowWidth])

  const renderItem = ({ item }: ListRenderItemInfo<Product>) => (
    <View style={[styles.card, { width: cardWidth, height: cardHeight }] }>
      <Image source={{ uri: item.image }} style={[styles.image, { width: imageSize, height: imageSize }]} />
      <Text numberOfLines={1} style={[styles.title, { fontSize: titleFontSize }]}>{item.name}</Text>
      <Text style={[styles.price, { fontSize: priceFontSize }]}>{item.price}</Text>
    </View>
  )

  return (
    <FlatList
      data={SAMPLE_PRODUCTS}
      key={numColumns}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={numColumns > 1 ? styles.row : undefined}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
    gap: 16,
  },
  row: {
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    // shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    // elevation Android
    elevation: 2,
  },
  image: {
    borderRadius: 8,
    marginBottom: 6,
    resizeMode: 'cover',
  },
  title: {
    color: '#111827',
    fontWeight: '600',
  },
  price: {
    color: '#2563EB',
    fontWeight: '700',
    marginTop: 2,
  },
})


