import React from "react";
import { useParams, Link } from "react-router-dom";
import { aiBots } from "./aibots";

export default function AIDetail() {
  const { id } = useParams();
  const bot = aiBots.find((b) => b.id.toString() === id);

  if (!bot) {
    return (
      <div className="p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen">
        <div className="max-w-7xl mx-auto bg-gray-800 shadow-xl rounded-2xl border border-gray-700 p-6 text-gray-300 text-center">
          ไม่พบข้อมูล AI นี้
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-red-600 tracking-tight">
          {bot.name}
        </h1>
        <div className="bg-gray-800 shadow-xl rounded-2xl border border-gray-700 p-6">
          <p className="mb-4">
            <span className="text-red-500 font-semibold">ผู้พัฒนา:</span>{" "}
            <span className="text-gray-300">{bot.creator}</span>
          </p>
          <p className="mb-4">
            <span className="text-red-500 font-semibold">จุดเด่น:</span>{" "}
            <span className="text-gray-300">{bot.highlight}</span>
          </p>
          <p className="mb-4">
            <span className="text-red-500 font-semibold">ความสามารถพิเศษ:</span>{" "}
            <span className="text-gray-300">{bot.highlight}</span>
          </p>
          <p className="mb-4">
            <span className="text-red-500 font-semibold">เหมาะกับ:</span>{" "}
            <span className="text-gray-300">{bot.suitableFor}</span>
          </p>
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 hover:scale-105 transition-all duration-200 shadow-sm"
            >
              กลับไปหน้า AI List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}