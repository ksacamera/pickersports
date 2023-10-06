import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
}

export const userNameSlice = createSlice({
  name: 'userName',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    }
  },
})

export const { setName } = userNameSlice.actions

export default userNameSlice.reducer