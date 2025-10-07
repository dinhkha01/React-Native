import React, { useCallback, useMemo, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type Currency = 'VND' | 'USD'

type CurrencyInputProps = {
  label: Currency
  value: string
  onChangeValue: (text: string) => void
}

function CurrencyInput({ label, value, onChangeValue }: CurrencyInputProps) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder={`Nhập ${label}`}
        placeholderTextColor={'#9CA3AF'}
        value={value}
        onChangeText={onChangeValue}
      />
    </View>
  )
}

export default function Bt5() {
  const RATE = 25000

  const [vnd, setVnd] = useState('')
  const [usd, setUsd] = useState('')

  const onChangeVnd = useCallback((text: string) => {
    const numeric = text.replace(/[^0-9.]/g, '')
    setVnd(numeric)
    if (numeric === '' || isNaN(Number(numeric))) {
      setUsd('')
      return
    }
    const usdVal = Number(numeric) / RATE
    setUsd(formatNumber(usdVal))
  }, [])

  const onChangeUsd = useCallback((text: string) => {
    const numeric = text.replace(/[^0-9.]/g, '')
    setUsd(numeric)
    if (numeric === '' || isNaN(Number(numeric))) {
      setVnd('')
      return
    }
    const vndVal = Number(numeric) * RATE
    setVnd(Math.round(vndVal).toString())
  }, [])

  const rateText = useMemo(() => `1 USD = ${RATE.toLocaleString('vi-VN')} VND`, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chuyển đổi tiền tệ</Text>
      <Text style={styles.rate}>{rateText}</Text>

      <CurrencyInput label='VND' value={vnd} onChangeValue={onChangeVnd} />
      <CurrencyInput label='USD' value={usd} onChangeValue={onChangeUsd} />
    </View>
  )
}

function formatNumber(value: number): string {
  const fixed = value.toFixed(2)
  // Remove trailing zeros and decimal if unnecessary
  return fixed.replace(/\.00$/, '').replace(/(\.\d*[1-9])0+$/, '$1')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FBFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#0F172A',
  },
  rate: {
    textAlign: 'center',
    color: '#6B7280',
    marginTop: 6,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#111827',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
  },
})

