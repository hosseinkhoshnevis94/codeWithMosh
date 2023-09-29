import {useContext} from 'react'
import userContext from './userContext'

const useAuth = () => useContext(userContext)


export default useAuth