import Image from 'next/image';
import { FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <><div>

      <nav className="navbar navbar-expand-lg py-2" style={{ backgroundColor: "#0057b8" }}>
        <div className="container">
          <a className="navbar-brand fw-bold" style={{ color: "white" }} href="#">
            GANAPATHI TRAVELS
          </a>
          <h3>
            Lets go for a <FaBeer />?
          </h3>n
          <div className="ms-auto d-flex align-items-center">
            <a href="#" className="text-white me-3 text-decoration-none p-2">
              🌐 English (US)
            </a>
            <a href="#" className="text-white me-3 text-decoration-none p-2">
              💵 INDIAN
            </a>
            <a href="#" className="text-white me-3 text-decoration-none p-2">
              ❓ Help
            </a>
            <a href="#" className="text-white me-3 text-decoration-none p-2">
              🏠 List your property
            </a>
            <div className="p-2">
              <button className="btn btn-outline-light btn-sm me-2 p-1">Register</button>
              <button className="btn btn-outline-light btn-sm p-1">Sign in</button>
            </div>
          </div>
        </div>
      </nav>

      
      <nav>
        <div className="container d-flex align-items-center py-2 gap-10" style={{ backgroundColor: "#0057b8" }}>
          <a href="#" className="tab-hover active-tab text-white me-3">🏨 Stays</a>
          <a href="#" className="tab-hover text-white me-3"> cars</a>
          <a href="#" className="tab-hover text-white me-3">🚗 Car Rentals</a>
          <a href="#" className="tab-hover text-white me-3">🎟 packages </a>
          <a href="#" className="tab-hover text-white">🚕 Airport Taxis</a>
        </div>
      </nav>


      <section className="hero-section text-center" style={{ backgroundColor: "#0057b8", color: "white", padding: "60px 0 40px" }}>
        <div className="container">
          <h1 className="display-5 fw-bold">Find your next stay</h1>
          <p className="lead">Search low prices on booking, travel and much more...</p>
        </div>
      </section>


      <section className="container form-section mt-n3 p-4 rounded shadow" style={{ backgroundColor: "white", marginTop: "-30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
        <div className="row justify-content-center g-3">
          <div className="col-12 col-md-3">
            <div className="input-group">
              <span className="input-group-text bg-white">🏠</span>
              <input type="text" className="form-control" placeholder="search here for places" />
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="input-group">
              <span className="input-group-text bg-white">📅</span>
              <input type="text" className="form-control" placeholder="Mon 16 Jun – Wed 18 Jun" />
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="input-group">
              <span className="input-group-text bg-white">👤</span>
              <input type="text" className="form-control" placeholder="2 adults" />
            </div>
          </div>
          <div className="col-12 col-md-2">
            <button className="btn btn-warning w-100">Search</button>
          </div>
        </div>
      </section>
    </div><div className="container py-5">
        
        <div className="mb-4">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="entireHome" />
            <label className="form-check-label" htmlFor="entireHome">
              I'm looking for an entire home or apartment
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="flights" />
            <label className="form-check-label" htmlFor="flights">
              I'm looking for flights
            </label>
          </div>
        </div>

        
        <h4 className="fw-bold">Your recent searches</h4>
        <div className="card shadow-sm mb-5" style={{ maxWidth: '400px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
                alt="New Delhi"
                width={100}
                height={100}
                className="img-fluid rounded-start"
              />

            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="cardbody py-2">
                <h6 className="card-title mb-1 fw-bold">New Delhi</h6>
                <p className="card-text mb-0"><small>16 Jun–18 Jun, 2 people</small></p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="fw-bold">Offers</h4>
        <p className="text-muted mb-3">Promotions, deals and special offers for you</p>
        <div className="card shadow-sm mb-5">
          <div className="row g-0 align-items-center">
            <div className="col-md-9">
              <div className="card-body">
                <h6 className="card-title fw-bold">Quick escape, quality time</h6>
                <p className="card-text">Save up to 20% with a Getaway Deal</p>
                <button className="btn btn-primary btn-sm">Save on stays</button>
              </div>
            </div>
            <div className="col-md-3 text-end pe-3 py-3">
              <Image
                src="/offer.jpg" 
                alt="Offer"
                width={80}
                height={80}
                className="rounded" />
            </div>
          </div>
        </div>
      </div></>
  );
}

