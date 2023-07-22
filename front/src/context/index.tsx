import { useState, useEffect, createContext, ReactNode, SetStateAction, Dispatch } from "react";
import { useCookieState } from "hooks/useLocalStorage";
import { useRouter } from 'next/router';
import axios from 'axios';

export interface State {
  user: any;
  token: string;
}

interface ILAYERS {
  Block: number;
  NodeID: number;
  SyncTime: number;
}

interface ISystem {
  nodeID: number;
  Cpu: number[];
  Memory: number[];
  Storage: number[];
  Temp: number[];
}

interface INetwork {
  LocalIp: string;
  NodeID: number;
  Port: number;
  Storage: number;
}
interface ISingleNode {
  Client: string;
  ID: number;
  ProviderId: string;
  RPC: string;
  Version: number;
  Name: string;
}

export interface ResponseNode {
  L1: ILAYERS;
  L2: ILAYERS;
  Node: ISingleNode;
  System: ISystem;
  Network: INetwork;
}

export interface INode {
  ID: number;
  ProviderId: string;
  RPC: string;
}

interface UserContextProps {
  setData: (value: any) => void;
  data: any;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useCookieState('', "");

  return (
    <UserContext.Provider value={{
      setData,
      data,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };