import React, { useState, useEffect } from "react";

export default function Jazz() {
  const keyToMusic = {
    A: "/the-best-jazz-club-in-new-orleans-164472.mp3",
    B: "/nhac-jazz-thu-gian-265063.mp3",
    C: "/cheerful-gypsy-jazz-248905.mp3",
    D: "/jazz-lounge-138115.mp3",
    E: "/ogi-feel-the-beat-jazz-expresso-191266.mp3",
    F: "/piano-jazz-music-203494.mp3",
  };

  const [activeKey, setActiveKey] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  const playMusic = (key) => {
    if (keyToMusic[key]) {
      // Stop the currently playing audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset audio to the beginning
      }

      // Play the new audio
      const audio = new Audio(keyToMusic[key]);
      audio.play();

      // Update the state
      setCurrentAudio(audio);
      setActiveKey(key);
    }
  };

  const handleKeyPress = (event) => {
    const pressedKey = event.key.toUpperCase();
    playMusic(pressedKey);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (currentAudio) {
        currentAudio.pause(); // Stop audio when the component unmounts
      }
    };
  }, [currentAudio]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-extrabold mb-8">
        🎶 Play Rock Keys 🎷
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {Object.keys(keyToMusic).map((key) => (
          <div
            key={key}
            className={`flex items-center justify-center w-28 h-28 rounded-full text-white text-3xl font-bold shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer ${
              activeKey === key
                ? "bg-green-500"
                : "bg-gradient-to-t from-blue-500 to-blue-700"
            }`}
            onClick={() => playMusic(key)}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}
