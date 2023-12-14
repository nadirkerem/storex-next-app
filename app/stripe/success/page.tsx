import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function StripeSuccessPage() {
  return (
    <div className="h-screen">
      <div className="mx-auto mt-32 md:max-w-[50vw]">
        <CheckCheck className="mx-auto my-6 h-16 w-16 text-green-600" />
        <div className="text-center">
          <h3 className="text-base font-semibold text-gray-900 md:text-2xl">
            Payment Done!
          </h3>
          <p className="mt-5 text-sm font-normal text-gray-500 md:text-base">
            Thank you for your purchase. We hope you enjoy our products.
          </p>

          <Button asChild className="mt-5">
            <Link href="/">Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
