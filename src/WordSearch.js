import React, { useState, useEffect } from 'react';

const WordSearch = () => {
  const words = ['BETA', 'ALPHA', 'GAMMA', 'DELTA', 'EPSILON', 'THETA', 'MU'];
  const grid = [
    ['L', 'R', 'T', 'U', 'G', 'E', 'Q', 'E', 'N'],
    ['U', 'L', 'R', 'R', 'M', 'O', 'H', 'A', 'A'],
    ['N', 'S', 'T', 'A', 'L', 'P', 'H', 'A', 'K'],
    ['B', 'E', 'T', 'A', 'B', 'P', 'M', 'L', 'M'],
    ['M', 'I', 'A', 'G', 'A', 'M', 'M', 'A', 'I'],
    ['A', 'D', 'E', 'L', 'T', 'A', 'R', 'E', 'U'],
    ['O', 'E', 'E', 'L', 'E', 'P', 'S', 'I', 'L'],
    ['A', 'T', 'H', 'E', 'T', 'A', 'S', 'A', 'C'],
    ['E', 'P', 'S', 'I', 'L', 'O', 'N', 'B', 'I'],
    ['N', 'G', 'T', 'H', 'E', 'T', 'A', 'R', 'R']
  ];

  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const uniqueWords = [...new Set(selectedWords)];

  const handleLetterClick = (letter) => {
    setSelectedLetters([...selectedLetters, letter]);
  };

  const checkForWordMatch = () => {
    const selectedWord = selectedLetters.join('');
    if (words.includes(selectedWord) && !uniqueWords.includes(selectedWord)) {
      setSelectedWords([...selectedWords, selectedWord]);
      setSelectedLetters([]);
    } else {
      setSelectedLetters([]);
    }
  };

  useEffect(() => {
    if (uniqueWords.length === 8) {
      // All 8 unique words found, display "You Won!" message
      alert('You Won!');
    }
  }, [uniqueWords]);

  return (
    <div className="word-search">
      <h2>Word Search Puzzle</h2>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((letter, colIndex) => (
              <button
                key={colIndex}
                className="letter-button"
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="selected-letters">
        <h3>Selected Letters:</h3>
        <p>{selectedLetters.join('')}</p>
        <button className="check-word-button" onClick={checkForWordMatch}>
          Check Word
        </button>
      </div>
      <div className="word-list">
        <h3>Words to Find:</h3>
        <p>{words.join(', ')}</p>
      </div>
      <div className="found-words">
        <h3>Found Words:</h3>
        <p>{uniqueWords.join(', ')}</p>
      </div>
    </div>
  );
};

export default WordSearch;
