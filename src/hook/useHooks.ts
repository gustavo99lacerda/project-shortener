import { useTranslation } from 'react-i18next'
import { useMediaQuery, useTheme } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/store'

export function useHooks() {
  const theme = useTheme()
  const { t } = useTranslation()
  const useApplocal = useLocation()
  const useAppDispatch = useDispatch()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const useAppHistory = useHistory()

  return {
    selectState: useSelector((state: RootState) => state),
    translation: t,
    dispatch: useAppDispatch,
    mediaQuery: matches.toString(),
    history: useAppHistory,
    local: useApplocal,
  }
}
