


import useSWR from 'swr'

const fetcher = (query) => fetch(`https://onchain.sv/api/v1/events?${query}`).then(res => res.json())

export default function(query) {

    const { data, error, loading, refresh } = useSWR(query, fetcher)

    return { data, error, loading, refresh }

}