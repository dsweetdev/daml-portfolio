import React from "react";
import {
  FileSignature,
  Target,
  Braces,
  Shield,
  Zap,
  Code
} from "lucide-react";

export default function BillOfSale() {
  return (
    <section id="template-billofsale" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <FileSignature className="w-5 h-5 text-gray-600" />
            Bill of Sale
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
              The <code>BillOfSale</code> contract represents legal transfer of ownership from the seller to the buyer
              following a completed and paid transaction. It is triggered by successful payment of an <code>Invoice</code>.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><code>seller : Party</code> — The original owner of the vehicle.</li>
              <li><code>buyer : Party</code> — The new legal owner of the vehicle.</li>
              <li><code>vin : Text</code> — The unique identifier of the vehicle being transferred.</li>
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
              <h4 className="font-semibold">Acknowledge</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> <code>buyer</code></li>
                <li><strong>Consumes:</strong> Yes</li>
                <li><strong>Returns:</strong> A <code>TitleTransferRequest</code> contract</li>
              </ul>
              <p className="mt-2">
                This consuming choice is used by the buyer to confirm receipt and acknowledge legal transfer of the vehicle.
                Once confirmed, a <code>TitleTransferRequest</code> is issued to initiate DMV workflow.
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
              <code>{`template BillOfSale
  with
    seller : Party
    buyer : Party
    vin : Text
  where
    signatory seller
    observer buyer

    choice Acknowledge : ContractId TitleTransferRequest
      controller buyer
      do
        create TitleTransferRequest with
          buyer
          vin
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
