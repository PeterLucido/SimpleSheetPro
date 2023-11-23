import Link from 'next/link';
import React from 'react';

const NewDiveSheetCard = () => {
  return (
    <Link href="/newdivesheet">
      <div className="w-64 h-64 bg-white text-blue-400 flex flex-col items-center justify-center border rounded-xl shadow-lg border-blue-400 cursor-pointer">
        <h2 className="text-lg font-semibold">New Dive Sheet</h2>
        <div className="text-4xl mt-2">+</div>
      </div>
    </Link>
  )
}

export default NewDiveSheetCard;
