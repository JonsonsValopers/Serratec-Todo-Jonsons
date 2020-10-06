import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect
  } from 'react';
  import AsyncStorage from '@react-native-community/async-storage';
  
  import api from '../services/api';
  
  
  const AuthContext = createContext({});
  
  const AuthProvider = ({ children }) => {
    const [data, setData] = useState({});
  
    useEffect(() => {
      async function loadData() {
        const user = await AsyncStorage.getItem('@JONSONS:user');
        console.log("AuthProvider user", user);
  
        if(user){
          setData(JSON.parse(user))
        }
      }
  
      loadData();
    }, []);

    const signIn = useCallback(
        async({ email, password }) => {
            
            try {
                const response = await api.get('usuarios');
                let loginAchado = response.find(user => user.email === email && user.password === password);
                if(!loginAchado) return;
                setData(loginAchado);
                await AsyncStorage.setItem('@JONSONS:user', JSON.stringify(loginAchado));
            } catch (error) {
                
            }
        }, [],
    )
  
    const signUp = useCallback(
        async ({ email, password }) => {

        try{
            await api.post(JSON.stringify({email, password}));
            await AsyncStorage.setItem('@JONSONS:user', JSON.stringify({ email, password }));
            setData({ email, password });

        }catch(error){
            console.log(error);
        }

    }, []);
  
    const signOut = useCallback(async () => {
      await AsyncStorage.removeItem('@JONSONS:user');
  
      setData({}); 
    }, []);
  
    return (
      <AuthContext.Provider
        value={{ data, signIn, signUp, signOut }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
  
  export { AuthProvider, useAuth };