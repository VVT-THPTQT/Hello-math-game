import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-2xl font-black text-slate-950">
              M
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wide">
                MATH CHALLENGE
              </h1>
              <p className="text-xs text-slate-400">
                Học Toán - Chơi thông minh
              </p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-300">
            ● Hệ thống sẵn sàng
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <div className="mb-6 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm text-yellow-300">
            ✦ Nền tảng trò chơi Toán học tương tác
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            CHINH PHỤC
            <span className="block text-yellow-400">
              THỬ THÁCH TOÁN HỌC
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Học tập qua trò chơi, tranh tài cùng bạn bè,
            tích lũy điểm số và chinh phục bảng xếp hạng.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#vai-tro"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              BẮT ĐẦU KHÁM PHÁ →
            </a>
            <a
              href="#tinh-nang"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Tìm hiểu trò chơi
            </a>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="vai-tro" className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-3 text-center text-3xl font-bold">
          THAM GIA MATH CHALLENGE
        </h3>
        <p className="mb-10 text-center text-slate-400">
          Chọn vai trò của bạn để bắt đầu
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-600/20 to-slate-900 p-8">
            <div className="mb-5 text-5xl">👨‍🏫</div>
            <h4 className="text-2xl font-bold text-blue-300">
              GIÁO VIÊN
            </h4>
            <p className="my-4 leading-7 text-slate-300">
              Tạo phòng chơi, biên soạn câu hỏi, điều khiển
              trò chơi và theo dõi kết quả học sinh.
            </p>
            <Link href="/giao-vien" className="inline-block rounded-lg bg-yellow-500 px-5 py-2.5 font-semibold text-slate-950 hover:bg-yellow-400 transition">
              Vào Khu vực giáo viên →
            </Link>
          </div>

          <div className="rounded-3xl border border-purple-400/30 bg-gradient-to-br from-purple-600/20 to-slate-900 p-8">
            <div className="mb-5 text-5xl">🎓</div>
            <h4 className="text-2xl font-bold text-purple-300">
              HỌC SINH
            </h4>
            <p className="my-4 leading-7 text-slate-300">
              Tham gia phòng bằng mã PIN, trả lời câu hỏi,
              tích lũy điểm và thi đua cùng các bạn.
            </p>
            <Link href="/hoc-sinh" className="inline-block rounded-lg bg-purple-600 px-5 py-2.5 font-semibold text-white hover:bg-purple-500 transition">
               Tham gia ngay →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="tinh-nang" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="mb-10 text-center text-3xl font-bold">
          BA HÌNH THỨC THỬ THÁCH
        </h3>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: "🔤",
              title: "Trắc nghiệm",
              desc: "Chọn một đáp án đúng trong bốn phương án A, B, C, D."
            },
            {
              icon: "☑️",
              title: "Đúng / Sai",
              desc: "Đánh giá từng nhận định và chinh phục câu hỏi nhiều ý."
            },
            {
              icon: "✍️",
              title: "Trả lời ngắn",
              desc: "Tự nhập kết quả, biểu thức hoặc đáp số Toán học."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-yellow-400/50"
            >
              <div className="text-4xl">{item.icon}</div>
              <h4 className="mt-5 text-xl font-bold">
                {item.title}
              </h4>
              <p className="mt-3 leading-7 text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="font-bold tracking-widest text-yellow-400">
          MATH CHALLENGE
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Nền tảng trò chơi Toán học tương tác dành cho học sinh THPT
        </p>
        <p className="mt-2 text-xs text-slate-600">
          © 2026 Math Challenge
        </p>
      </footer>
    </main>
  );
}
