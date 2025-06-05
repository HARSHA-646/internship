'use client';

import React from 'react';
import { Container, Row, Col, Form, Button, Accordion, Tab, Tabs } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

// Separate CarHireExtras component as a named export
const CarHireExtras = () => {
  const destinations = [
    {
      city: 'El Segundo',
      locations: 103,
      price: '₹ 5,250',
      image: '/el-segundo.jpg',
    },
    {
      city: 'Dania Beach',
      locations: 92,
      price: '₹ 3,954',
      image: '/dania-beach.jpg',
    },
    {
      city: 'Coolangatta',
      locations: 22,
      price: '₹ 4,541',
      image: '/coolangatta.jpg',
    },
    {
      city: 'Phoenix',
      locations: 78,
      price: '₹ 5,533',
      image: '/phoenix.jpg',
    },
    {
      city: 'Madrid',
      locations: 108,
      price: '₹ 4,177',
      image: '/madrid.jpg',
    },
    {
      city: 'Jamaica',
      locations: 79,
      price: '₹ 6,839',
      image: '/jamaica.jpg',
    },
    {
      city: 'Irving',
      locations: 81,
      price: '₹ 5,201',
      image: '/irving.jpg',
    },
    {
      city: 'Calgary',
      locations: 46,
      price: '₹ 5,528',
      image: '/calgary.jpg',
    },
    {
      city: 'San Diego',
      locations: 87,
      price: '₹ 4,718',
      image: '/san-diego.jpg',
    },
  ];

  return (
    <>
      {/* FAQs Section */}
      <h4 className="fw-bold mb-4">Frequently asked questions</h4>
      <Row className="mb-5">
        <Col md={6}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Why should I book a car rental in India with Booking.com?</Accordion.Header>
              <Accordion.Body>Convenient booking, wide selection, and competitive pricing.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What do I need to rent a car?</Accordion.Header>
              <Accordion.Body>A valid driving license, ID proof, and a credit card.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Am I old enough to rent a car?</Accordion.Header>
              <Accordion.Body>You must be at least 21 years old. Age limits vary by company.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={6}>
          <Accordion>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Can I book a car for my friend or colleague?</Accordion.Header>
              <Accordion.Body>Yes, as long as they meet the requirements and provide ID at pickup.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Any tips on choosing the right car?</Accordion.Header>
              <Accordion.Body>Choose based on trip type, luggage, fuel, and number of passengers.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Is the rental price all inclusive?</Accordion.Header>
              <Accordion.Body>Check the terms. Some rentals include insurance and taxes.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* Popular Destinations Section */}
      <h4 className="fw-bold mb-3">Popular car hire destinations</h4>
      <p className="text-muted">Explore more options to hire a car for cheap</p>
      <Tabs defaultActiveKey="cities" className="mb-4">
        <Tab eventKey="cities" title="Cities worldwide" />
        <Tab eventKey="airports" title="Airports worldwide" />
      </Tabs>

      <Row xs={1} sm={2} md={3} lg={3}>
        {destinations.map((dest, index) => (
          <Col key={index} className="mb-4 d-flex align-items-start gap-3">
            <Image src={dest.image} alt={dest.city} width={70} height={70} className="rounded" />
            <div>
              <h6 className="fw-bold mb-1">{dest.city}</h6>
              <p className="mb-0 text-muted">{dest.locations} car hire locations</p>
              <small className="text-muted">Average price of <strong>{dest.price}</strong> per day</small>
            </div>
          </Col>
        ))}
      </Row>

      <Button variant="link" className="text-primary">+ Show more</Button>
    </>
  );
};

// Main page with single default export
export default function CarHirePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className=" text-white py-5 text-center" style={{backgroundColor:"#0057b8"}}>
        <h1 className="fw-bold">Car hire for any kind of trip</h1>
        <p>Great cars at great prices, from the biggest car rental companies</p>
      </div>

      {/* Search Form */}
      <Container className="mt-4 p-3 border rounded shadow">
        <Form>
          <Row className="align-items-center mb-3">
            <Col md={4}>
              <Form.Group controlId="pickupLocation">
                <Form.Label>Pick-up location</Form.Label>
                <Form.Control type="text" placeholder="Delhi International Airport (DEL), India" />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="pickupDate">
                <Form.Label>Pick-up date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="pickupTime">
                <Form.Label>Pick-up time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="dropoffDate">
                <Form.Label>Drop-off date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="dropoffTime">
                <Form.Label>Drop-off time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="align-items-center mb-3">
            <Col md={6}>
              <Form.Check label="Drop car off at different location" />
            </Col>
            <Col md={6}>
              <Form.Check label="Driver aged between 30 - 65?" />
            </Col>
          </Row>

          <Button className="bg-warning text-dark fw-bold">
            <FaSearch /> Search
          </Button>
        </Form>
      </Container>

      {/* Benefits Section */}
      <Container className="mt-5">
        <h4>Travel more, spend less</h4>
        <div className="bg-light p-4 rounded shadow-sm">
          <h5>Sign in, save money</h5>
          <p>Save 10% on select rental cars – just look for the blue Genius label</p>
          <Button variant="primary" className="me-2">Sign in</Button>
          <Button variant="link">Register</Button>
        </div>

        {/* Icon Grid */}
        <Row className="mt-4 text-center">
          <Col>
            <Image src="/support-icon.png" alt="Support" width={50} height={50} />
            <p className="fw-bold mt-2">We’re here for you</p>
            <p>Support in 30+ languages</p>
          </Col>
          <Col>
            <Image src="/cancel-icon.png" alt="Cancel" width={50} height={50} />
            <p className="fw-bold mt-2">Free cancellation</p>
            <p>Up to 48 hours before pick-up</p>
          </Col>
          <Col>
            <Image src="/review-icon.png" alt="Reviews" width={50} height={50} />
            <p className="fw-bold mt-2">5 million+ reviews</p>
            <p>By verified customers</p>
          </Col>
        </Row>

        {/* FAQs and Destinations Section */}
        <CarHireExtras />
      </Container>
    </div>
  );
}
