"use client"

import { useState } from 'react';


type Props = {
    textToCopy: string;
}

const CopyableSpan = ({ textToCopy}:Props) => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = (text :string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); 
      },
      (err) => {
        setCopySuccess('Failed to copy!');
      }
    );
  };

  return (
    <div>
      <span 
        onClick={() => copyToClipboard(textToCopy)} 
        className="cursor-pointer text-white  font-sans text-xl font-semibold"
      >
        {textToCopy}
      </span>
      {copySuccess && <span className="ml-2 p-1 bg-white rounded-lg text-black font-sans ">{copySuccess}</span>}
    </div>
  );
};

export default CopyableSpan;