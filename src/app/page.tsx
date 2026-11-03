import { CodeWindow } from "@/components/CodeWindow";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, Button, Eyebrow, SectionTitle } from "@/components/ui";
import {
  about,
  experience,
  featuredProject,
  profile,
  projects,
  signals,
  toolkit,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden bg-ink text-cream">
          <div aria-hidden="true" className="dot-grid absolute inset-0 animate-drift" />
          <div
            aria-hidden="true"
            className="absolute -top-40 -right-40 size-[620px] rounded-full bg-brand/25 blur-[140px]"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-32 pb-24 md:grid-cols-[1.1fr_1fr] md:pt-36 md:pb-32">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-3.5 py-1.5 font-mono text-[12.5px] text-brand-light">
                <span className="size-1.5 rounded-full bg-brand-light" />
                {profile.role} · Frontend
              </span>
              <h1 className="mt-7 text-[44px] leading-[1.05] font-extrabold tracking-[-0.035em] md:text-[62px]">
                Construyo interfaces rápidas y productos con{" "}
                <span className="text-brand-light">IA.</span>
              </h1>
              <p className="mt-7 max-w-xl text-[18.5px] leading-[1.65] text-cream/70">
                Soy Carlos, Software Engineer con más de 4 años de experiencia en frontend para medios de
                alto tráfico y e-commerce. Hoy combino esa base con RAG y orquestación de agentes
                para construir productos con IA.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`}>Hablemos ↗</Button>
                <Button href={profile.github} variant="ghost-dark" external>
                  GitHub
                </Button>
                <Button href={profile.linkedin} variant="ghost-dark" external>
                  LinkedIn
                </Button>
              </div>
            </div>

            <div className="min-w-0">
              <CodeWindow />
            </div>
          </div>
        </section>

        {/* Logros */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <SectionTitle className="max-w-3xl">
              Frontend en producción, con criterio de rendimiento.
            </SectionTitle>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {signals.map((s, i) => (
              <Reveal key={s.tag} delay={i * 80}>
                <article className="h-full rounded-2xl border border-line bg-white p-7 card-hover hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_18px_40px_-18px_rgb(38_34_30/0.28)]">
                  <p className="font-mono text-[12.5px] text-brand">{s.tag}</p>
                  <h3 className="mt-4 text-[19px] font-bold">{s.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Sobre mí */}
        <section id="sobre-mi" className="mx-auto grid max-w-6xl gap-10 px-6 pt-8 pb-28 md:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <Eyebrow>Sobre mí</Eyebrow>
            <SectionTitle>Frontend con criterio de producto, ahora con IA.</SectionTitle>
          </Reveal>
          <Reveal delay={120} className="space-y-6 pt-2 text-[17px] leading-[1.75] text-muted">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="mx-auto max-w-6xl px-6 pb-28">
          <Reveal>
            <Eyebrow>Proyectos</Eyebrow>
            <SectionTitle>Proyectos que resuelven problemas reales.</SectionTitle>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted">
              Una selección de mi trabajo con IA.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <article className="grid overflow-hidden rounded-3xl bg-ink text-cream md:grid-cols-[1.5fr_1fr]">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-brand-light/30 px-3 py-1 font-mono text-[12px] text-brand-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-[26px] leading-tight font-bold tracking-[-0.02em] md:text-[30px]">
                  {featuredProject.title}
                </h3>
                <p className="mt-5 max-w-xl text-[15.5px] leading-[1.7] text-cream/70">
                  {featuredProject.text}
                </p>
                {featuredProject.origin && (
                  <p className="mt-4 max-w-xl border-l-2 border-brand-light/40 pl-4 text-[14.5px] leading-[1.7] text-cream/55">
                    {featuredProject.origin}
                  </p>
                )}
                {(featuredProject.demo || featuredProject.repo) && (
                  <div className="mt-8 flex flex-wrap gap-6">
                    {featuredProject.demo && (
                      <ArrowLink href={featuredProject.demo} dark>
                        Ver demo
                      </ArrowLink>
                    )}
                    {featuredProject.repo && (
                      <ArrowLink href={featuredProject.repo} dark>
                        Ver código
                      </ArrowLink>
                    )}
                  </div>
                )}
              </div>
              <dl className="flex flex-col justify-center divide-y divide-cream/10 border-t border-cream/10 bg-ink-2 px-8 md:border-t-0 md:border-l md:px-12">
                {featuredProject.metrics.map((m) => (
                  <div key={m.label} className="flex items-baseline gap-4 py-7">
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="shrink-0 text-[46px] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap text-brand-light">
                      {m.value}
                    </dd>
                    <dd className="text-[14px] text-cream/55">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 card-hover hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_18px_40px_-18px_rgb(38_34_30/0.28)]">
                  <p className="font-mono text-[12px] text-subtle">{p.meta}</p>
                  <h3 className="mt-3 text-[20px] font-bold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{p.text}</p>
                  <div className="mt-6 flex gap-5">
                    <ArrowLink href={p.repo}>Código</ArrowLink>
                    {p.demo && <ArrowLink href={p.demo}>Demo</ArrowLink>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="bg-sand">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <Eyebrow>Experiencia</Eyebrow>
              <SectionTitle>Construyendo en producción, a escala.</SectionTitle>
            </Reveal>

            <ol className="mt-10 border-t border-ink/10">
              {experience.map((job) => (
                <li key={job.period} className="border-b border-ink/10">
                  <Reveal className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
                    <p className="font-mono text-[14px] text-brand">{job.period}</p>
                    <div>
                      <h3 className="text-[21px] font-bold">{job.role}</h3>
                      <p className="mt-1 font-mono text-[14px] text-subtle">
                        {job.company} · {job.context}
                      </p>
                      <ul className="mt-5 max-w-3xl space-y-2.5 text-[15.5px] leading-relaxed text-muted">
                        {job.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Stack */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <Eyebrow>Stack</Eyebrow>
            <SectionTitle>Las herramientas con las que construyo.</SectionTitle>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {toolkit.map((col, i) => (
              <Reveal key={col.group} delay={i * 80}>
                <p className="font-mono text-[13px] text-subtle">{col.group}</p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-white px-4 py-2 text-[14.5px] pill-hover hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="relative overflow-hidden bg-ink text-cream">
          <div aria-hidden="true" className="dot-grid absolute inset-0" />
          <div
            aria-hidden="true"
            className="absolute -bottom-48 -left-40 size-[560px] rounded-full bg-brand/25 blur-[140px]"
          />
          <Reveal className="relative mx-auto max-w-3xl px-6 py-32 text-center">
            <Eyebrow dark>Contacto</Eyebrow>
            <h2 className="mt-5 text-[38px] leading-[1.1] font-extrabold tracking-[-0.03em] md:text-[56px]">
              Hablemos de lo que viene.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[18px] leading-relaxed text-cream/70">
              Me interesan los equipos de producto donde el frontend y la IA se encuentran. Si tienes
              un rol en mente o quieres conversar, escríbeme.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${profile.email}`}>Escríbeme ↗</Button>
              <Button href={profile.cv} variant="ghost-dark">
                CV
              </Button>
              <Button href={profile.github} variant="ghost-dark" external>
                GitHub
              </Button>
              <Button href={profile.linkedin} variant="ghost-dark" external>
                LinkedIn
              </Button>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-cream/10 bg-ink text-cream/50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-[13.5px]">
          <p className="font-mono">© 2026 {profile.name}</p>
        </div>
      </footer>
    </>
  );
}
