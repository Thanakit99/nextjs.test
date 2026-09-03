import BandCard from "@/components/BandCard";
import { bands } from "@/Data/bands";

export default function FavoriteBandsPage() {
  return (
    <main style={{ padding: "2rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff", marginBottom: "0.5rem" }}>
        วงดนตรีที่ชื่นชอบ
      </h1>
      <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
        ตรวจสอบรายชื่อวงดนตรีและสมาชิกที่ชื่นชอบ
      </p>

      <section style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}