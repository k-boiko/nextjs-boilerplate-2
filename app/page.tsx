'use client';

import {useState} from 'react';
import {fetchWithCache, fetchWithoutCache} from './actions';
const apiUrl = 'https://nonexisting.vesnasoft.org/test';

export default function Home() {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [error, setError] = useState(null);
  return (
    <div>
      <p>state1: {JSON.stringify(state1)}</p>
      <p>state2: {JSON.stringify(state2)}</p>
      <p>error {JSON.stringify(error)}</p>
      <p>
        <button onClick={() => {
          setIsLoading1(true);
          fetchWithCache(apiUrl).then((data) => {
            setState1(data);
            setIsLoading1(false);
        }).catch((e) => {
          setIsLoading1(false);
          setError(e);
        })
        }}>fetch with cache {isLoading1 && '...Loading...'}</button> <br />
        <button onClick={() => {
          setIsLoading2(true);
          fetchWithoutCache(apiUrl).then((data) => {
            setIsLoading2(false);
            setState2(data);
        }).catch(e => {
          setIsLoading2(false);
          setError(e);
          setError(e);
        })
        }}>fetch without cache {isLoading2 && '...loading...'}</button>
      </p>
    </div>
  );
}
