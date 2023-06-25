import React from 'react';

function WordList({ words, wordsFound }) {
  return (
    <div className="word-list">
      <h2>Word List</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index} className={wordsFound.includes(word) ? 'found' : ''}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;
