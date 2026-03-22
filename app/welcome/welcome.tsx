import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Sữa Tươi Nguyên Kem",
    volume: "1L",
    price: "42.000",
    tag: "BAN CHAY",
    desc: "Nguyen chat tu trang trai chuan quoc te, giu nguyen duong chat tu nhien",
    color: "#FFF8E7",
    accent: "#D4A017",
  },
  {
    id: 2,
    name: "Sữa Hữu Cơ Organic",
    volume: "500ml",
    price: "68.000",
    tag: "MOI",
    desc: "Chung nhan huu co EU, khong chat bao quan, thuan tien cho gia dinh",
    color: "#F0F7EE",
    accent: "#4A7C59",
  },
  {
    id: 3,
    name: "Sữa Ít Đường Healthy",
    volume: "1L",
    price: "38.000",
    tag: "HEALTHY",
    desc: "Giam 50% duong, day du canxi va vitamin D3, phu hop nguoi an kieng",
    color: "#EEF2FF",
    accent: "#3B5BDB",
  },
];

const stats = [
  { value: "100%", label: "Trang trai chuan" },
  { value: "50+", label: "Tinh thanh" },
  { value: "2M+", label: "Khach hang" },
  { value: "15nam", label: "Kinh nghiem" },
];

export function Welcome({ message }: { message?: string }) {
  const [activeProduct, setActiveProduct] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#FAFAF7",
        minHeight: "100vh",
        color: "#1A1A1A",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .milk-hero { font-family: 'Playfair Display', Georgia, serif; }
        .milk-body { font-family: 'DM Sans', sans-serif; }

        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.7s ease forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .product-card.active {
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transform: translateY(-4px);
        }

        .btn-primary {
          background: #1A1A1A;
          color: #FAFAF7;
          border: none;
          padding: 14px 36px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .btn-primary:hover { background: #333; }

        .btn-outline {
          background: transparent;
          color: #1A1A1A;
          border: 1.5px solid #1A1A1A;
          padding: 13px 34px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-outline:hover { background: #1A1A1A; color: #FAFAF7; }

        .tag-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          padding: 4px 10px;
          border-radius: 2px;
        }

        .divider {
          width: 48px;
          height: 2px;
          background: #1A1A1A;
          margin: 16px 0;
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .product-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 48px",
          borderBottom: "1px solid #E8E8E2",
          background: "#FAFAF7",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          className="milk-hero"
          style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px" }}
        >
          LACTA<span style={{ fontStyle: "italic", fontWeight: 400 }}>fresh</span>
        </div>
        <div
          className="milk-body"
          style={{
            display: "flex",
            gap: 36,
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: "0.5px",
          }}
        >
          {["San pham", "Ve chung toi", "Dai ly"].map((item) => (
            <span
              key={item}
              style={{ cursor: "pointer", color: "#555", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A1A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              {item}
            </span>
          ))}
        </div>
        <button className="btn-primary" style={{ padding: "10px 24px", fontSize: 12 }}>
          Dat hang
        </button>
      </nav>

      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "88vh",
          gap: 0,
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 64px",
          }}
        >
          <div
            className="milk-body tag-badge fade-in"
            style={{
              background: "#F0EDE4",
              color: "#8B7355",
              width: "fit-content",
              animationDelay: "0.1s",
            }}
          >
            TUOI MOI MOI NGAY
          </div>
          <h1
            className="milk-hero fade-in"
            style={{
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: "24px 0 0",
              animationDelay: "0.2s",
            }}
          >
            Thuan Nhien.
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>Thuan Khiet.</span>
          </h1>
          <div className="divider fade-in" style={{ animationDelay: "0.3s" }} />
          <p
            className="milk-body fade-in"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "#555",
              maxWidth: 420,
              animationDelay: "0.4s",
            }}
          >
            Sua tuoi nguyen chat tu nhung trang trai dat chuan VietGAP,
            thu hoach va dong goi trong vong 24 gio de giu tron huong vi
            va duong chat tu nhien nhat.
          </p>
          <div
            className="fade-in"
            style={{ display: "flex", gap: 16, marginTop: 40, animationDelay: "0.5s" }}
          >
            <button className="btn-primary">Mua ngay</button>
            <button className="btn-outline">Xem them</button>
          </div>
        </div>

        {/* Right - decorative */}
        <div
          style={{
            background: "#F5F0E8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* large circle */}
          <div
            style={{
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: "rgba(212,160,23,0.12)",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* bottle illustration via SVG */}
          <svg
            width="220"
            height="320"
            viewBox="0 0 220 320"
            fill="none"
            style={{ position: "relative", zIndex: 1 }}
          >
            {/* bottle body */}
            <rect x="60" y="80" width="100" height="200" rx="16" fill="#FFFFFF" stroke="#E0D8C8" strokeWidth="2" />
            {/* bottle neck */}
            <rect x="80" y="50" width="60" height="40" rx="8" fill="#FFFFFF" stroke="#E0D8C8" strokeWidth="2" />
            {/* cap */}
            <rect x="82" y="34" width="56" height="24" rx="6" fill="#D4A017" />
            {/* label */}
            <rect x="68" y="110" width="84" height="140" rx="8" fill="#FFF8E7" stroke="#D4A017" strokeWidth="1.5" />
            {/* label text lines */}
            <rect x="82" y="128" width="56" height="4" rx="2" fill="#D4A017" />
            <rect x="88" y="140" width="44" height="3" rx="1.5" fill="#BFA070" />
            <rect x="80" y="165" width="60" height="2" rx="1" fill="#E0D8C8" />
            <rect x="80" y="172" width="60" height="2" rx="1" fill="#E0D8C8" />
            <rect x="80" y="179" width="40" height="2" rx="1" fill="#E0D8C8" />
            {/* milk wave */}
            <ellipse cx="110" cy="245" rx="38" ry="6" fill="rgba(212,160,23,0.15)" />
            {/* shine */}
            <rect x="148" y="90" width="6" height="60" rx="3" fill="rgba(255,255,255,0.6)" />
          </svg>

          {/* floating tag */}
          <div
            style={{
              position: "absolute",
              bottom: 60,
              right: 40,
              background: "#1A1A1A",
              color: "#FAFAF7",
              padding: "12px 20px",
              borderRadius: 4,
            }}
          >
            <div className="milk-body" style={{ fontSize: 11, letterSpacing: 2, opacity: 0.6 }}>
              TU
            </div>
            <div className="milk-hero" style={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>
              42K
            </div>
            <div className="milk-body" style={{ fontSize: 11, opacity: 0.6 }}>
              / chai 1L
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          background: "#1A1A1A",
          color: "#FAFAF7",
          padding: "48px 64px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="milk-hero"
                style={{ fontSize: 40, fontWeight: 900, color: "#D4A017" }}
              >
                {s.value}
              </div>
              <div
                className="milk-body"
                style={{ fontSize: 12, letterSpacing: 1.5, opacity: 0.6, marginTop: 6, textTransform: "uppercase" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "96px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="milk-body" style={{ fontSize: 11, letterSpacing: 3, color: "#888", textTransform: "uppercase" }}>
            Danh muc
          </div>
          <h2
            className="milk-hero"
            style={{ fontSize: 48, fontWeight: 700, marginTop: 12, marginBottom: 56 }}
          >
            San pham <em style={{ fontWeight: 400 }}>noi bat</em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
            className="product-grid"
          >
            {products.map((p, i) => (
              <div
                key={p.id}
                className={`product-card${activeProduct === i ? " active" : ""}`}
                onClick={() => setActiveProduct(i)}
                style={{
                  background: p.color,
                  borderRadius: 12,
                  padding: "40px 36px",
                  border: activeProduct === i ? `2px solid ${p.accent}` : "2px solid transparent",
                }}
              >
                <div
                  className="tag-badge milk-body"
                  style={{ background: p.accent, color: "#fff", width: "fit-content", marginBottom: 28 }}
                >
                  {p.tag}
                </div>
                <div
                  className="milk-hero"
                  style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2, marginBottom: 8 }}
                >
                  {p.name}
                </div>
                <div
                  className="milk-body"
                  style={{ fontSize: 13, color: "#777", marginBottom: 24, lineHeight: 1.7 }}
                >
                  {p.desc}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div className="milk-body" style={{ fontSize: 11, color: "#999", letterSpacing: 1 }}>
                      {p.volume}
                    </div>
                    <div
                      className="milk-hero"
                      style={{ fontSize: 28, fontWeight: 700, color: p.accent }}
                    >
                      {p.price}đ
                    </div>
                  </div>
                  <button
                    className="btn-primary"
                    style={{
                      background: p.accent,
                      padding: "10px 20px",
                      fontSize: 11,
                    }}
                  >
                    Them gio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          margin: "0 64px 80px",
          background: "#F5F0E8",
          borderRadius: 16,
          padding: "72px 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        <div>
          <div className="milk-body" style={{ fontSize: 11, letterSpacing: 3, color: "#8B7355", textTransform: "uppercase" }}>
            Giao hang mien phi
          </div>
          <h3
            className="milk-hero"
            style={{ fontSize: 36, fontWeight: 700, marginTop: 12, lineHeight: 1.2 }}
          >
            Sua tuoi den tan nha,
            <br />
            <em style={{ fontWeight: 400 }}>moi sang.</em>
          </h3>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <button className="btn-primary">Dang ky ngay</button>
          <button className="btn-outline">Hoi them</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #E8E8E2",
          padding: "32px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="milk-hero" style={{ fontSize: 18, fontWeight: 700 }}>
          LACTA<span style={{ fontStyle: "italic", fontWeight: 400 }}>fresh</span>
        </div>
        <div className="milk-body" style={{ fontSize: 12, color: "#999" }}>
          © 2024 LACTAfresh. Thuan nhien, thuan khiet.
        </div>
      </footer>
    </div>
  );
}