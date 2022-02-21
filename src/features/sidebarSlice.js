import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:{
        sideBar:false,
    },
    reducers: {
        changeSidebar: (state)=>{
          state.sideBar = !state.sideBar
          console.log(state.sideBar.value)
        },
    }
})

export const {changeSidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer