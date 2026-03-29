export const metadata = { title: "关于 · Jack Zhang" };

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 32px 96px" }}>
      <p style={{
        fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em",
        textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
      }}>
        关于
      </p>
      <h1 style={{
        fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em",
        color: "var(--text)", margin: "0 0 40px",
      }}>
        Jack Zhang
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <Section title="背景">
          <p>
            复旦大学本科在读，专注二级市场投资研究。目前正在寻找
            权益投研相关的实习或工作机会，长期目标是成为基金经理。
          </p>
        </Section>

        <Section title="研究方向">
          <p>
            以基本面研究为核心，关注行业供需结构、竞争格局与企业
            自由现金流。目前重点覆盖周期与消费板块。
          </p>
        </Section>

        <Section title="这个网站">
          <p>
            这里是我的公开投研记录。每篇文章都注明写作时间和当时的
            结论——无论对错，都完整保留。我相信这是比任何简历都诚实的
            能力展示方式。
          </p>
        </Section>

        <Section title="联系">
          <p>
            如果你对我的研究有兴趣，或者有实习/工作机会，欢迎联系：
            <br />
            <a href="mailto:jack@jackzhang.com" style={{
              color: "var(--accent)", textDecoration: "none",
            }}>
              jack@jackzhang.com
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: 28, borderBottom: "1px solid var(--border)" }}>
      <div style={{
        fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
        textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 12,
      }}>
        {title}
      </div>
      <div style={{
        fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75,
      }}>
        {children}
      </div>
    </div>
  );
}
