import { useState } from "react";

function MainContent(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderedWithNewEmojiValue] =
    useState("happy");
  const [emojiValueFromPreviousRender, queueRerenderedWithPreviousEmojiValue] =
    useState("");

  const happyEmoji = () => {
    const nextEmoji = "happy";
    const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue(prevEmoji);
  };
  const fineEmoji = () => {
    const nextEmoji = "fine";
    const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue(prevEmoji);
  };
  const sillyEmoji = () => {
    const nextEmoji = "silly";
    const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue(prevEmoji);
  };
  const sickEmoji = () => {
    const nextEmoji = "sick";
    const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue(prevEmoji);
  };
  const sleepyEmoji = () => {
    const nextEmoji = "sleepy";
    const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue(prevEmoji);
  };
  const confusedEmoji = () => {
    const nextEmoji = "confused";
    const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue(prevEmoji);
  };
  const excitedEmoji = () => {
    const nextEmoji = "excited";
    const prevEmoji = emojiValueFromCurrentRender;
    queueRerenderedWithNewEmojiValue(nextEmoji);
    queueRerenderedWithPreviousEmojiValue(prevEmoji);
  };
  return (
    <>
      <h2> Emoji Picker</h2>
      <p>Your Previous Emoji: {emojiValueFromPreviousRender} </p>
      <p>Your Current Emoji: {emojiValueFromCurrentRender}</p>
      <button onClick={happyEmoji}>😃</button>
      <button onClick={fineEmoji}>🙃</button>
      <button onClick={sillyEmoji}>😝</button>
      <button onClick={sickEmoji}>🤮</button>
      <button onClick={sleepyEmoji}>😴</button>
      <button onClick={confusedEmoji}>😵</button>
      <button onClick={excitedEmoji}>🤯</button>
    </>
  );
}

export default MainContent;
