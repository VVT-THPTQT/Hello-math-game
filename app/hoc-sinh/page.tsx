"use client";
import { useState } from "react";
import Link from "next/link";

export default function HocSinhPage() {
  const [pin, setPin] = useState("");
  const [ten, setTen] = useState("");

  const handleVaoPhong = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin || !ten) return alert("Vui lòng nhập đủ mã PIN và họ tên!");
    alert(`Chào ${ten}, đang kết nối vào phòng ${pin}...`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <Link href="/" className="text-sm text-slate-400 hover:underline">← Về trang chủ</Link>
        <h1 className="text-2xl font-bold text-emerald-400 mt-4 mb-2">Khu Vực Học Sinh</h1>
        <p className="text-sm text-slate-400 mb-6">Nhập mã PIN do giáo viên cung cấp để bắt đầu thử thách.</p>

        <form onSubmit={handleVaoPhong} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Mã PIN phòng thi</label>
            <input
              type="text"
              maxLength={6}
              placeholder="Ví dụ: 849201"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center text-2xl font-bold tracking-widest text-yellow-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Họ và tên (kèm lớp)</label>
            <input
              type="text"
              placeholder="Ví dụ: Nguyễn Văn A - 11A5"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-slate-950 py-3 rounded-xl font-bold hover:bg-emerald-400 transition"
          >
            THAM GIA NGAY
          </button>
        </form>
      </div>
    </div>
  );
}