"use client"

import { useEffect, useState } from 'react';

const FetchUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);  // Ensure error is a string

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/getUserData');
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Fetch error:", err);  // Log the error to the console
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Data</h1>
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default FetchUserData;
