import { useContext } from 'react';
import { UserContext } from '../Contexts';

const useUser = () => useContext(UserContext);

export default useUser;
