

import useSWR from 'swr'

const fetcher = (path) => fetch(`https://linestar.tech/api${path}`).then(res => res.json())

export default function(path) {

    const { data, error, loading, refresh } = useSWR(path, fetcher)

    return { data, error, loading, refresh }

}