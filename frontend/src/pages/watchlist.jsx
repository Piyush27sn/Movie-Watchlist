import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

axios.defaults.withCredentials = true;    // ensure cookies are sent

export const Watchlist = () => {
  const [ watchlist, setWatchlist] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const res = await axios.get("http://localhost:5001/watchlist");
        setWatchlist(res.data.data);
      } catch (err) {
        console.error("Error fetching watchlist: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWatchlist();
  }, []);

  if (loading) return <p> Loading watchlist ... </p>
  return (
    <div>
      <h2> Your Watchlist </h2>
      {watchlist.length === 0 ? (
        <p> No movies found in your watchlist. </p>
      ) : (
        <ul>
          {watchlist.map(item => (
            <li key={item._id}>
              <strong> {item.movieId ? item.movieId.title : "Unknown Movie"} </strong>
              <br/>
              Status: {item.status}
              <br/>
              Rating: {item.rating || "N/A"}
              <br/>
              Notes: {item.notes || "None"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
