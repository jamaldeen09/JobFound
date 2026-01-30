import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { userSlice } from "./slices/user-slice";

// Store
export const store = configureStore({

    // Store's reducer
    reducer: ({
        user: userSlice.reducer,
    }),

    // middleware(getDefaultMiddleware) {
        
    // },
});

// AppDispatch and RootState types that aids in typing
// useDispatch and useSelector
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// UseDispatch (but typed) - so now called useAppDispatch()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

// UseSelector (but typed) - so now called useAppSelector()
export const useAppSelector = useSelector.withTypes<RootState>()



