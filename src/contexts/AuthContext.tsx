import { api } from "@/services/api";
import Router from "next/router";
import { setCookie } from 'nookies'
import {
  createContext,
  ReactNode,
  useState
} from "react";

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn (credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User
}

type AuthProviderProps = {
  children: ReactNode;
}

type User = {
  email: string,
  person: {
    id: string;
    name: string;
    cpf: string;
    birth_date: string;
  }
  roles: string[],
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user;

  async function signIn (
    { email, password }: SignInCredentials) {

    const response = await api.post('auth', {
      email,
      password
    })
    const { user: userResponse, token } = response.data

    setCookie(undefined, 'fake-atm.token', token, {
      maxAge: 60 * 60 * 24 * 30,//30 days
      path: '/'
    });

    setUser(userResponse)

    Router.push('/');

  }

  return (
    <AuthContext.Provider value={{
      signIn,
      isAuthenticated,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
