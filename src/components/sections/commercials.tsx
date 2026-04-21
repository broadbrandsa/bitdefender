'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'

type TabId =
  | 'revenue-share'
  | 'standard-pricing'
  | 'wholesale-pricing'

const tabs: { id: TabId; label: string }[] = [
  { id: 'revenue-share', label: 'DSG Revenue Share' },
  { id: 'standard-pricing', label: 'DSG Standard Pricing' },
  { id: 'wholesale-pricing', label: 'DSG Wholesale Pricing' },
]

// ——————————————————————————————————————————————————————————————
// Shared row data
// ——————————————————————————————————————————————————————————————

const fmt = (n: number, digits = 2) =>
  n.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })

// ——————————————————————————————————————————————————————————————
// Table components
// ——————————————————————————————————————————————————————————————

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-3">
      <span className="w-1 h-6 bg-bd-blue rounded-full" />
      {children}
    </h3>
  )
}

function TableShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/50 bg-white">
      <table className="w-full text-sm">{children}</table>
    </div>
  )
}

function Th({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      className={`px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-bd-blue bg-bd-slate border-b border-border/50 ${className}`}
    >
      {children}
    </th>
  )
}

function Td({
  children,
  className = '',
  bold = false,
}: {
  children: React.ReactNode
  className?: string
  bold?: boolean
}) {
  return (
    <td
      className={`px-4 py-3 border-b border-border/30 text-muted-foreground ${
        bold ? 'font-semibold text-foreground' : ''
      } ${className}`}
    >
      {children}
    </td>
  )
}

// ——————————————————————————————————————————————————————————————
// TAB 1 — DSG Revenue Share
// ——————————————————————————————————————————————————————————————

