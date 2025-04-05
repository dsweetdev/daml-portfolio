import React from "react";
import {
  AlertOctagon,
  Target,
  Braces,
  Shield,
  Slash,
  Code
} from "lucide-react";

export default function FraudAlert() {
  return (
    <section id="template-fraudalert" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-gray-600" />
            Fraud Alert
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
              The <code>FraudAlert</code> template models an official record that a vehicle is suspected of being involved in a fraud scheme.
              It is triggered by DMV or regulatory staff, and can be referenced by off-ledger or automated investigative systems.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><code>issuer : Party</code> — The entity flagging the VIN (e.g. DMV, regulator).</li>
              <li><code>vin : Text</code> — The vehicle under investigation.</li>
              <li><code>note : Text</code> — Optional annotation or description of the alert reason.</li>
            </ul>
          </div>

          {/* Authorization & Visibility */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-500" />
              Authorization & Visibility
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><strong>Signatory:</strong> <code>issuer</code></li>
            </ul>
          </div>

          {/* Choices */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Slash className="w-5 h-5 text-gray-500" />
              Choices
            </h3>
            <p>
              No choices are exposed on this contract. It exists for flagging, compliance signals, and external system reference.
            </p>
          </div>

          {/* Code */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Code className="w-5 h-5 text-gray-500" />
              Code
            </h3>
            <pre className="bg-gray-100 text-sm overflow-x-auto rounded p-4">
              <code>{`template FraudAlert
  with
    issuer : Party
    vin : Text
    note : Text
  where
    signatory issuer
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
