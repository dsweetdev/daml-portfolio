import React from "react";
import {
  Receipt,
  Target,
  Braces,
  Shield,
  Zap,
  Code
} from "lucide-react";

export default function Invoice() {
  return (
    <section id="template-invoice" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <Receipt className="w-5 h-5 text-gray-600" />
            Invoice
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
              The <code>Invoice</code> represents a formal request for payment issued by the seller to the buyer following acceptance of a purchase offer.
              It contains the payment terms and relevant transaction details. Once paid, this contract is archived and followed by a <code>BillOfSale</code>.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><code>seller : Party</code> — The recipient of the funds (and listing owner).</li>
              <li><code>buyer : Party</code> — The party responsible for paying the invoice.</li>
              <li><code>amount : Decimal</code> — Total amount due, derived from the accepted offer.</li>
              <li><code>vin : Text</code> — Identifies the vehicle tied to this transaction.</li>
            </ul>
          </div>

          {/* Authorization & Visibility */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-500" />
              Authorization & Visibility
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><strong>Signatory:</strong> <code>seller</code></li>
              <li><strong>Observer:</strong> <code>buyer</code></li>
            </ul>
          </div>

          {/* Choices */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-gray-500" />
              Choices (Available Actions)
            </h3>

            <div className="space-y-2">
              <h4 className="font-semibold">Pay</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> <code>buyer</code></li>
                <li><strong>Consumes:</strong> Yes</li>
                <li><strong>Returns:</strong> A <code>BillOfSale</code> contract</li>
              </ul>
              <p className="mt-2">
                When the buyer pays the invoice, this consuming choice creates a <code>BillOfSale</code> which formally transfers legal ownership.
                This represents the financial settlement portion of the lifecycle.
              </p>
            </div>

            <div className="space-y-2 mt-6">
              <h4 className="font-semibold">Cancel</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> <code>seller</code></li>
                <li><strong>Consumes:</strong> Yes</li>
                <li><strong>Returns:</strong> Nothing</li>
              </ul>
              <p className="mt-2">
                If a deal falls through, the seller can cancel the invoice. This is useful for cases where a buyer cannot follow through with payment.
                The seller may then reactivate the original listing.
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
              <code>{`template Invoice
  with
    seller : Party
    buyer : Party
    amount : Decimal
    vin : Text
  where
    signatory seller
    observer buyer

    choice Pay : ContractId BillOfSale
      controller buyer
      do
        create BillOfSale with
          buyer
          seller
          vin

    choice Cancel : ()
      controller seller
      do
        return ()
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
