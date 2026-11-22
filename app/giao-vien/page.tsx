"use client";
import { useState } from "react";
import Link from "next/link";

export default function GiaoVienPage() {
  const [pin, setPin] = useState("849201");
  const [phongDangMo, setPhongDangMo] = useState(false);

  const taoMaMoi = () => {
    const randomPin = Math.floor(100000 + Math.random() * 900000).toString();
    setPin(randomPin);
  };

  const saoChepLink = () => {
    navigator.clipboard.writeText("https://hello-math-game.vercel.app/hoc-sinh");
    alert("Đã sao chép đường link trang Học sinh! Thầy có thể dán vào Zalo lớp.");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-yellow-400">Khu Vực Giáo Viên</h1>
          <Link href="/" className="text-sm text-slate-400 hover:underline">← Về trang chủ</Link>
        </div>

        {!phongDangMo ? (
          <>
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
                <button 
                  onClick={() => setPhongDangMo(true)}
                  className="bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-400"
                >
                  Mở phòng ngay
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-6 space-y-6">
            <div className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-semibold">
              ● Phòng thi đang mở — Đề ôn tập Toán 10
            </div>
            
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 max-w-md mx-auto">
              <p className="text-sm text-slate-300">Học sinh truy cập link và nhập mã PIN:</p>
              <p className="text-5xl font-extrabold tracking-widest text-yellow-400 my-3">{pin}</p>
              <button 
                onClick={saoChepLink}
                className="mt-2 bg-slate-700 hover:bg-slate-600 text-white text-sm px-4 py-2 rounded-lg font-medium"
              >
                📋 Sao chép link gửi học sinh
              </button>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button 
                onClick={() => alert("Tính năng phát câu hỏi trực tiếp sẽ được gắn ở bước tiếp theo!")}
                className="bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-emerald-400"
              >
                ▶ Bắt đầu phát câu hỏi
              </button>
              <button 
                onClick={() => setPhongDangMo(false)}
                className="bg-rose-500/20 text-rose-400 border border-rose-500/40 px-5 py-3 rounded-xl font-semibold hover:bg-rose-500/30"
              >
                Đóng phòng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}