import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-secondary mb-4">404</h1>
        <p className="text-muted text-lg mb-8">Page not found</p>
        <Link href="/" className="px-6 py-3 bg-secondary text-primary font-semibold rounded-sm hover:bg-accent transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
