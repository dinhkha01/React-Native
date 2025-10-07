import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import CardItem from './CardItem';
import EmptyState from './EmptyState';
import Footer from './Footer';
import Header from './Header';
interface Employee {
    id: string;
    name: string;
}

export default function BtFlatList() {
    const [employees, setEmployees] = useState<Employee[]>([
        {id: '1', name: 'John Doe'},
        {id: '2', name: 'Jane Smith'},
        {id: '3', name: 'Alice Johnson'},
        {id: '4', name: 'Bob Brown'},

    ])
    const [isRefeshing,setIsRefreshing] = useState(false);
    const [isLoadingMore,setIsLoadingMore] = useState(false);


    const handleRefresh=()=>{
        setIsRefreshing(true);
        // Giả lập tải dữ liệu mới
        setTimeout(()=>{
            // Đảo danh sách nhân viên
            setEmployees(prevEmployees => [...prevEmployees].reverse());
            setIsRefreshing(false);
        },1000)

    }
    const handleLoadMore=()=>{
        if(isLoadingMore) return; // Đang tải thì không làm gì
        setIsLoadingMore(true);
        // Giả lập tải thêm dữ liệu
        setTimeout(()=>{
            const newEmployees = [
                {id: (employees.length + 1).toString(), name: 'New Employee ' + (employees.length + 1)},
                {id: (employees.length + 2).toString(), name: 'New Employee ' + (employees.length + 2)},
            ];
            setEmployees(prevEmployees => [...prevEmployees, ...newEmployees]);
            setIsLoadingMore(false);
        },1500)
    }

  return (
    <View>
       
        <FlatList
            data={employees}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CardItem nameEmployee={item.name} />}
            ListEmptyComponent={<EmptyState/>}
            ListHeaderComponent={Header}
           
            onRefresh={handleRefresh}
            refreshing={isRefeshing}


            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={isLoadingMore? Footer: null}

        />
    </View>
  )
}
