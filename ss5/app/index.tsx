import BusinessCard from '@/components/BusinessCard';
import Counter from '@/components/Counter';
import LikeButton from '@/components/LikeButton';
import LoginForm from '@/components/LoginForm';
import TodoList from '@/components/TodoList';
import React from 'react';
import { View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        {/* <BusinessCard
        img='https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/556414405_1086374970372556_9139373183855608710_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=nBm_clT7YpIQ7kNvwEX3yVM&_nc_oc=AdlCMpWlHInmGpFEyUTPaXWQmJIoKbOKGHSoIucKwWEMQxue-LMLBWHeN_UV-JsdQdOxWHHdSZrMcvB6rvzWcorL&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=qTKLvWtzFcmPh9R4OakHuA&oh=00_AfYGKAlEkfDRhZk3zUWwZV7O-_X_DwJAvXgzXi4pWnfPKA&oe=68E2ABCB'
        nameUser='abc'
        sdt='123'
        job='hahaaha'
        />
            <BusinessCard
        img='https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/556414405_1086374970372556_9139373183855608710_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=nBm_clT7YpIQ7kNvwEX3yVM&_nc_oc=AdlCMpWlHInmGpFEyUTPaXWQmJIoKbOKGHSoIucKwWEMQxue-LMLBWHeN_UV-JsdQdOxWHHdSZrMcvB6rvzWcorL&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=qTKLvWtzFcmPh9R4OakHuA&oh=00_AfYGKAlEkfDRhZk3zUWwZV7O-_X_DwJAvXgzXi4pWnfPKA&oe=68E2ABCB'
        nameUser='bcs'
        sdt='1234'
        job='hahaahaaaaa'
        />

        <Counter/>  
        <LikeButton/>
        <LoginForm/> */}
        <TodoList/>
    </View>
  );
};

export default YourApp;