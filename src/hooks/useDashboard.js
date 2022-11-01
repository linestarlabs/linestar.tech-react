
import useSWR from 'swr'

const fetcher = (path) => fetch(`https://linestar.tech${path}`).then(res => res.json())

export default function(dashboard) {

    const { data, error, loading, refresh } = useSWR(`/api/v1/dashboards/${dashboard}`, fetcher)

    return { data, error, loading, refresh }

}