import React from "react";
import {
  RefreshCw,
  Target,
  Braces,
  Shield,
  Zap,
  Code
} from "lucide-react";

export default function TitleTransferRequest() {
  return (
    <section id="template-titletransferrequest" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-gray-600" />
            Title Transfer Request
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
              The <code>TitleTransferRequest</code> contract acts as an application for title issuance and records the buyer’s intention
              to obtain a formal title. It is issued after a <code>BillOfSale</code> is acknowledged by the buyer.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><code>buyer : Party</code> — The new vehicle owner applying for the title.</li>
              <li><code>vin : Text</code> — The unique identifier of the vehicle.</li>
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
            </ul>
          </div>

          {/* Choices */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-gray-500" />
              Choices (Available Actions)
            </h3>

            <div className="space-y-2">
              <h4 className="font-semibold">IssueTitle</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> DMV operator (hardcoded as <code>dmv</code>)</li>
                <li><strong>Consumes:</strong> Yes</li>
                <li><strong>Returns:</strong> A new <code>Title</code> contract</li>
              </ul>
              <p className="mt-2">
                This choice allows the DMV (modeled as a fixed party) to issue a new <code>Title</code> after verifying the transfer request.
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
              <code>{`template TitleTransferRequest
  with
    buyer : Party
    vin : Text
  where
    signatory buyer

    choice IssueTitle : ContractId Title
      controller dmv
      do
        create Title with
          owner = buyer
          vin
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
