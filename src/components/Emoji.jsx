import React from "react";

function Emoji(param) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {param.emoji}
        </span>
        <span>{param.name}</span>
      </dt>
      <dd>{param.meaning}</dd>
    </div>
  );
}

export default Emoji;
