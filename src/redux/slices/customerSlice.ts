import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    customerName:"",
    customerPhone:"",
    personCount: 1,
    tableNo: "",

}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:{
        setCustomerName: (state, action) => {
            state.customerName = action.payload;
        },
        setCustomerPhone: (state, action) => {
            state.customerPhone = action.payload;
        },
        setPersonCount: (state, action) => {
            state.personCount = action.payload;
        },
        setTableNo: (state, action) => {
            state.tableNo = action.payload;
        },
        resetCustomer: (state) => {
            state.customerName = "";
            state.customerPhone = "";
            state.personCount = 1;
            state.tableNo = "";
        },
        updateTable : (state, action) => {
            state.tableNo = action.payload.tableNo;
            
        }
    }
})

export const {
    setCustomerName,
    setCustomerPhone,
    setPersonCount,
    setTableNo,
    resetCustomer,
    updateTable
} = customerSlice.actions;
export default customerSlice.reducer;