'use server';

export  async function fetchWithCache(url: string) {
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
export async function fetchWithoutCache(url: string) {
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