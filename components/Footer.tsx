export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm w-full md:w-auto text-center justify-center">
            © {new Date().getFullYear()} Ammar Ameera Ahmad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}