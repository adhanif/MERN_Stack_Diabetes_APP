import React, { useEffect, useState } from 'react';

function ReadedArticels() {
  const [articles, setArticles] = useState([]);
  const amountArticlesWanted = 2;

  useEffect(() => {}, []);

  return (
    <div>
      <h4 className='text-lg font-bold mb-2'>Most Readed Articles</h4>
      <p>Article One</p>
      <p>Article Two</p>
    </div>
  );
}

export default ReadedArticels;
