import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Bill } from '@/app/Bill';

interface BillItemProps {
  bill: Bill;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function BillItem({ bill, onToggleStatus, onDelete }: BillItemProps) {
  const isPaid = bill.status === 'Đã thanh toán';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.name}>{bill.name}</Text>
          <Text style={styles.amount}>
            {bill.amount.toLocaleString('vi-VN')} VND
          </Text>
          <Text style={[styles.status, isPaid ? styles.paid : styles.unpaid]}>
            {bill.status}
          </Text>
        </View>

        <View style={styles.actions}>
          <Switch
            value={isPaid}
            onValueChange={() => onToggleStatus(bill.id)}
            trackColor={{ false: '#ccc', true: '#4CAF50' }}
            thumbColor={isPaid ? '#fff' : '#f4f3f4'}
          />
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(bill.id)}
          >
            <AntDesign name="delete" size={24} color="#ff6b6b" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  amount: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
  },
  paid: {
    color: '#4CAF50',
  },
  unpaid: {
    color: '#ff6b6b',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  deleteButton: {
    padding: 4,
  },
});