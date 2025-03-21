import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-light sidebar">
          <Nav className="flex-column py-3">
            <Nav.Link as={Link} to="/admin/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin/campaigns">Campaigns</Nav.Link>
            <Nav.Link as={Link} to="/admin/companies">Companies</Nav.Link>
            <Nav.Link as={Link} to="/admin/donations">$ Donations</Nav.Link>
            <Nav.Link as={Link} to="/admin/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/admin/analytics">Analytics</Nav.Link>
            <Nav.Link as={Link} to="/admin/reports">Reports</Nav.Link>
            <Nav.Link as={Link} to="/admin/settings">Settings</Nav.Link>
          </Nav>
        </Col>

        {/* Main content */}
        <Col md={10} className="ms-auto px-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
