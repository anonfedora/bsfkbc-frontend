import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <>
      <PageHeader title="404" description="Page Not Found" />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold tracking-tighter text-secondary">
                404
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter">
                Oops! Page not found
              </h2>
              <p className="text-muted-foreground text-lg">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="pt-6">
                <Link href="/">
                  <Button className="bg-primary hover:bg-primary/90">
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
