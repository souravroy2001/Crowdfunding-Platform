import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AdminCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        const { data } = await axios.get('/api/admin/campaigns', config);
        setCampaigns(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load campaigns');
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [userInfo]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <h2 className="my-4">Campaign Management</h2>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">All Campaigns</h5>
          <Button variant="success">Add New Campaign</Button>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Creator</th>
                <th>Target</th>
                <th>Raised</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id}>
                  <td>{campaign._id}</td>
                  <td>{campaign.title}</td>
                  <td>{campaign.creator?.name || 'Unknown'}</td>
                  <td>${campaign.targetAmount}</td>
                  <td>${campaign.currentAmount || 0}</td>
                  <td>
                    <span className={`badge bg-${campaign.status === 'active' ? 'success' : campaign.status === 'completed' ? 'primary' : 'warning'}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td>
                    <Button variant="info" size="sm" className="me-2">View</Button>
                    <Button variant="warning" size="sm" className="me-2">Edit</Button>
                    <Button variant="danger" size="sm">Delete</Button>
                  </td>
                </tr>
              ))}
              {campaigns.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center">No campaigns found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminCampaigns;
