"use client";
import { useState } from "react";
import Link from "next/link";

// Dữ liệu bộ câu hỏi Toán 10 - Chương Vectơ
const BO_CAU_HOI = {
  tracNghiem: [
    {
      id: "tn1",
      cauHoi: "Câu 1: Cho tam giác ABC có trọng tâm G và trung điểm M của BC. Khẳng định nào sau đây đúng?",
      luaChon: [
        "A. GA + GB + GC = 0 (các vectơ)",
        "B. GA + GB + GC = 3GM (các vectơ)",
        "C. AB + AC = AM (các vectơ)",
        "D. GB + GC = GA (các vectơ)",
      ],
      dapAn: 0, // Đáp án A
    },
    {
      id: "tn2",
      cauHoi: "Câu 2: Trong mặt phẳng tọa độ Oxy, cho vectơ u = (3; -4). Độ dài của vectơ u bằng:",
      luaChon: ["A. 7", "B. 5", "C. 1", "D. 25"],
      dapAn: 1, // Đáp án B
    },
    {
      id: "tn3",
      cauHoi: "Câu 3: Trong mặt phẳng Oxy, cho A(1; 2) và B(4; -2). Tọa độ vectơ AB là:",
      luaChon: ["A. (-3; 4)", "B. (5; 0)", "C. (3; -4)", "D. (3; 4)"],
      dapAn: 2, // Đáp án C
    },
  ],
  dungSai: {
    cauHoi: "Câu 4: Trong mặt phẳng Oxy, cho ba điểm A(1; 1), B(3; 5) và C(-1; 2). Xét tính đúng/sai của các mệnh đề sau:",
    cacY: [
      { id: "a", noiDung: "a) Tọa độ vectơ AB là (2; 4).", dapAn: true },
      { id: "b", noiDung: "b) Độ dài đoạn thẳng AB bằng 2√5.", dapAn: true },
      { id: "c", noiDung: "c) Ba điểm A, B, C thẳng hàng.", dapAn: false },
      { id: "d", noiDung: "d) Tọa độ trọng tâm G của tam giác ABC là (1; 3).", dapAn: false },
    ],
  },
  traLoiNgan: [
    {
      id: "tl1",
      cauHoi: "Câu 5: Trong mặt phẳng Oxy, cho vectơ a = (2; -3) và b = (6; 4). Tính tích vô hướng a.b (nhập kết quả là số nguyên):",
      dapAn: "0",
    },
    {
      id: "tl2",
      cauHoi: "Câu 6: Cho hình vuông ABCD có cạnh bằng 2. Tính độ dài của vectơ AB + AD (làm tròn đến hàng phần trăm, dùng dấu chấm):",
      dapAn: "2.83",
    },
  ],
};

