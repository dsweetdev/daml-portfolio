import React, { useState } from "react";
import TemplatesIndex from "./components/templates/TemplatesIndex";
import {
  AlertCircle,
  BookOpenText,
  ExternalLink,
  Lightbulb,
  Workflow,
  Linkedin,
  Mail,
  ScrollText

} from "lucide-react";

export default function App() {
  const [showCert, setShowCert] = useState(false);

  return (
    <div className="flex h-screen font-sans bg-[#E0E2E4] text-[#090F23]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <img className="mb-4 ml-6" src="./logo.png"/>
        <nav className="flex flex-col gap-2 text-blue-600">
          <a className="text-blue-600 hover:underline" href="#about">About the Developer</a>
          <a className="text-blue-600 hover:underline" href="#overview">The Project</a>
          <a className="text-blue-600 hover:underline" href="#implementation">Smart Contracts</a>
          <a className="text-blue-600 hover:underline" href="#daml">About DAML</a>
          <a className="text-blue-600 hover:underline" href="#security">Security & Governance</a>
          <a className="text-blue-600 hover:underline" href="#source-code">Source Code</a>
        </nav>

        <footer className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-200">
          © {new Date().getFullYear()} Dustin Sweet
          <br />
          Portfolio v1.0
        </footer>     
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 py-10 space-y-6">
        <div className="max-w-6xl mx-auto w-full">

          <div className="w-full max-w-screen-xl mx-auto space-y-10"> 
            {/* Hero Header */}
            <div className="glass-card">
              <h1 className="text-center text-4xl font-extrabold tracking-tight">
                Digitizing Vehicle Sales with Blockchain Smart Contracts
              </h1>
              <p className="text-center text-lg text-gray-600 mt-2">
                A Solutions Architect Portfolio Project in Secure DLT Design
              </p>
            </div>

            <div className="glass-card">
              {/* About the Developer */}
              <section id="about" className="space-y-6 scroll-mt-12">
                <h2 className="text-2xl font-bold  border-b border-gray-300 pb-2">About the Developer</h2>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* LEFT COLUMN: Image + Stacked Links */}
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src="/dev-profile.jpg"
                      alt="Dustin Sweet"
                      className="w-40 h-40 object-cover rounded-full shadow"
                    />
                    <div className="flex flex-col gap-2 text-blue-600">
                      <a
                        href="https://linkedin.com/in/dustin-sweet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-sm items-center gap-2 text-gray-800 hover:text-blue-800 transition-colors hover:underline"
                      >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn Profile
                      </a>
                      <a
                        href="mailto:dustinwsweet@gmail.com"
                        className="flex text-sm items-center gap-2 text-gray-800 hover:text-blue-800 transition-colors hover:underline"
                      >
                        <Mail className="w-5 h-5" />
                        dustinwsweet@gmail.com
                      </a>
                      <button
                        onClick={() => setShowCert(true)}
                        className="flex text-sm items-center gap-2 text-left text-gray-800 hover:text-blue-800 transition-colors hover:underline"
                      >
                        <ScrollText className="w-5 h-5" />
                        View DAML Certification
                      </button>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Bio */}
                  <div className="space-y-4 text-lg leading-relaxed text-gray-800">
                    <p>
                      Hi! I'm <strong>Dustin Sweet</strong>, a solutions architect and engineer with over 20 years of experience across development, security, and client-facing roles. After building a strong foundation at Microsoft, I led risk and security efforts for Intuit’s 15K+ app developer ecosystem, and later advised top U.S. banks and core providers at NYDIG — a top Bitcoin institution. In the blockchain space since 2017, I’ve architected a <a className="text-blue-800 hover:underline" href="https://dsweetdev.github.io/btc-lending/index.html" target="_blank">Bitcoin Lending Program</a> and built this smart contract portfolio as hands-on demonstrations of decentralized design and relentless curiosity. Today, I’m a software architect at the world’s leading corporate domain registrar, serving over half the Fortune 100 as clients.
                    </p>
                  </div>
                </div>


              </section>
            </div>

            {/* Certification Modal */}
            {showCert && (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full">
                  <button
                    onClick={() => setShowCert(false)}
                    className="absolute top-2 right-2 text-4xl font-bold text-gray-800 hover:text-black"
                  >
                    ×
                  </button>
                  <img
                    src="/cert-daml.png"
                    alt="DAML Associate Certification"
                    className="w-full h-auto rounded"
                  />
                  <p className="mt-4 text-sm text-gray-600 text-center">
                    <strong>Note:</strong> The Daml Associate certification was part of Digital Asset’s earlier certification offerings. As of 2025, the program has evolved into the{" "}
                    <a
                      href="https://www.digitalasset.com/training-and-certification"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Daml Fundamentals certification
                    </a>, reflecting new platform capabilities.
                  </p>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setShowCert(false)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="glass-card">
              {/* Overview Section */}
              <section id="overview" className="space-y-6 scroll-mt-12">
                <h2 className="text-2xl font-bold  border-b border-gray-300 pb-2">The Project</h2>
                <div className="text-gray-800 mb-3">
                  This project demonstrates a multi-party smart contract solution that replaces trust-based vehicle sales with secure, automated execution. Built using DAML Smart Contracts and deployable on Digital Asset's Canton blockchain, it aims to revolutionize today’s slow and risk-prone vehicle purchasing process. 
                  <div className="text-sm text-gray-500 italic mt-3">
                    Originally developed in <strong>October 2022</strong> and recently deployed as a portfolio project to showcase smart contract modeling and distributed systems implementation.
                  </div>                
                </div>

                {/* Problem & Solution Columns */}
                <div className="flex flex-col md:flex-row md:divide-x md:gap-12 mt-6">
                  <div className="flex-1 space-y-3 md:pr-6">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
                      <AlertCircle className="w-6 h-6 text-gray-600" />
                      The Problem
                    </h3>
                    <p className="text-gray-800">
                      Every day, thousands of vehicles change hands — but transactions are still built on trust, not technology. Sellers hand over paper titles. Buyers send funds with no guarantees. Government systems are slow, disconnected, and paper-based. The result is a process that’s vulnerable to fraud, prone to delays, and difficult to verify — especially when something goes wrong.
                    </p>    
                  </div>
                  <div className="flex-1 space-y-3 md:pl-6">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
                      <Lightbulb className="w-6 h-6 text-gray-500" />
                      The Solution
                    </h3>
                    <p className="text-gray-800">
                      By using Distributed Ledger Technology (DLT) and smart contracts, this system brings all the key players—buyer, seller, DMV, and marketplace—onto the same page. The transaction rules are executed in software code. Once both sides agree to a sale, everything else follows quickly and automatically: payment, title transfer, and legal ownership all just happen. No delays. No middlemen.
                    </p>          
                  </div>
                </div>

                {/* Diagram */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">  
                    <BookOpenText className="w-6 h-6 text-gray-600" />
                    How it Works
                  </h3>
                  <p className="text-gray-800 mb-4">
                    The system brings together four main participants: licensed dealerships, qualified buyers, the Department of Motor Vehicles, and the general public. Buyers are drawn from a pre-approved pool — resellers who have undergone <strong>KYC (Know Your Customer)</strong> verification. These credentials are recorded immutably for future trust and auditability.
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="/vehicleTrader.png"
                      alt="Vehicle Transfer Smart Contract Flow"
                      className="w-full max-w-5xl"
                    />
                  </div>
                </div>

                {/* Transaction Steps */}
                <div className="mt-12 text-gray-800">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900 mb-3">
                    <Workflow className="w-5 h-5 text-gray-600" />
                    A Complete Vehicle Transaction – Step by Step
                  </h3>
                  <p className="text-sm text-gray-500 pl-7 text-sm mt-0 mb-3">All steps are recorded immutably in the distributed blockchain ledger.</p>

                  <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 md:grid md:grid-cols-2 md:gap-8 md:divide-x md:divide-gray-200 space-y-8 md:space-y-0">

                    {/* Left Column */}
                    <div className="md:pr-6 space-y-8">

                      {/* Phase 1 */}
                      <div className="section-card card-hover">
                        <h4 className="text-lg font-semibold text-gray-800 mb-0">Phase 1: Listing & Offer</h4>
                        <small className="text-sm text-gray-500">A vehicle is listed and offers are submitted.</small>
                        <ol className="list-decimal space-y-2 pl-5 text-sm mt-3">
                          <li><strong>Vehicle Listed:</strong> A dealership creates a vehicle listing.</li>
                          <li><strong>Offer Submitted:</strong> A qualified buyer submits an offer.</li>
                          <li><strong>Offer Reviewed:</strong> The dealership accepts & issues invoice.</li>
                        </ol>
                      </div>

                      {/* Phase 2 */}
                      <div className="section-card card-hover">
                        <h4 className="text-lg font-semibold text-gray-800 mb-0">Phase 2: Processing Payment</h4>
                        <small className="text-sm text-gray-500">Funds are exchanged and the bill of sale is issued.</small>
                        <ol className="list-decimal space-y-2 pl-5 text-sm mt-3" start="4">
                          <li><strong>Invoice Paid:</strong> The buyer pays the invoice.</li>
                          <li><strong>Invoice Receipt:</strong> Dealership sends bill of sale.</li>
                          <li><strong>Vehicle Delivery:</strong> Parties arrange for delivery of vehicle.</li>
                        </ol>
                      </div>

                    </div>

                    {/* Right Column */}
                    <div className="md:pl-6 space-y-8">

                      {/* Phase 3 */}
                      <div className="section-card card-hover">
                        <h4 className="text-lg font-semibold text-gray-800 mb-0">Phase 3: Title Issuance</h4>
                        <small className="text-sm text-gray-500">Ownership is verified and digital title documents are generated.</small>
                        <ol className="list-decimal space-y-2 pl-5 text-sm mt-3" start="7">
                          <li><strong>Title Transfer Requested:</strong> Triggered to DMV.</li>
                          <li><strong>DMV Fraud Check:</strong> Ownership verified or flagged for fraud.</li>
                          <li><strong>Title Processed:</strong> Title and tax invoice sent to buyer.</li>
                        </ol>
                      </div>

                      {/* Phase 4 */}
                      <div className="section-card card-hover">
                        <h4 className="text-lg font-semibold text-gray-800 mb-0">Phase 4: Transfer History</h4>
                        <small className="text-sm text-gray-500">Anyone can retrieve the verified title history for a vehicle.</small>
                        <ol className="list-decimal space-y-2 pl-5 text-sm mt-3" start="10">
                          <li><strong>History Requested:</strong> A 3rd party pays fee for title lineage.</li>
                          <li><strong>History Delivered:</strong> Verifiable records returned to user.</li>
                        </ol>
                        <br/>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">The Disruption</h3>
                    <p className="text-lg font-medium">
                      <strong>Everything happens automatically — payment, title transfer, and legal ownership — once both parties agree.</strong>
                    </p>
                    <p className="mt-2">
                      No more wondering if the other party can be trusted, when the funds will clear, or waiting at the DMV.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="glass-card">
              {/* Smart Contracts */}
              <section id="implementation" className="scroll-mt-12">
                <h2 className="text-2xl font-bold space-y-6 mb-0">Smart Contract Templates (DAML Code)</h2>
                <p className="text-base text-gray-500 mb-6 border-b border-gray-300 pb-2">Each contract models a real-world action, from listing to title transfer.</p>
                <TemplatesIndex />
              </section>
            </div>

            <div className="glass-card">
              {/* About DAML */}
              <section id="daml" className="space-y-4 scroll-mt-12">
              <div className="flex items-center space-x-2 border-b border-gray-300 pb-2">
                <h2 className="text-2xl font-bold">About DAML</h2>
                <img src="./daml-logo.png" alt="DAML logo" className="h-6 w-6" />
              </div>

                <p>
                  <a
                    href="https://www.digitalasset.com/developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    DAML
                  </a> is an open-source smart contract language created by Digital Asset. Unlike general-purpose blockchain platforms, DAML is purpose-built for modeling workflows, rights, and obligations with precision and security — even across organizational boundaries. It enables developers to define distributed business logic in a single source of truth while abstracting away low-level ledger mechanics.
                </p>

                <p>
                  Contracts written in DAML are secure by design, featuring built-in data privacy, strict role-based authorization, and deterministic execution. These capabilities are critical for use in <strong>regulated industries</strong>, including finance, supply chain, and healthcare — where auditability, data isolation, and compliance boundaries are non-negotiable.
                </p>

                <p>
                  This project is for deployment on the <a
                    href="https://docs.daml.com/canton/usermanual/installation.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >Canton network</a>, a privacy-enabled, horizontally scalable DLT that supports zero-knowledge synchronization across parties. Canton offers the best of both worlds: decentralized trust with the performance, confidentiality, and interoperability needed by modern enterprise systems.
                </p>

                <p>
                  DAML has been adopted by leading financial institutions and market infrastructure providers to build high-assurance distributed applications. For this project, I selected DAML and Canton to model a real-world, institutional-grade DLT scenario with enforceable logic, transparent governance, and secure data sharing.
                </p>

                <h3 className="text-xl font-semibold mt-8">Canton vs. Other Permissioned Ledgers</h3>
                  <p className="text-md text-gray-800 mb-4">
                    A high-level comparison of Canton against other enterprise DLT platforms:
                  </p>

                  <div className="overflow-auto">
                    <table className="min-w-full text-left text-sm border border-gray-300 rounded">
                      <thead className="bg-gray-100 font-semibold">
                        <tr>
                          <th className="border px-4 py-2">Feature</th>
                          <th className="border px-4 py-2">Canton</th>
                          <th className="border px-4 py-2">Hyperledger Fabric</th>
                          <th className="border px-4 py-2">Corda</th>
                          <th className="border px-4 py-2">Quorum</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="border px-4 py-2">Privacy Model</td>
                          <td className="border px-4 py-2">Data minimized by default; Zero-Knowledge sync</td>
                          <td className="border px-4 py-2">Channel-based; coarse-grained</td>
                          <td className="border px-4 py-2">Point-to-point per transaction</td>
                          <td className="border px-4 py-2">Public + private tx partitions</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">Scalability</td>
                          <td className="border px-4 py-2">Horizontally scalable network of domains</td>
                          <td className="border px-4 py-2">Limited by ordering service</td>
                          <td className="border px-4 py-2">Limited peer-to-peer model</td>
                          <td className="border px-4 py-2">Ethereum-derived performance</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Smart Contract Language</td>
                          <td className="border px-4 py-2">DAML (high-level, safe, strongly typed)</td>
                          <td className="border px-4 py-2">Chaincode (e.g., Go, Java)</td>
                          <td className="border px-4 py-2">JVM-based CorDapps (Java, Kotlin)</td>
                          <td className="border px-4 py-2">Solidity (Ethereum-compatible)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">Governance & Interop</td>
                          <td className="border px-4 py-2">Modular domains, interoperable across parties</td>
                          <td className="border px-4 py-2">Channel & org-specific policies</td>
                          <td className="border px-4 py-2">Notaries enforce consensus rules</td>
                          <td className="border px-4 py-2">Permissioning via smart contracts</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Use Cases</td>
                          <td className="border px-4 py-2">Finance, post-trade, custody, compliance</td>
                          <td className="border px-4 py-2">Supply chain, provenance</td>
                          <td className="border px-4 py-2">Bilateral trade, financial agreements</td>
                          <td className="border px-4 py-2">Enterprise DeFi, tokenization</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-2 text-sm text-gray-500 italic">
                      This comparison reflects the state of these DLT platforms as of October 2022, when this project was completed. Capabilities and adoption may have evolved since that time.
                    </p>

                  </div>

              </section>
            </div>

            <div className="glass-card">
              {/* Security & Governance */}        
              <section id="security" className="space-y-6 scroll-mt-12">
                <h2 className="text-2xl font-bold border-b border-gray-300 pb-2">Security & Governance</h2>

                <p>
                  Every contract in the system is built with security and auditability as first principles. Access is enforced through DAML’s fine-grained authorization model, using <strong>signatories, observers, and well-scoped choice controllers</strong>. This ensures that only the intended participants can initiate, observe, or modify any state.
                </p>

                <p>
                  Buyer onboarding relies on a pre-verification process (KYC) handled off-chain, with immutable credential references stored on-ledger. While the KYC workflow is out of scope for this PoC, the architecture assumes integration with an institutional-grade <strong>identity verification and custody system</strong>.
                </p>

                <p>
                  Each interaction is deterministic and logged immutably, supporting full <strong>audit trails</strong> and alignment with security frameworks like <em>NIST, ISO 27001</em>, and <em>CCSS</em>. The platform models <strong>enterprise DLT principles</strong>—such as privacy by design, scoped data visibility, and zero-trust boundaries—making it suitable for regulated markets.
                </p>

                <p>
                  Smart contract flows are resilient to abuse through <strong>non-consuming choices</strong>, assert-based validation, and deterministic control over contract evolution. Compliance concerns—such as role separation, transaction finality, and auditability—are modeled directly in code rather than deferred to process.
                </p>
              </section>
            </div>

            <div className="glass-card">
              <section id="source-code" className="space-y-6 scroll-mt-12">
                <h2 className="text-2xl font-bold border-b border-gray-300 pb-2">Source Code</h2>

                <p>
                  The complete project is available on GitHub, including all smart contract templates, test scripts, and supporting documentation.  
                  You can explore the code, review contract logic, or clone the repository for your own experiments.
                </p>

                <a
                  href="https://github.com/dustinwsweet/vehicleTrader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
                >
                  <ExternalLink className="w-5 h-5" />
                  View the GitHub Repository
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
