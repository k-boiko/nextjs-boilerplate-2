'use client';

import {useState} from 'react';

function fetchWithCache(url: string) {
        return fetch(url, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
          mode: 'no-cors',
            next: {
                revalidate: 3600
            }
        }).then(res => res.json());

}
function fetchWithoutCache(url: string) {
        return fetch(url, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
          mode: 'no-cors',
            next: {
                revalidate: 0
            }
        }).then(res => res.json());

}
const apiUrl = 'https://nonexisting.vesnasoft.org/test';

export default function Home() {
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [error, setError] = useState(null);
  return (
    <div>
      <p>state1: {JSON.stringify(state1)}</p>
      <p>state2: {JSON.stringify(state2)}</p>
      <p>error {JSON.stringify(error)}</p>
      <p>
        <button onClick={() => fetchWithCache(apiUrl).then((data) => setState1(data)).catch((e) => setError(e))}>fetch with cache</button>
        <button onClick={() => fetchWithoutCache(apiUrl).then((data) => setState2(data)).catch(e => setError(e))}>fetch without cache</button>
      </p>
    </div>
  );
}