export default function HocSinhPage() {
  const [pin, setPin] = useState("");
  const [ten, setTen] = useState("");
  const [daVaoPhong, setDaVaoPhong] = useState(false);
  const [daNopBai, setDaNopBai] = useState(false);

  // Lưu bài làm của học sinh
  const [chonTN, setChonTN] = useState<{ [key: string]: number }>({});
  const [chonDS, setChonDS] = useState<{ [key: string]: boolean }>({});
  const [nhapTL, setNhapTL] = useState<{ [key: string]: string }>({});
  const [diemSo, setDiemSo] = useState(0);

  const handleVaoPhong = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin || !ten) return alert("Vui lòng nhập đủ mã PIN và họ tên!");
    setDaVaoPhong(true);
  };

  const handleNopBai = () => {
    let tongDiem = 0;

    // 1. Chấm Trắc nghiệm (3 câu x 1 điểm = 3 điểm)
    BO_CAU_HOI.tracNghiem.forEach((q) => {
      if (chonTN[q.id] === q.dapAn) tongDiem += 1;
    });

    // 2. Chấm Đúng/Sai theo quy tắc GDPT 2018 (1 ý: 0.4đ, 2 ý: 1đ, 3 ý: 2đ, 4 ý: 4đ)
    let soYDung = 0;
    BO_CAU_HOI.dungSai.cacY.forEach((y) => {
      if (chonDS[y.id] === y.dapAn) soYDung += 1;
    });
    if (soYDung === 1) tongDiem += 0.4;
    if (soYDung === 2) tongDiem += 1.0;
    if (soYDung === 3) tongDiem += 2.0;
    if (soYDung === 4) tongDiem += 4.0;

    // 3. Chấm Trả lời ngắn (2 câu x 1.5 điểm = 3 điểm)
    BO_CAU_HOI.traLoiNgan.forEach((q) => {
      const dapAnHS = (nhapTL[q.id] || "").trim().replace(",", ".");
      if (dapAnHS === q.dapAn) tongDiem += 1.5;
    });

    setDiemSo(Number(tongDiem.toFixed(2)));
    setDaNopBai(true);
  };

  // Màn hình 1: Nhập PIN
  if (!daVaoPhong) {
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
                placeholder="Ví dụ: Nguyễn Văn A - 10A2"
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

  // Màn hình 3: Kết quả sau khi nộp bài
  if (daNopBai) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center space-y-5">
          <div className="text-5xl">🏆</div>
          <h2 className="text-2xl font-bold text-emerald-400">Hoàn thành bài thi!</h2>
          <p className="text-slate-300">Thí sinh: <strong className="text-white">{ten}</strong> (Phòng {pin})</p>
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
            <p className="text-sm text-slate-400">Điểm số đạt được</p>
            <p className="text-5xl font-extrabold text-yellow-400 mt-2">{diemSo} <span className="text-xl text-slate-400">/ 10</span></p>
          </div>
          <div className="flex gap-3 justify-center pt-2">
            <button
              onClick={() => { setDaNopBai(false); setChonTN({}); setChonDS({}); setNhapTL({}); }}
              className="bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold"
            >
              Làm lại đề này
            </button>
            <Link href="/" className="bg-emerald-500 text-slate-950 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-400">
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Màn hình 2: Giao diện làm bài 3 phần
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center sticky top-2 z-10">
          <div>
            <p className="text-xs text-slate-400">Phòng PIN: <span className="text-yellow-400 font-bold">{pin}</span></p>
            <p className="font-bold text-emerald-400">{ten}</p>
          </div>
          <button
            onClick={handleNopBai}
            className="bg-emerald-500 text-slate-950 px-5 py-2 rounded-xl font-bold hover:bg-emerald-400"
          >
            Nộp bài ngay
          </button>
        </div>

        {/* PHẦN I: TRẮC NGHIỆM */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-5">
          <h2 className="text-lg font-bold text-yellow-400 border-b border-slate-800 pb-2">
            PHẦN I. Trắc nghiệm nhiều lựa chọn (3,0 điểm)
          </h2>
          {BO_CAU_HOI.tracNghiem.map((q) => (
            <div key={q.id} className="space-y-2.5">
              <p className="font-medium text-slate-200">{q.cauHoi}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {q.luaChon.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setChonTN({ ...chonTN, [q.id]: idx })}
                    className={`text-left p-3 rounded-xl border text-sm transition ${
                      chonTN[q.id] === idx
                        ? "bg-yellow-500/20 border-yellow-400 text-yellow-300 font-semibold"
                        : "bg-slate-800/50 border-slate-700 hover:bg-slate-800"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PHẦN II: ĐÚNG / SAI */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-purple-400 border-b border-slate-800 pb-2">
            PHẦN II. Trắc nghiệm Đúng / Sai (4,0 điểm)
          </h2>
          <p className="font-medium text-slate-200">{BO_CAU_HOI.dungSai.cauHoi}</p>
          <div className="space-y-2.5">
            {BO_CAU_HOI.dungSai.cacY.map((y) => (
              <div key={y.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                <span className="text-sm text-slate-200">{y.noiDung}</span>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => setChonDS({ ...chonDS, [y.id]: true })}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold border ${
                      chonDS[y.id] === true ? "bg-emerald-500 text-slate-950 border-emerald-400" : "bg-slate-800 border-slate-700"
                    }`}
                  >
                    Đúng
                  </button>
                  <button
                    onClick={() => setChonDS({ ...chonDS, [y.id]: false })}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold border ${
                      chonDS[y.id] === false ? "bg-rose-500 text-white border-rose-400" : "bg-slate-800 border-slate-700"
                    }`}
                  >
                    Sai
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHẦN III: TRẢ LỜI NGẮN */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-5">
          <h2 className="text-lg font-bold text-emerald-400 border-b border-slate-800 pb-2">
            PHẦN III. Trắc nghiệm trả lời ngắn (3,0 điểm)
          </h2>
          {BO_CAU_HOI.traLoiNgan.map((q) => (
            <div key={q.id} className="space-y-2">
              <p className="font-medium text-slate-200">{q.cauHoi}</p>
              <input
                type="text"
                placeholder="Nhập đáp số của em..."
                value={nhapTL[q.id] || ""}
                onChange={(e) => setNhapTL({ ...nhapTL, [q.id]: e.target.value })}
                className="w-full sm:w-64 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-yellow-400 font-bold focus:outline-none focus:border-emerald-500"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNopBai}
          className="w-full bg-emerald-500 text-slate-950 py-3.5 rounded-xl font-bold text-lg hover:bg-emerald-400 transition"
        >
          HOÀN THÀNH & XEM ĐIỂM
        </button>
      </div>
    </div>
  );
}