function RevenueShareTab() {
  const localRows = [
    { desc: 'BD Security w/DIP 1 Device', usd: 2.7, roe: 16.9, zar: 45.63, revUsd: 1.35, revZar: 22.815 },
    { desc: 'BD Security w/DIP 5 Devices', usd: 5.95, roe: 16.9, zar: 100.555, revUsd: 2.975, revZar: 50.2775 },
    { desc: 'BD Security w/DIP 10 Devices', usd: 8.5, roe: 16.9, zar: 143.65, revUsd: 4.25, revZar: 71.825 },
    { desc: 'BD Security w/DWM & VPN 1 Device', usd: 4.6, roe: 16.9, zar: 77.74, revUsd: 2.3, revZar: 38.87 },
    { desc: 'BD Security w/DWM & VPN 5 Devices', usd: 7.85, roe: 16.9, zar: 132.665, revUsd: 3.925, revZar: 66.3325 },
    { desc: 'BD Security w/DWM & VPN 10 Devices', usd: 13.05, roe: 16.9, zar: 220.545, revUsd: 6.525, revZar: 110.2725 },
  ]

  const intlRows = [
    { desc: 'BD Security w/DIP 1 Device', usd: 2.7, revUsd: 1.35 },
    { desc: 'BD Security w/DIP 5 Devices', usd: 5.95, revUsd: 2.975 },
    { desc: 'BD Security w/DIP 10 Devices', usd: 8.5, revUsd: 4.25 },
    { desc: 'BD Security w/DWM & VPN 1 Device', usd: 4.6, revUsd: 2.3 },
    { desc: 'BD Security w/DWM & VPN 5 Devices', usd: 7.85, revUsd: 3.925 },
    { desc: 'BD Security w/DWM & VPN 10 Devices', usd: 13.05, revUsd: 6.525 },
  ]

  return (
    <div className="space-y-12">
      {/* Local */}
      <div>
        <SectionTitle>Local Wholesale Pricing — Monthly (ZAR)</SectionTitle>
        <p className="text-xs text-muted-foreground mb-4">
          Revenue Share: <strong className="text-bd-blue">50% / 50%</strong> · ROE: 1 USD = 16.9 ZAR
        </p>
        <TableShell>
          <thead>
            <tr>
              <Th>Description</Th>
              <Th className="text-right">Recommended (USD excl. VAT)</Th>
              <Th className="text-right">ROE</Th>
              <Th className="text-right">Recommended (ZAR excl. VAT)</Th>
              <Th className="text-right">50% Rev Share (USD)</Th>
              <Th className="text-right">50% Rev Share (ZAR)</Th>
            </tr>
          </thead>
          <tbody>
            {localRows.map((r, i) => (
              <tr key={r.desc} className={i === 3 ? 'border-t-2 border-bd-blue/10' : ''}>
                <Td bold>{r.desc}</Td>
                <Td className="text-right">${fmt(r.usd)}</Td>
                <Td className="text-right">{fmt(r.roe, 1)}</Td>
                <Td className="text-right">R {fmt(r.zar, 3)}</Td>
                <Td className="text-right">${fmt(r.revUsd, 3)}</Td>
                <Td className="text-right">R {fmt(r.revZar, 4)}</Td>
              </tr>
            ))}
            <tr className="bg-bd-blue/[0.03]">
              <Td bold>Dashboard Activation &amp; Set Up (Once Off)</Td>
              <Td className="text-right" bold>$2,500.00</Td>
              <Td className="text-right">16.9</Td>
              <Td className="text-right" bold>R 42,250.00</Td>
              <Td className="text-right text-muted-foreground/60">—</Td>
              <Td className="text-right text-muted-foreground/60">—</Td>
            </tr>
          </tbody>
        </TableShell>
      </div>

      {/* International */}
      <div>
        <SectionTitle>International Wholesale Pricing — Monthly (USD)</SectionTitle>
        <p className="text-xs text-muted-foreground mb-4">
          Revenue Share: <strong className="text-bd-blue">50% / 50%</strong>
        </p>
        <TableShell>
          <thead>
            <tr>
              <Th>Description</Th>
              <Th className="text-right">Recommended (USD excl. VAT)</Th>
              <Th className="text-right">50% Rev Share (USD)</Th>
            </tr>
          </thead>
          <tbody>
            {intlRows.map((r, i) => (
              <tr key={r.desc} className={i === 3 ? 'border-t-2 border-bd-blue/10' : ''}>
                <Td bold>{r.desc}</Td>
                <Td className="text-right">${fmt(r.usd)}</Td>
                <Td className="text-right">${fmt(r.revUsd, 3)}</Td>
              </tr>
            ))}
            <tr className="bg-bd-blue/[0.03]">
              <Td bold>Dashboard Activation &amp; Set Up (Once Off)</Td>
              <Td className="text-right" bold>$2,500.00</Td>
              <Td className="text-right text-muted-foreground/60">—</Td>
            </tr>
          </tbody>
        </TableShell>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————————————————
// TAB 2 — DSG Standard Pricing
// ——————————————————————————————————————————————————————————————

function StandardPricingTab() {
  const rows = [
    { desc: 'BD Security w/DIP 1 Device', usd: 1.35, zar: 22.815 },
    { desc: 'BD Security w/DIP 5 Devices', usd: 2.975, zar: 50.2775 },
    { desc: 'BD Security w/DIP 10 Devices', usd: 4.25, zar: 71.825 },
    { desc: 'BD Security w/DWM & VPN 1 Device', usd: 2.3, zar: 38.87 },
    { desc: 'BD Security w/DWM & VPN 5 Devices', usd: 3.925, zar: 66.3325 },
    { desc: 'BD Security w/DWM & VPN 10 Devices', usd: 6.525, zar: 110.2725 },
  ]

  return (
    <div className="space-y-12">
      {/* Local */}
      <div>
        <SectionTitle>Local Pricing — Monthly (ZAR)</SectionTitle>
        <p className="text-xs text-muted-foreground mb-4">ROE: 1 USD = 16.9 ZAR</p>
        <TableShell>
          <thead>
            <tr>
              <Th>Description</Th>
              <Th className="text-right">Buy Price per Qty (USD)</Th>
              <Th className="text-right">ROE</Th>
              <Th className="text-right">Buy Price per Qty (ZAR)</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.desc} className={i === 3 ? 'border-t-2 border-bd-blue/10' : ''}>
                <Td bold>{r.desc}</Td>
                <Td className="text-right">${fmt(r.usd, 3)}</Td>
                <Td className="text-right">16.9</Td>
                <Td className="text-right">R {fmt(r.zar, 4)}</Td>
              </tr>
            ))}
            <tr className="bg-bd-blue/[0.03]">
              <Td bold>Dashboard Activation &amp; Set Up (Once Off)</Td>
              <Td className="text-right" bold>$2,500.00</Td>
              <Td className="text-right">16.9</Td>
              <Td className="text-right" bold>R 42,250.00</Td>
            </tr>
          </tbody>
        </TableShell>
      </div>

      {/* International */}
      <div>
        <SectionTitle>International Pricing — Monthly (USD)</SectionTitle>
        <TableShell>
          <thead>
            <tr>
              <Th>Description</Th>
              <Th className="text-right">Buy Price per Qty (USD)</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.desc} className={i === 3 ? 'border-t-2 border-bd-blue/10' : ''}>
                <Td bold>{r.desc}</Td>
                <Td className="text-right">${fmt(r.usd, 3)}</Td>
              </tr>
            ))}
            <tr className="bg-bd-blue/[0.03]">
              <Td bold>Dashboard Activation &amp; Set Up (Once Off)</Td>
              <Td className="text-right" bold>$2,500.00</Td>
            </tr>
          </tbody>
        </TableShell>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————————————————
