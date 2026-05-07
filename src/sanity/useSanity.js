import { useState, useEffect } from 'react';
import { client } from './client';

export function useSanity(query, fallback) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(!!client);

  useEffect(() => {
    if (!client) return;

    let cancelled = false;

    client.fetch(query)
      .then((result) => {
        if (cancelled) return;
        const isEmpty = !result || (Array.isArray(result) && result.length === 0);
        setData(isEmpty ? fallback : result);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { data, loading };
}
