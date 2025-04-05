import React from "react";
import {
  BadgeCheck,
  Target,
  Braces,
  Shield,
  Zap,
  Code
} from "lucide-react";

export default function Title() {
  return (
    <section id="template-title" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-gray-600" />
            Title
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
              The <code>Title</code> contract represents legal vehicle ownership.
              It is issued by the DMV following a successful transfer request.
              It lives on-ledger and may be revoked, modified, or transferred under future processes.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><code>owner : Party</code> — The current legal owner of the vehicle.</li>
              <li><code>vin : Text</code> — The vehicle’s VIN identifier.</li>
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
              <h4 className="font-semibold">Revoke</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> <code>dmv</code></li>
                <li><strong>Consumes:</strong> Yes</li>
                <li><strong>Returns:</strong> Nothing</li>
              </ul>
              <p className="mt-2">
                This consuming choice is used to revoke a title due to compliance issues or system-wide governance processes.
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
              <code>{`template Title
  with
    owner : Party
    vin : Text
  where
    signatory dmv
    observer owner

    choice Revoke : ()
      controller dmv
      do return ()
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
