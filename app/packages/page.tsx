'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';



const tourPackages = [
  {
    title: 'Goa Beach Tour',
    image: '/goa.jpg',
    originalPrice: 12999,
    discountedPrice: 9999,
    kms: 350,
  },
  {
    title: 'Manali Adventure Trip',
    image: '/manali.jpg',
    originalPrice: 14999,
    discountedPrice: 11999,
    kms: 500,
  },
  {
    title: 'Rajasthan Desert Safari',
    image: '/rajasthan.jpg',
    originalPrice: 13999,
    discountedPrice: 10999,
    kms: 600,
  },
  {
    title: 'Kerala Backwaters',
    image: '/kerala.jpg',
    originalPrice: 11999,
    discountedPrice: 8999,
    kms: 400,
  },
  {
    title: 'Ooty Hill Retreat',
    image: '/ooty.jpg',
    originalPrice: 10999,
    discountedPrice: 7999,
    kms: 380,
  },
];

export default function PackagesPage() {
  return (
    <>
    <div className=" text-white py-5 text-center" style={{backgroundColor:"#0057b8"}}>
        <h1 className="fw-bold">Explore Exciting Tour Packages at Unbeatable Prices</h1>
        <p>Discover top destinations across India and the world with exclusive discounts </p>
      </div>
      

      <Container className="mt-4">
       

        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {tourPackages.map((pkg, idx) => (
            <Col key={idx}>
              <Card className="shadow-sm h-100">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={400}
                  height={250}
                  className="card-img-top rounded-top"
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{pkg.title}</Card.Title>
                  <Card.Text>
                    <span className="text-muted text-decoration-line-through me-2">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-success fw-bold">
                      ₹{pkg.discountedPrice.toLocaleString()}
                    </span>
                  </Card.Text>
                  <Card.Text>{pkg.kms} kms included</Card.Text>
                  <Button variant="primary" className="w-100">Click to Book</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button variant="link" className="text-primary fw-bold">+ Show more areas</Button>
        </div>
      </Container>
    </>
  );
}
