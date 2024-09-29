"use client";
import Image from "next/image";
import {useState} from 'react';


export default function Home() {

  const [inputText, setInputText] = useState('');
  const handleSubmit = () => {
    if (inputText.trim()){
      alert(`You entered: ${inputText}`);
    } else {
      alert("Please enter some text");
    }
  }


  return (
    <main className="flex  w-full justify-center h-screen bg-gray-100 pt-20">
        <div>
        <h1 className="text-center text-gray-500 text-5xl font-medium mb-8 italic">Your Travel and Investment Guide</h1>
        </div>
        <div class="fixed bottom-0 w-[10000px] bg-gray-100 p-4 flex justify-center p-20">
          <div class="flex space-x-2 w-full max-w-xl">
            <input type="text" placeholder="Enter your text here" class="w-full p-2 border border-gray-300 rounded-full" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
    </main>
  );
}
