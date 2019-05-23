import { useState, useCallback } from 'react';
import butter from './butter-client';

const useButter = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const callAPI = async (entity, method, ...options) => {
    if ( butter[entity] === undefined || butter[entity][method] === undefined ) {
      setError(`Unable to call method ${method} from entity ${entity}`);
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const response = await butter[entity][method](...options);
      setResponse(response);
    } catch (e) {
      setError(`${e.status}: ${e.statusText}`);
    }
    setLoading(false);  
  }

  return [{ response, loading, error }, useCallback(callAPI, [])];
}

export default useButter;
