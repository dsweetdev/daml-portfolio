import React from "react";
import {
  FileSignature,
  Target,
  Braces,
  Shield,
  Zap,
  Code
} from "lucide-react";

export default function PurchaseOffer() {
  return (
    <section id="template-purchaseoffer" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <FileSignature className="w-5 h-5 text-gray-600" />
            Purchase Offer
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
              The <code>PurchaseOffer</code> template captures a buyer’s submitted bid in response to a <code>Listing</code>.
              Once created, it links the buyer and seller and locks in the proposed price for later reference by downstream contracts.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><code>buyer : Party</code> — The buyer who is making the offer.</li>
              <li><code>seller : Party</code> — The original listing creator.</li>
              <li><code>bidPrice : Decimal</code> — The offer amount proposed by the buyer.</li>
              <li><code>vin : Text</code> — Unique vehicle identifier.</li>
            </ul>
          </div>

          {/* Authorization & Visibility */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-500" />
              Authorization & Visibility
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><strong>Signatory:</strong> <code>buyer</code></li>
              <li><strong>Observer:</strong> <code>seller</code></li>
            </ul>
          </div>

          {/* Choices */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-gray-500" />
              Choices (Available Actions)
            </h3>

            <div className="space-y-2">
              <h4 className="font-semibold">Accept</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> <code>seller</code></li>
                <li><strong>Consumes:</strong> Yes</li>
                <li><strong>Returns:</strong> A new <code>Invoice</code> contract</li>
              </ul>
              <p className="mt-2">
                The seller uses this consuming choice to accept a bid and move forward with closing the transaction.
                It creates a downstream <code>Invoice</code> with the agreed price and involved parties.
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
              <code>{`template PurchaseOffer
  with
    buyer : Party
    seller : Party
    bidPrice : Decimal
    vin : Text
  where
    signatory buyer
    observer seller

    choice Accept : ContractId Invoice
      controller seller
      do
        create Invoice with
          buyer
          seller
          amount = bidPrice
          vin
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