// TAB 3 — DSG Wholesale Pricing
// ——————————————————————————————————————————————————————————————

function WholesalePricingTab() {
  const localRows = [
    { desc: 'BD Security w/DIP 1 Device', usd: 1.08, zar: 18.252, qty: 1000, total: 18252 },
    { desc: 'BD Security w/DIP 5 Devices', usd: 2.38, zar: 40.222, qty: 1000, total: 40222 },
    { desc: 'BD Security w/DIP 10 Devices', usd: 3.4, zar: 57.46, qty: 1000, total: 57460 },
    { desc: 'BD Security w/DWM & VPN 1 Device', usd: 1.84, zar: 31.096, qty: 1000, total: 31096 },
    { desc: 'BD Security w/DWM & VPN 5 Devices', usd: 3.14, zar: 53.066, qty: 1000, total: 53066 },
    { desc: 'BD Security w/DWM & VPN 10 Devices', usd: 5.22, zar: 88.218, qty: 1000, total: 88218 },
  ]

  const intlRows = [
    { desc: 'BD Security w/DIP 1 Device', usd: 1.08, qty: 1000, total: 1080 },
    { desc: 'BD Security w/DIP 5 Devices', usd: 2.38, qty: 1000, total: 2380 },
    { desc: 'BD Security w/DIP 10 Devices', usd: 3.4, qty: 1000, total: 3400 },
    { desc: 'BD Security w/DWM & VPN 1 Device', usd: 1.84, qty: 1000, total: 1840 },
    { desc: 'BD Security w/DWM & VPN 5 Devices', usd: 3.14, qty: 1000, total: 3140 },
    { desc: 'BD Security w/DWM & VPN 10 Devices', usd: 5.22, qty: 1000, total: 5220 },
  ]

  return (
    <div className="space-y-12">
      {/* Local */}
      <div>
        <SectionTitle>Local Wholesale Pricing — Monthly (ZAR)</SectionTitle>
        <p className="text-xs text-muted-foreground mb-4">
          Minimum quantity commit of <strong className="text-bd-blue">1,000 licences</strong> per product / SKU · ROE: 1 USD = 16.9 ZAR
        </p>
        <TableShell>
          <thead>
            <tr>
              <Th>Description</Th>
              <Th className="text-right">Buy Price (USD)</Th>
              <Th className="text-right">ROE</Th>
              <Th className="text-right">Buy Price (ZAR)</Th>
              <Th className="text-right">Min Qty Commit</Th>
              <Th className="text-right">Total Buy Price (ZAR)</Th>
            </tr>
          </thead>
          <tbody>
            {localRows.map((r, i) => (
              <tr key={r.desc} className={i === 3 ? 'border-t-2 border-bd-blue/10' : ''}>
                <Td bold>{r.desc}</Td>
                <Td className="text-right">${fmt(r.usd)}</Td>
                <Td className="text-right">16.9</Td>
                <Td className="text-right">R {fmt(r.zar, 3)}</Td>
                <Td className="text-right">{r.qty.toLocaleString()}</Td>
                <Td className="text-right" bold>R {r.total.toLocaleString()}</Td>
              </tr>
            ))}
            <tr className="bg-bd-blue/[0.05]">
              <Td bold className="text-bd-blue">Total</Td>
              <Td className="text-right">—</Td>
              <Td className="text-right">—</Td>
              <Td className="text-right">—</Td>
              <Td className="text-right">—</Td>
              <Td className="text-right text-bd-blue" bold>R 288,314</Td>
            </tr>
            <tr>
              <Td bold>Dashboard Activation &amp; Set Up (Once Off)</Td>
              <Td className="text-right">$2,500.00</Td>
              <Td className="text-right">16.9</Td>
              <Td className="text-right">R 42,250.00</Td>
              <Td className="text-right">1</Td>
              <Td className="text-right" bold>R 42,250</Td>
            </tr>
            <tr className="bg-bd-blue/10">
              <Td bold className="text-foreground">Grand Total</Td>
              <Td>—</Td>
              <Td>—</Td>
              <Td>—</Td>
              <Td>—</Td>
              <Td className="text-right text-bd-blue text-base" bold>R 330,564</Td>
            </tr>
          </tbody>
        </TableShell>
      </div>

      {/* International */}
      <div>
        <SectionTitle>International Wholesale Pricing — Monthly (USD)</SectionTitle>
        <p className="text-xs text-muted-foreground mb-4">
          Minimum quantity commit of <strong className="text-bd-blue">1,000 licences</strong> per product / SKU
        </p>
        <TableShell>
          <thead>
            <tr>
              <Th>Description</Th>
              <Th className="text-right">Buy Price (USD)</Th>
              <Th className="text-right">Min Qty Commit</Th>
              <Th className="text-right">Total Buy Price (USD)</Th>
            </tr>
          </thead>
          <tbody>
            {intlRows.map((r, i) => (
              <tr key={r.desc} className={i === 3 ? 'border-t-2 border-bd-blue/10' : ''}>
                <Td bold>{r.desc}</Td>
                <Td className="text-right">${fmt(r.usd)}</Td>
                <Td className="text-right">{r.qty.toLocaleString()}</Td>
                <Td className="text-right" bold>${r.total.toLocaleString()}</Td>
              </tr>
            ))}
            <tr className="bg-bd-blue/[0.05]">
              <Td bold className="text-bd-blue">Total</Td>
              <Td>—</Td>
              <Td>—</Td>
              <Td className="text-right text-bd-blue" bold>$17,060</Td>
            </tr>
            <tr>
              <Td bold>Dashboard Activation &amp; Set Up (Once Off)</Td>
              <Td className="text-right">$2,500.00</Td>
              <Td className="text-right">1</Td>
              <Td className="text-right" bold>$2,500</Td>
            </tr>
            <tr className="bg-bd-blue/10">
              <Td bold className="text-foreground">Grand Total</Td>
              <Td>—</Td>
              <Td>—</Td>
              <Td className="text-right text-bd-blue text-base" bold>$19,560</Td>
            </tr>
          </tbody>
        </TableShell>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————————————————
// Main component
// ——————————————————————————————————————————————————————————————

export default function Commercials() {
  const [active, setActive] = useState<TabId>('revenue-share')

  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-white text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Commercials
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-4">
              Detailed Pricing
              <br />
              <span className="text-bd-blue">&amp; Commercials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full pricing tables across revenue share, standard, wholesale and margin calculator scenarios.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tab Switcher */}
        <AnimateOnScroll animation="fade-up" delay={0.05}>
          <div
            role="tablist"
            aria-label="Commercials tabs"
            className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 rounded-2xl bg-white border border-border/50 max-w-4xl mx-auto"
          >
            {tabs.map((t) => {
              const isActive = active === t.id
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-bd-blue text-white shadow-sm'
                      : 'text-muted-foreground hover:bg-bd-slate hover:text-foreground'
                  }`}
                >
                  {t.label}
                </button>
              )
            })}
          </div>
        </AnimateOnScroll>

        {/* Tab Content */}
        <AnimateOnScroll animation="fade-up" delay={0.1} key={active}>
          <div className="p-6 lg:p-8 rounded-2xl bg-bd-slate">
            {active === 'revenue-share' && <RevenueShareTab />}
            {active === 'standard-pricing' && <StandardPricingTab />}
            {active === 'wholesale-pricing' && <WholesalePricingTab />}
          </div>
        </AnimateOnScroll>

        {/* Footer note */}
        <p className="mt-8 text-xs text-muted-foreground/70 text-center max-w-3xl mx-auto">
          All prices exclude Tax &amp; Duties. ROE: 1 USD = 16.9 ZAR (calculated on the last day of invoice).
          Figures sourced from the Bitdefender Commercials sheet.
        </p>
      </div>
    </section>
  )
}
