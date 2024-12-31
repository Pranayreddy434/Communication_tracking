import React, { useState, useEffect } from 'react';
import './AdminModule.css';

const AddCompany = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    industry: '',
    location: '',
  });
  const [message, setMessage] = useState('');
  const [companyList, setCompanyList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); // Track which company is being edited

  // Load companies from local storage when the component mounts
  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    setCompanyList(storedCompanies);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === -1) {
      // Add a new company
      const updatedCompanies = [...companyList, companyData];
      setCompanyList(updatedCompanies);
      localStorage.setItem('companies', JSON.stringify(updatedCompanies));
      setMessage('Company added successfully!');
    } else {
      // Update an existing company
      const updatedCompanies = companyList.map((company, index) =>
        index === editIndex ? companyData : company
      );
      setCompanyList(updatedCompanies);
      localStorage.setItem('companies', JSON.stringify(updatedCompanies));
      setMessage('Company updated successfully!');
      setEditIndex(-1);
    }

    // Reset form
    setCompanyData({ name: '', industry: '', location: '' });
  };

  const handleEdit = (index) => {
    setCompanyData(companyList[index]);
    setEditIndex(index);
    setMessage('');
  };

  const handleDelete = (index) => {
    const updatedCompanies = companyList.filter((_, i) => i !== index);
    setCompanyList(updatedCompanies);
    localStorage.setItem('companies', JSON.stringify(updatedCompanies));
    setMessage('Company deleted successfully!');
  };

  return (
    <div className="add-company">
      <h3 className="form-title">{editIndex === -1 ? 'Add New Company' : 'Edit Company'}</h3>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="name"
            value={companyData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Industry:</label>
          <input
            type="text"
            name="industry"
            value={companyData.industry}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={companyData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          {editIndex === -1 ? 'Add Company' : 'Update Company'}
        </button>
      </form>

      {/* Display the list of added companies */}
      <div className="company-list">
        <h4 className="list-title">Added Companies:</h4>
        {companyList.length > 0 ? (
          <table className="company-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Industry</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companyList.map((company, index) => (
                <tr key={index} className="company-row">
                  <td>{company.name}</td>
                  <td>{company.industry}</td>
                  <td>{company.location}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} className="btn-edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(index)} className="btn-delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-companies">No companies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddCompany;
