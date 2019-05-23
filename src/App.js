import React, { useState, useEffect } from 'react';
import useButter from './useButter';
import './App.css';

function App() {
  const [pageSize, setPageSize] = useState(1);
  const [{ response, loading, error }, callAPI] = useButter();

  useEffect(() => {
    callAPI('post', 'list', { page: 1, page_size: pageSize });
  }, [callAPI, pageSize]);

  return (
    <div className="container">
      <h1>useButter Example</h1>
      {loading && <div>Loading from API...</div>}
      {error && <div>There was an error: {error}</div>}
      {response && !error && !loading && <div>
        <h2>Posts List</h2>
        <ul>
          {response.data.data.map((post, i) => (
            <li key={i}>{post.title}</li>
          ))}
        </ul>
        <div>
          <label>Page Size</label>
          <br />
          <input
            autoFocus
            value={pageSize} 
            onChange={e => setPageSize(e.target.value)} 
            type="number"
          />
        </div>
      </div>}
    </div>
  );
}

export default App;
