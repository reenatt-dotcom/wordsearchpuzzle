import React from 'react';

function Result({ wordsFound, totalWords, onRestart }) {
  return (
    <div className="result">
      <h2>Word Search Puzzle Completed!</h2>
      <p>
        Congratulations! You found {wordsFound} out of {totalWords} words.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Result;
