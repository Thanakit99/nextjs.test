import Image from "next/image";
import type { Band } from "@/Type/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <div style={{ width: "100%", height: "280px", position: "relative", marginBottom: "1rem", borderRadius: "8px", overflow: "hidden" }}>
        <Image
          src={band.image}
          alt={band.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#fff", margin: 0 }}>{band.name}</h2>
        <span style={{ background: "#1e3a8a", color: "#60a5fa", padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.875rem" }}>
          {band.yearFormed}
        </span>
      </div>

      <p style={{ color: "#9ca3af", fontSize: "0.95rem", marginBottom: "1rem" }}>
        <strong>แนวเพลง:</strong> {band.genre}
      </p>

      {band.description && (
        <p style={{ color: "#d1d5db", fontSize: "0.9rem", marginBottom: "1rem" }}>
          {band.description}
        </p>
      )}

      <div style={{ borderTop: "1px solid #374151", paddingTop: "0.75rem", marginTop: "auto" }}>
        <span style={{ fontSize: "0.875rem", color: "#9ca3af", display: "block", marginBottom: "0.25rem" }}>สมาชิกวง:</span>
        <p style={{ fontSize: "0.9rem", color: "#e5e7eb", margin: 0 }}>
          {band.members.join(", ")}
        </p>
      </div>
    </article>
  );
}