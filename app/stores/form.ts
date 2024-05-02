import { createSlice } from '@reduxjs/toolkit'

export const form = createSlice({
    name: 'form',
    initialState: {
        form: {
            name: '',
            email: '',
            mobileNumber: '',
            plan: '',
            yearly: false,
            addOns: [],
        }
    },
    reducers: {
        setForm: (state, updatedForm) => {
            state.form = { ...form, ...updatedForm.payload }

        },
    },
})

// Action creators are generated for each case reducer function
export const { setForm } = form.actions

export default form.reducer