import { createSlice } from "@reduxjs/toolkit";

export interface Profile {

}

export interface Auth {
    isAuthenticated: boolean;
}


interface UserSlice {
    profile: Profile;
    auth: Auth;
}

const initialState: UserSlice = ({
    profile: ({}),
    auth: ({
        isAuthenticated: false,
    })
});

export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: ({

    })
});


export const {} = userSlice.actions;
