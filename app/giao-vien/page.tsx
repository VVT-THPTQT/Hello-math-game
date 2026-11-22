"use client";
import { useState } from "react";
import Link from "next/link";

export default function GiaoVienPage() {
  const [pin, setPin] = useState("849201");

  const taoMaMoi = () => {
    const randomPin = Math.floor(100000 + Math.random() * 900000).toString();
    setPin(randomPin);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-yellow-400">Khu Vực Giáo Viên</h1>
          <Link href="/" className="text-sm text-slate-400 hover:underline">← Về trang chủ</Link>
        </div>

        <div className="bg-slate-800/60 p-5 rounded-xl mb-6 flex items-center justify-between border border-slate-700">
          <div>
            <p className="text-sm text-slate-300">Mã PIN phòng thi hiện tại:</p>
            <p className="text-4xl font-extrabold tracking-widest text-yellow-400 mt-1">{pin}</p>
          </div>
          <button 
            onClick={taoMaMoi}
            className="bg-yellow-500 text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400"
          >
            Tạo mã PIN mới
          </button>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <h2 className="font-semibold mb-3 text-slate-200">Danh sách bộ đề sẵn sàng:</h2>
          <div className="p-4 border border-slate-800 bg-slate-800/30 rounded-xl flex justify-between items-center">
            <div>
              <p className="font-medium">Đề ôn tập Toán 10 - Chương Vectơ</p>
              <p className="text-sm text-slate-400">Gồm: Trắc nghiệm, Đúng/Sai, Trả lời ngắn</p>
            </div>
            <button className="bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-400">
              Mở phòng ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}