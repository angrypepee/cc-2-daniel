"use client"

import { useEffect, useState } from 'react';

const FetchUserData = () => {
  const [userData, setUserData] = useState<any[]>([]);  // Initialize as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/getUserData');
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setUserData(data.results.slice(0, 5));  // Get the first 3 users
      } catch (err) {
        if (err instanceof Error) {
          console.error("Fetch error:", err);
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
      <h6 className="text-black text-base font-bold"></h6>
      {userData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {userData.map((user, index) => (
            <div key={index} className=" p-6 rounded-md">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}'s profile`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-center mb-2">
                {user.name.title} {user.name.first} {user.name.last}
              </h2>
              
            </div>
          ))}
        </div>
      ) : (
        <p>No user data available</p>
      )}

    </div>
  );
};

export default FetchUserData;
