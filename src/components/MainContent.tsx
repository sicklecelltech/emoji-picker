import { useState } from "react";

function MainContent(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderedWithNewEmojiValue] =
    useState("happy");
  const [emojiValueFromPreviousRender, queueRerenderedWithPreviousEmojiValue] =
    useState<string[]>(["happy"]);

  const happyEmoji = () => {
    const nextEmoji = "happy";
    //const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue([
      ...emojiValueFromPreviousRender,
      emojiValueFromCurrentRender,
    ]);
  };
  const fineEmoji = () => {
    const nextEmoji = "fine";
    //const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue([
      ...emojiValueFromPreviousRender,
      emojiValueFromCurrentRender,
    ]);
  };
  const sillyEmoji = () => {
    const nextEmoji = "silly";
    // const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue([
      ...emojiValueFromPreviousRender,
      emojiValueFromCurrentRender,
    ]);
  };
  const sickEmoji = () => {
    const nextEmoji = "sick";
    //const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue([
      ...emojiValueFromPreviousRender,
      emojiValueFromCurrentRender,
    ]);
  };
  const sleepyEmoji = () => {
    const nextEmoji = "sleepy";
    // const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue([
      ...emojiValueFromPreviousRender,
      emojiValueFromCurrentRender,
    ]);
  };
  const confusedEmoji = () => {
    const nextEmoji = "confused";
    //const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue([
      ...emojiValueFromPreviousRender,
      emojiValueFromCurrentRender,
    ]);
  };
  const excitedEmoji = () => {
    const nextEmoji = "excited";
    //const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue([
      ...emojiValueFromPreviousRender,
      emojiValueFromCurrentRender,
    ]);
  };
  return (
    <>
      <h2> Emoji Picker</h2>
      <p>Your Previous Emoji: {emojiValueFromPreviousRender.join(" ,")} </p>
      <p>Your Current Emoji: {emojiValueFromCurrentRender}</p>
      <button onClick={happyEmoji}>😃</button>
      <button onClick={fineEmoji}>🙃</button>
      <button onClick={sillyEmoji}>😝</button>
      <button onClick={sickEmoji}>🤮</button>
      <button onClick={sleepyEmoji}>😴</button>
      <button onClick={confusedEmoji}>😵</button>
      <button onClick={excitedEmoji}>🤯</button>
      <p>{emojiValueFromPreviousRender.map(makeList)}</p>
    </>
  );
}

function makeList(str:string){
  return (
    <>
     <ul>
      <li>{str} </li>
    </ul>
    </>
  )
}

export default MainContent;
