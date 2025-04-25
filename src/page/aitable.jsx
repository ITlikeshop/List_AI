import React from "react";
import { aiBots } from "./aibots";
import { Link } from "react-router-dom";

export default function AITable() {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-300 tracking-tight">
        รวม List AI ที่น่าสนใจ ✨
      </h1>
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <table className="w-full bg-gray-800 shadow-xl rounded-2xl border border-gray-700">
          <thead className="bg-red-700 text-white text-sm uppercase tracking-wider font-medium">
            <tr>
              <th className="p-5 text-left">ชื่อ</th>
              <th className="p-5 text-left">ผู้พัฒนา</th>
              <th className="p-5 text-left">จุดเด่น</th>
              <th className="p-5 text-left">เหมาะกับ</th>
              <th className="p-5 text-center">รายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            {aiBots.map((bot, index) => (
              <tr
                key={bot.id}
                className={`border-b border-gray-700 transition-all duration-300 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                } hover:bg-red-900 hover:shadow-md`}
              >
                <td className="p-5 font-semibold text-gray-300 text-lg">
                  {bot.name}
                </td>
                <td className="p-5 text-gray-300">{bot.creator}</td>
                <td className="p-5 text-gray-300 max-w-xs truncate">
                  {bot.highlight}
                </td>
                <td className="p-5 text-gray-300 max-w-xs truncate">
                  {bot.suitableFor}
                </td>
                <td className="p-5 text-center">
                  <div className="flex justify-center gap-2">
                    <Link
                      to={`/ai/${bot.id}`}
                      className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 hover:scale-105 transition-all duration-200 shadow-sm"
                    >
                      ดูเพิ่มเติม
                    </Link>
                    {bot.customLink && (
                      <a
                        href={bot.customLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-red-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-900 hover:scale-105 transition-all duration-200 shadow-sm"
                        onClick={() => console.log(`Opening link: ${bot.customLink}`)}
                      >
                        ไปยังลิงก์
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}