import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function emoji(emo) {
  return (
    <Emoji
      key={emo.id}
      emoji={emo.emoji}
      name={emo.name}
      meaning={emo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      {" "}
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emoji)}</dl>
    </div>
  );
  // <div>

  //   <dl className="dictionary">
  //     <Emoji emoji = {emojipedia[0].emoji}/>
  //     <div className="term">
  //       <dt>
  //         <span className="emoji" role="img" aria-label="Tense Biceps">
  //           🙏
  //         </span>
  //         <span>Person With Folded Hands</span>
  //       </dt>
  //       <dd>
  //         Two hands pressed together. Is currently very introverted, saying a
  //         prayer, or hoping for enlightenment. Is also used as a “high five”
  //         or to say thank you.
  //       </dd>
  //     </div>
  //     <div className="term">
  //       <dt>
  //         <span className="emoji" role="img" aria-label="Tense Biceps">
  //           🤣
  //         </span>
  //         <span>Rolling On The Floor, Laughing</span>
  //       </dt>
  //       <dd>
  //         This is funny! A smiley face, rolling on the floor, laughing. The
  //         face is laughing boundlessly. The emoji version of “rofl“. Stands
  //         for „rolling on the floor, laughing“.
  //       </dd>
  //     </div>
  //   </dl>
  // </div>
}

export default App;
