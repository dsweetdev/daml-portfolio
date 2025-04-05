import React from "react";
import {
  Braces,
  Code,
  CarFront,
  Shield,
  Repeat,
  Target,
  Zap
} from "lucide-react";

export default function Listing() {
  return (
    <section id="template-listing" className="scroll-mt-24">
      <details className="mb-4 border rounded">
        <summary className="bg-gray-100 px-4 py-2 cursor-pointer font-semibold text-lg">
          <div className="inline-flex items-center gap-2">
            <CarFront className="w-5 h-5 text-gray-600" />
            Listing
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
              The <code>Listing</code> template models a live vehicle listing posted by a dealership (the <code>seller</code>).
              It serves as the entry point into the system for buyers who wish to purchase a vehicle.
              Only pre-approved participants can interact with it, enforcing exclusivity and compliance with the platform's vetting process.
            </p>
            <p>
              This contract allows a seller to publish key details about the vehicle, set a price,
              and specify which buyers are authorized to make offers.
              Buyers interact with the listing by invoking the <code>MakeOffer</code> choice,
              while the seller can update the listing’s state.
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Braces className="w-5 h-5 text-gray-500" />
              Fields (Data Structure)
            </h3>
            <table className="w-full table-auto border border-collapse text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-2 py-1 text-left">Field</th>
                  <th className="border px-2 py-1 text-left">Type</th>
                  <th className="border px-2 py-1 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">seller</td><td className="border px-2 py-1">Party</td><td className="border px-2 py-1">The dealership or individual creating the listing.</td></tr>
                <tr><td className="border px-2 py-1">qualifiedBuyers</td><td className="border px-2 py-1">[Party]</td><td className="border px-2 py-1">A predefined list of parties who are allowed to make offers on this listing.</td></tr>
                <tr><td className="border px-2 py-1">vehicle</td><td className="border px-2 py-1">Vehicle</td><td className="border px-2 py-1">The actual vehicle being sold, identified by VIN, make, model, and year.</td></tr>
                <tr><td className="border px-2 py-1">description</td><td className="border px-2 py-1">Text</td><td className="border px-2 py-1">Free-text description used to advertise the vehicle.</td></tr>
                <tr><td className="border px-2 py-1">odometer</td><td className="border px-2 py-1">Int</td><td className="border px-2 py-1">The vehicle’s mileage at time of listing.</td></tr>
                <tr><td className="border px-2 py-1">askingPrice</td><td className="border px-2 py-1">Decimal</td><td className="border px-2 py-1">The price the seller is expecting to receive.</td></tr>
                <tr><td className="border px-2 py-1">status</td><td className="border px-2 py-1">ListingStatus</td><td className="border px-2 py-1">AcceptingOffers or PendingSale. Controls interaction state.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Authorization & Visibility */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-500" />
              Authorization & Visibility
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li><strong>Signatory</strong>: <code>seller</code></li>
              <li><strong>Observer</strong>: <code>qualifiedBuyers</code></li>
              <li><strong>Visibility Rule</strong>: Only explicitly listed parties (qualified buyers) can interact with the contract.</li>
            </ul>
          </div>

          {/* Choices */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-gray-500" />
              Choices (Available Actions)
            </h3>

            <div className="space-y-2">
              <h4 className="font-semibold">MakeOffer</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> A party from the <code>qualifiedBuyers</code> list</li>
                <li><strong>Consumes:</strong> No</li>
                <li><strong>Returns:</strong> A <code>ContractId</code> of the <code>PurchaseOffer</code> contract</li>
              </ul>
              <p className="mt-2">
                This non-consuming choice allows a pre-approved buyer to place an offer on the vehicle.
                It enforces that only buyers included in the <code>qualifiedBuyers</code> list can use it,
                using an <code>assertMsg</code> to fail fast on invalid access.
                The buyer submits their <code>bidPrice</code>, and a new <code>PurchaseOffer</code> contract is created linking the buyer to this listing by <code>vin</code>.
              </p>
            </div>

            <div className="space-y-2 mt-6">
              <h4 className="font-semibold">UpdateStatus</h4>
              <ul className="list-disc list-inside pl-6 space-y-1">
                <li><strong>Available To:</strong> <code>seller</code></li>
                <li><strong>Consumes:</strong> No</li>
                <li><strong>Returns:</strong> A new <code>Listing</code> contract with the updated <code>status</code></li>
              </ul>
              <p className="mt-2">
                Allows the seller to change the listing’s status — typically from <code>AcceptingOffers</code> to <code>PendingSale</code> when an offer is accepted, or vice versa.
                This enables lifecycle transitions for listings without needing to archive and recreate them.
              </p>
            </div>
          </div>

          {/* Lifecycle */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Repeat className="w-5 h-5 text-gray-500" />
              Lifecycle Insights
            </h3>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li>A listing is <strong>created</strong> when a vehicle is posted.</li>
              <li>It may receive <strong>multiple offers</strong>, but can only transition to <code>PendingSale</code> once.</li>
              <li>It remains active until payment is confirmed, at which point it's <strong>archived</strong>.</li>
              <li>If a buyer fails to pay, it may be <strong>reactivated</strong> by the seller using the <code>Cancel</code> choice from an <code>Invoice</code>.</li>
            </ul>
          </div>

          {/* Code */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Code className="w-5 h-5 text-gray-500" />
              Code
            </h3>
            <pre className="bg-gray-100 text-sm overflow-x-auto rounded p-4">
              <code>{`{-
// An advertisement for the sale of a vehicle.
-}
template Listing
  with
    seller : Party
    qualifiedBuyers : [Party]
    vehicle : Vehicle
    description : Text
    odometer : Int    
    askingPrice : Decimal
    status : ListingStatus
  where
    signatory seller
    observer qualifiedBuyers

    -- seller is allowed a single listing per vehicle

    -- only those buyers previously qualified are allowed to make an offer
    nonconsuming choice MakeOffer : ContractId PurchaseOffer
      with
        buyer : Party
        bidPrice : Decimal
      controller buyer
      do
        assertMsg "not a qualified buyer" $ buyer \`elem\` qualifiedBuyers
        create PurchaseOffer with
          buyer
          seller
          bidPrice
          vin = vehicle.vin

    choice UpdateStatus : ContractId Listing
      with
        newStatus : ListingStatus
      controller seller
      do
        create this with status = newStatus
`}</code>
            </pre>
          </div>
        </div>
      </details>
    </section>
  );
}
