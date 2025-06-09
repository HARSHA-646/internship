'use client';

import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from 'reactstrap';
import { FaPlaneArrival, FaUser } from 'react-icons/fa';
import classnames from 'classnames';
import Image from 'next/image';

export default function TaxiPage() {
  const [activeTab, setActiveTab] = useState('1-3');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleTab = (tab: string) => setActiveTab(tab);
  const toggleFAQ = (faq: string) => setOpenFAQ(openFAQ === faq ? null : faq);

  const renderCard = (title: string, car: string) => (
    <Card className="mb-4 shadow-sm">
      <CardBody>
        <h5 className="fw-bold">{title}</h5>
        <small className="text-muted">{car}</small>
        <ul className="list-unstyled mt-3 mb-4">
          <li>👤 3 passengers</li>
          <li>🧳 2 standard bags</li>
          <li>
            ✅{' '}
            <a href="#" className="text-decoration-none text-primary">
              Meet & Greet included
            </a>
          </li>
          <li>
            ✔️ <span className="text-success">Free cancellation</span>
          </li>
        </ul>
        <Button color="primary">Search</Button>
      </CardBody>
    </Card>
  );

  return (
    <>
 
      <div className="bg-light py-5 ">
        <div className="container text-center">
          <div className='mt -10' style={{backgroundColor:"#0057b8"}} >
          <h2 className="fw-bold ">Book your airport taxi</h2>
          <p className="text-muted">Easy airport transfers to and from your accommodation</p>

          </div>
          

          <Form className="d-flex flex-wrap justify-content-center align-items-center border border-warning rounded p-3 mt-4 bg-white gap-2">
            <FormGroup check inline>
              <Input type="radio" name="tripType" value="one-way" defaultChecked />
              <Label check>One-way</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type="radio" name="tripType" value="return" />
              <Label check>Return</Label>
            </FormGroup>

            <Input className="m-1" placeholder="Pick-up location" />
            <Input className="m-1" placeholder="Destination" />
            <Input className="m-1" type="number" min="1" defaultValue={1} placeholder="Passengers" />
            <Button color="primary" className="m-1 px-4">
              Search
            </Button>
          </Form>

          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <FaPlaneArrival size={40} color="#0057b8" />
              <h5 className="fw-bold mt-2">Flight tracking</h5>
              <p className="text-muted">Your driver tracks your flight and waits if it's delayed</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/support-icon.png" alt="Support" height={40} />
              <h5 className="fw-bold mt-2">One clear price</h5>
              <p className="text-muted">Your price is fixed – no hidden charges or cash needed</p>
            </div>
            <div className="col-md-4 text-center">
              <FaUser size={40} color="#f90" />
              <h5 className="fw-bold mt-2">Trusted drivers</h5>
              <p className="text-muted">We partner with professionals and offer 24/7 support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Airport Transfer Process */}
      <Container className="my-5">
        <h3 className="text-center fw-bold mb-5">Airport transfers made easy</h3>
        <Row>
          <Col md={6}>
            <div className="d-flex mb-4">
              <Image src="/taxi-icon.png" alt="Taxi" width={50} height={50} className="me-3" />
              <div>
                <h6 className="fw-bold">Booking your airport taxi</h6>
                <p className="text-muted">
                  Confirmation is immediate. If your plans change, you can cancel for free up to 24 hours before your scheduled pick-up time.
                </p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <Image src="/driver-icon.png" alt="Driver" width={50} height={50} className="me-3" />
              <div>
                <h6 className="fw-bold">Meeting your driver</h6>
                <p className="text-muted">
                  You’ll be met on arrival and taken to your vehicle. Your driver will track your flight, so they'll wait even if it's delayed.
                </p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <Image src="/destination-icon.png" alt="Destination" width={50} height={50} className="me-3" />
              <div>
                <h6 className="fw-bold">Arriving at your destination</h6>
                <p className="text-muted">
                  Get to your destination quickly and safely — no waiting in line for a taxi, no figuring out public transport.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="text-center">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <Image src="/book-online.png" alt="Book" width={60} height={60} />
                <p>Book online</p>
              </div>
              <div>
                <Image src="/confirmation-icon.png" alt="Confirm" width={60} height={60} />
                <p>Receive confirmation</p>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <Image src="/destination-icon.png" alt="Destination" width={60} height={60} />
                <p>Arrive at your destination</p>
              </div>
              <div>
                <Image src="/driver-icon.png" alt="Meet Driver" width={60} height={60} />
                <p>Meet your driver</p>
              </div>
            </div>

            <p className="mt-4 text-success fw-bold">Enjoy your trip!</p>
          </Col>
        </Row>
      </Container>

      {/* Taxi Options Section */}
      <Container className="my-5">
        <h3 className="fw-bold mb-4">Airport taxis for any kind of trip</h3>

        <Nav pills className="mb-4">
          {['1–3 passengers', '4–7 passengers', 'All taxis'].map((label) => {
            const id = label.split(' ')[0].replace(/–/g, '-');
            return (
              <NavItem key={id}>
                <NavLink
                  className={classnames({ active: activeTab === id })}
                  onClick={() => toggleTab(id)}
                  style={{ cursor: 'pointer' }}
                >
                  {label}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>

        <Row>
          <Col md={6}>{renderCard('Standard', 'Skoda Octavia or similar')}</Col>
          <Col md={6}>{renderCard('Executive', 'Mercedes-Benz E-Class or similar')}</Col>
        </Row>

        {/* FAQ Section */}
        <h4 className="fw-bold mt-5 mb-3">Find out more about our airport taxi service</h4>
        <p>
          See more FAQs on our <a href="#">help page</a>
        </p>

        <Row>
          {[
            { q: 'What happens if my flight is early or delayed?', id: 'faq1' },
            { q: "What's included in the price?", id: 'faq2' },
            { q: 'How do I pay?', id: 'faq3' },
            { q: 'Can I cancel my booking?', id: 'faq4' },
          ].map(({ q, id }) => (
            <Col md={6} className="mb-3" key={id}>
              <Card onClick={() => toggleFAQ(id)} style={{ cursor: 'pointer' }}>
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{q}</strong>
                    <span>{openFAQ === id ? '▲' : '▼'}</span>
                  </div>
                  <Collapse isOpen={openFAQ === id}>
                    <p className="mt-2 text-muted">Sample answer for: {q}</p>
                  </Collapse>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
