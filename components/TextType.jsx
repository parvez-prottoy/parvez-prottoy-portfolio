'use client';

import { useEffect, useState } from 'react';

const TextType = ({
  text,
  texts,
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '_',
  cursorBlinkDuration = 0.5,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
}) => {
  // Use `texts` if provided, otherwise `text`
  const stringsToType = texts && texts.length > 0 ? texts : text;

  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!stringsToType || stringsToType.length === 0) return;

    let timeout;

    const fullText = stringsToType[currentStringIndex];

    const getTypingSpeed = () => {
      if (variableSpeedEnabled) {
        return (
          Math.floor(
            Math.random() * (variableSpeedMax - variableSpeedMin + 1)
          ) + variableSpeedMin
        );
      }
      return typingSpeed;
    };

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % stringsToType.length);
        timeout = setTimeout(() => {}, 200); // small pause before typing next
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === fullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, getTypingSpeed());
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentStringIndex,
    stringsToType,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    variableSpeedEnabled,
    variableSpeedMin,
    variableSpeedMax,
  ]);

  return (
    <span className="relative">
      <span className="text-white/90">{currentText}</span>
      {showCursor && (
        <span
          className="text-[#ea580c] font-bold"
          style={{
            animation: `blink ${cursorBlinkDuration}s step-end infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      )}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `,
        }}
      />
    </span>
  );
};

export default TextType;
