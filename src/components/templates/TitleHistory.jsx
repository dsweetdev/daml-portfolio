import React from "react";
import {
  BookOpenText,
  Target,
  Braces,
  Shield,
  Slash,
  Code
} from "lucide-react";

export default function TitleHistory() {
  return (
    <section id="template-titlehistory" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <BookOpenText className="w-5 h-5 text-gray-600" />
            Title History
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
              The <code>TitleHistory</code> contract is created whenever a <code>Title</code> is revoked or reissued.
              It serves as an immutable record of ownership lineage and is useful for audits, fraud analysis, and governance tracking.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><code>previousOwner : Party</code> — The former titleholder.</li>
              <li><code>vin : Text</code> — The vehicle identifier.</li>
              <li><code>reason : Text</code> — Free-text justification or system rationale for the title change.</li>
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
              <li><strong>Observer:</strong> <code>previousOwner</code></li>
            </ul>
          </div>

          {/* Choices */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Slash className="w-5 h-5 text-gray-500" />
              Choices
            </h3>
            <p>
              There are no choices on this contract.
              It is created only through internal workflows when titles are revoked or updated.
            </p>
          </div>

          {/* Code */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Code className="w-5 h-5 text-gray-500" />
              Code
            </h3>
            <pre className="bg-gray-100 text-sm overflow-x-auto rounded p-4">
              <code>{`template TitleHistory
  with
    previousOwner : Party
    vin : Text
    reason : Text
  where
    signatory dmv
    observer previousOwner
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
