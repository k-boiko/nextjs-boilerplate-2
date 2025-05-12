import Image from "next/image";
export function fetchWithCache(url) {
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
export function fetchWithoutCache(url) {
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
const apiUrl = 'https://nonexisting.shpp.me';

export default function Home() {
  return (
    <div>
        <button onClick={() => fetchWithCache(apiUrl).then(console.log)}>fetch with cache</button>
        <button onClick={() => fetchWithoutCache(apiUrl).then(console.log)}>fetch without cache</button>
    </div>
  );
}
