import { createSlice } from '@reduxjs/toolkit'

interface IDetalhesLink {
  idLink: string
}


const initialState: IDetalhesLink = {
  idLink: '',

}

const detalhesLinkSlice = createSlice({
  name: 'detalhesLink',
  initialState,
  reducers: {
    resetDetalhesLink: () => initialState
  }
})

export const {
  resetDetalhesLink,
} = detalhesLinkSlice.actions

export default detalhesLinkSlice.reducer
