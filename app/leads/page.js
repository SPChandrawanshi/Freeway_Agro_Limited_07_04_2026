import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

const leads = [
  {
    company: "Green Harvest Foods",
    need: "Bulk cassava chips supply",
    status: "Qualified",
  },
  {
    company: "Eco Feed Mills",
    need: "Cassava-based animal feed",
    status: "In Discussion",
  },
  {
    company: "BioPack Africa",
    need: "Agro-fibre sourcing partnership",
    status: "Proposal Sent",
  },
];

export default function LeadsPage() {
  return (
    <SectionWrapper
      eyebrow="Leads"
      title="Sales Leads Dashboard"
      description="This route is now active. You can use it for lead tracking, CRM export sync, or contact qualification."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {leads.map((lead) => (
          <article key={lead.company} className="premium-card p-5">
            <h3 className="text-lg font-bold text-[var(--primary)]">{lead.company}</h3>
            <p className="mt-2 text-sm text-slate-600">{lead.need}</p>
            <p className="mt-3 inline-flex rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
              {lead.status}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/contact" className="btn-primary">
          Convert Lead to Contact
        </Link>
      </div>
    </SectionWrapper>
  );
}
