"use client";

import { Textarea } from "flowbite-react";
import { Button } from "flowbite-react";
import { useState } from "react";

export function TextBox() {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleClearText = () => {
    setText("");
  };

  function WordCount(str) {
    let count = 0;
    if (str.length === 0) return 0;
    for (let index = 0; index < str.length - 1; index++) {
      if (
        (str[index] >= "a" &&
          str[index] <= "z" &&
          (str[index + 1] === " " || str[index + 1] === "\n")) ||
        (str[index] >= "A" &&
          str[index] <= "Z" &&
          (str[index + 1] === " " || str[index + 1] === "\n"))
      ) {
        count++;
      }
    }
    if (
      (str[str.length - 1] >= "a" && str[str.length - 1] <= "z") ||
      (str[str.length - 1] >= "A" && str[str.length - 1] <= "Z")
    ) {
      count++;
    }

    return count;
  }

  return (
    <div className="flex flex-col items-center bg-teal-50 dark:bg-slate-600 ">
      <div className="block">
        <h1 className="dark:text-white text-center py-3 font-bold text-xl">
          Enter Text Below:
        </h1>
      </div>
      <Textarea
        className="resize w-11/12 md:w-8/12 lg:w-6/12 mx-auto"
        id="comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start Writing..."
        required
        rows={10}
      />
      <div className="flex justify-center mt-4 space-x-4">
        <Button
          color="light"
          className="border-2 dark:border-gray-500"
          onClick={handleUpperCase}
        >
          Make UpperCase
        </Button>
        <Button
          color="light"
          className="border-2 dark:border-gray-500"
          onClick={handleLowerCase}
        >
          Make LowerCase
        </Button>
        <Button
          color="light"
          className="border-2 dark:border-gray-500"
          onClick={() => alert("Translate functionality to be implemented")}
        >
          Translate
        </Button>
        <Button
          color="light"
          className="border-2 dark:border-gray-500"
          onClick={handleClearText}
        >
          Clear All
        </Button>
      </div>
      <div className="block text-center pb-6 mt-6">
        <h1 className="dark:text-white text-center py-3 font-bold text-xl">
          Summary:
        </h1>
        <h3 className="dark:text-white">Total Words: {WordCount(text)}</h3>
        <h3 className="dark:text-white">Total Characters: {text.length}</h3>
        <h3 className="dark:text-white">
          Average time to read: {0.008 * WordCount(text)} minute.
        </h3>
      </div>
    </div>
  );
}
