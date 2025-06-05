
"use client";

import Image from 'next/image';
import { FaBeer } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import PopularCities from '../../PopularCities';



import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

const destinations = [
  { name: "New Delhi", img: "/delhi.jpg", km: "109", from: "New Delhi" },
  { name: "Agra", img: "/agra.jpg", km: "180", from: "New Delhi" },
  { name: "Jaipur", img: "/jaipur.jpg", km: "236", from: "New Delhi" },
  { name: "Chandigarh", img: "/chandigarh.jpg", km: "238", from: "New Delhi" },
  { name: "Allahabad", img: "/allahabad.jpg", km: "579", from: "New Delhi" },
  { name: "Varanasi", img: "/varanasi.jpg", km: "680", from: "New Delhi" }
];

const explore = [
  { name: "New Delhi", img: "/delhi.jpg", properties: 3886 },
  { name: "Gurgaon", img: "/gurgaon.jpg", properties: 1480 },
  { name: "Manesar", img: "/manesar.jpg", properties: 35 },
  { name: "Noida", img: "/noida.jpg", properties: 949 },
  { name: "Jaipur", img: "/jaipur.jpg", properties: 1719 },
  { name: "Faridabad", img: "/faridabad.jpg", properties: 224 }
];

const deals = [
  {
    name: "HAMPI DELMONT RESORT",
    location: "Hampi, India",
    rating: 6.6,
    reviews: 7,
    img: "/hampi.jpg"
  },
  {
    name: "Olive Hotel Benz Circle",
    location: "Vijayawada, India",
    rating: 8.5,
    reviews: 53,
    img: "/benz.jpg"
  },
  {
    name: "Hotel Plaza Hyderabad",
    location: "Shamshabad, India",
    rating: 5.9,
    reviews: 96,
    img: "/plaza.jpg"
  },
  {
    name: "Samarth Residency",
    location: "Hospet, India",
    rating: 7.1,
    reviews: 225,
    img: "/samarth.jpg"
  }
];

export default function Home() {
  return (
    <><><><><div>

     




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
                className="img-fluid rounded-start" />

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
      </div></><main className="container my-5">
        {/* Title */}
        <h2 className="fw-bold">Quick and easy trip planner</h2>
        <p className="text-muted">Pick a vibe and explore the top destinations in India</p>

        {/* Categories */}
        <div className="d-flex gap-3 mb-4 flex-wrap">
          {['City', 'Beach', 'Outdoors', 'Relax', 'Romance', 'Food'].map((item, i) => (
            <button
              key={i}
              className={`btn btn-outline-primary px-4 py-2 rounded-pill ${item === 'City' ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Nearby Cities */}
        <div className="d-flex overflow-auto gap-3 mb-5">
          {[
            { name: 'Neemrana', distance: '109 km', image: '/neemrana.jpg' },
            { name: 'Agra', distance: '180 km', image: '/agra.jpg' },
            { name: 'Jaipur', distance: '236 km', image: '/jaipur.jpg' },
            { name: 'Chandigarh', distance: '238 km', image: '/chandigarh.jpg' },
            { name: 'Allahābād', distance: '579 km', image: '/allahabad.jpg' },
            { name: 'Varanasi', distance: '680 km', image: '/varanasi.jpg' },
          ].map((place, idx) => (
            <div key={idx} className="text-center" style={{ minWidth: '130px' }}>
              <Image
                src={place.image}
                alt={place.name}
                width={130}
                height={100}
                className="rounded" />
              <div className="fw-semibold">{place.name}</div>
              <div className="text-muted small">{place.distance} from New Delhi</div>
            </div>
          ))}
        </div>

        {/* Trending Destinations */}
        <h4 className="fw-bold">Trending destinations</h4>
        <p className="text-muted">Travellers searching for India also booked these</p>

        <div className="row g-3">
          {[
            {
              name: 'New Delhi',
              image: 'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial.jpg',
            },
            {
              name: 'Agra',
              image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Taj_Mahal_in_March_2004.jpg',
            },
          ].map((dest, idx) => (
            <div key={idx} className="col-md-6">
              <div className="position-relative overflow-hidden rounded shadow">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={600}
                  height={300}
                  className="img-fluid"
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                <div
                  className="position-absolute text-white fw-bold px-3 py-2"
                  style={{
                    bottom: '0',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                    width: '100%',
                  }}
                >
                  <h5 className="m-0">
                    {dest.name} <span className="ms-2">🇮🇳</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main></><Container className="py-4">
        <h2><strong>Quick and easy trip planner</strong></h2>
        <p>Pick a vibe and explore the top destinations in India</p>

        <Row className="mb-5">
          {destinations.map((place, idx) => (
            <Col key={idx} xs="6" md="2">
              <Card>
                <CardImg top src={place.img} alt={place.name} />
                <CardBody className="text-center">
                  <h6>{place.name}</h6>
                  <p className="text-muted" style={{ fontSize: "12px" }}>{place.km} km from {place.from}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <h4><strong>Explore India</strong></h4>
        <p>These popular destinations have a lot to offer</p>

        <Row className="mb-5">
          {explore.map((place, idx) => (
            <Col key={idx} xs="6" md="2">
              <Card>
                <CardImg top src={place.img} alt={place.name} />
                <CardBody className="text-center">
                  <h6>{place.name}</h6>
                  <p className="text-muted" style={{ fontSize: "12px" }}>{place.properties} properties</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <h4><strong>Deals for the weekend</strong></h4>
        <p>Save on stays for 6 June - 8 June</p>

        <Row>
          {deals.map((hotel, idx) => (
            <Col key={idx} md="3" className="mb-4">
              <Card>
                <CardImg top src={hotel.img} alt={hotel.name} />
                <CardBody>
                  <h6>{hotel.name}</h6>
                  <p className="mb-1 text-muted">{hotel.location}</p>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-primary">{hotel.rating}</span>
                    <small className="text-muted">{hotel.reviews} reviews</small>
                  </div>
                  <Button color="success" size="sm" className="mt-2">Getaway Deal</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container></><>
        {/* Other sections */}
        <PopularCities/>
      </></>
  );
}

