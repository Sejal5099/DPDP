import { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { COURSE_MODULES, COURSE_REFERENCE_DATE } from '../data/courseIndex';
import {
  COMMENCEMENT_MILESTONES,
  STATUTORY_REFERENCE_INDEX,
} from '../data/legalReferenceData';
import { EnforcementStatus } from '../types/course';
import { StatusTag } from './StatusTag';

export function LegalReferenceView() {
  const [statusFilter, setStatusFilter] = useState<'all' | EnforcementStatus>('all');

  const filteredRefs = STATUTORY_REFERENCE_INDEX.filter(
    (item) => statusFilter === 'all' || item.status === statusFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-cyan-800 dark:text-cyan-400">
          Primary Statutory Reference · Calibrated {COURSE_REFERENCE_DATE}
        </span>
        <h1 className="font-display text-3xl font-semibold text-slate-950 dark:text-white tracking-tight">
          Commencement Schedule, Penalty Caps &amp; Source PDFs
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
          Verify exact enforcement effective dates across the DPDP Act 2023, DPDP Rules 2025, and active Indian BFSI sectoral laws.
        </p>
      </div>

      {/* Phased Commencement Table */}
      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          Phased DPDP Commencement Timetable
        </h2>
        <div className="overflow-x-auto bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xs rounded-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Effective Date</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Phase &amp; Notification</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Provisions</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {COMMENCEMENT_MILESTONES.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap tabular-nums">
                    {m.dateLabel}
                  </td>
                  <td className="px-4 py-3 text-slate-800 dark:text-slate-200">
                    <div className="font-semibold">{m.phase}</div>
                    <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {m.notificationRef}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {m.provisions}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <StatusTag status={m.status} compact />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Filterable Statutory Index */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            BFSI &amp; DPDP Provision Index
          </h2>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {[
              { id: 'all', label: 'All Provisions' },
              { id: 'in-force', label: 'DPDP In Force' },
              { id: 'independent-law', label: 'Active Sector Laws' },
              { id: 'may-2027', label: 'Scheduled May 2027' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setStatusFilter(f.id as 'all' | EnforcementStatus)}
                className={`px-3 py-1.5 rounded-sm font-medium border transition-colors ${
                  statusFilter === f.id
                    ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 border-slate-900 dark:border-cyan-500 font-semibold'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRefs.map((ref) => (
            <article
              key={ref.id}
              className="bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xs rounded-sm p-4 space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-cyan-800 dark:text-cyan-400">
                  {ref.law} · {ref.effectiveDate}
                </span>
                <StatusTag status={ref.status} compact />
              </div>
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                {ref.provision}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{ref.summary}</p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <strong className="text-slate-800 dark:text-slate-200">BFSI Impact:</strong> {ref.bfsiNote}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Original Course Module PDFs */}
      <section className="space-y-4">
        <div>
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Source Coursework PDF Library
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Open the original six module textbooks directly in a new tab for deeper reading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {COURSE_MODULES.map((mod) => (
            <a
              key={mod.id}
              href={mod.pdfAssetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-cyan-700 dark:hover:border-cyan-400 rounded-sm p-4 flex items-start justify-between gap-3 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-cyan-800 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                    Module {mod.id} PDF · {mod.durationLabel}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-900 dark:group-hover:text-cyan-300 mt-0.5">
                    {mod.shortTitle}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-cyan-800 dark:group-hover:text-cyan-400 shrink-0" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
