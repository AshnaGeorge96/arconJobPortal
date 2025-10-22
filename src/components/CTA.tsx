import Link from "next/link";

export default function CTA() {
  return (
    <section id="get-started" className="section">
      <div className="container">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to take the next step?</h3>
            <p className="text-gray-600 mt-2">Talk to our consultants and get a tailored plan for jobs, visas, or business.</p>
          </div>
          <Link href="#contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
