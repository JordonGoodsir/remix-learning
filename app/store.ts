import { configureStore } from '@reduxjs/toolkit'
import form from "./stores/form"

export default configureStore({
    reducer: {
        formStore: form
    },
})