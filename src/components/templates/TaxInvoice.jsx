import React from "react";
import {
  Receipt,
  Target,
  Braces,
  Shield,
  Zap,
  Code
} from "lucide-react";

export default function TaxInvoice() {
  return (
    <section id="template-taxinvoice" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <Receipt className="w-5 h-5 text-gray-600" />
            Tax Invoice
          </div>
        </summary>

        <div className="p-6 space-y-8 text-gray-800">
          {/* Purpose & Role */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-gray-500" />
              Purpose & Role
            </h3>
            <p>
              The <code>TaxInvoice</code> template models a state-imposed tax obligation that follows a successful title issuance.
              It creates a structured demand for payment tied to a specific vehicle and may feed into external compliance systems.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><code>dmv : Party</code> — The issuing authority (e.g. state revenue agency).</li>
              <li><code>owner : Party</code> — The party responsible for the tax.</li>
              <li><code>vin : Text</code> — The vehicle associated with this tax invoice.</li>
              <li><code>amount : Decimal</code> — The amount owed.</li>
            </ul>
          </div>

          {/* Authorization & Visibility */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-500" />
              Authorization & Visibility
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><strong>Signatory:</strong> <code>dmv</code></li>
              <li><strong>Observer:</strong> <code>owner</code></li>
            </ul>
          </div>

          {/* Choices */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-gray-500" />
              Choices (Available Actions)
            </h3>

            <div className="space-y-2">
              <h4 className="font-semibold">Acknowledge</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> <code>owner</code></li>
                <li><strong>Consumes:</strong> Yes</li>
                <li><strong>Returns:</strong> Nothing</li>
              </ul>
              <p className="mt-2">
                The vehicle owner acknowledges the obligation.
                In a production implementation, this could trigger a payment gateway or reporting workflow.
              </p>
            </div>
          </div>

          {/* Code */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Code className="w-5 h-5 text-gray-500" />
              Code
            </h3>
            <pre className="bg-gray-100 text-sm overflow-x-auto rounded p-4">
              <code>{`template TaxInvoice
  with
    dmv : Party
    owner : Party
    vin : Text
    amount : Decimal
  where
    signatory dmv
    observer owner

    choice Acknowledge : ()
      controller owner
      do return ()
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
