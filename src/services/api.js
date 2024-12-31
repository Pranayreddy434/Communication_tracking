// src/services/api.js

// Mock API functions for User Module
export const getNotifications = async () => {
  try {
    // Simulating fetching notifications (in real case, replace with actual API call)
    const notifications = [
      { message: 'Meeting with Company A on 2024-12-15', dueDate: '2024-12-10' },
      { message: 'Follow-up with Company B', dueDate: '2024-12-12' },
    ];
    return notifications;
  } catch (error) {
    console.error('Failed to fetch notifications:', error);
    return [];
  }
};

export const getPastCommunications = async () => {
  try {
    // Simulating fetching past communications (replace with actual API call)
    const communications = [
      { company: 'Company A', message: 'Initial meeting on 2024-12-01', date: '2024-12-01' },
      { company: 'Company B', message: 'Proposal sent on 2024-11-20', date: '2024-11-20' },
    ];
    return communications;
  } catch (error) {
    console.error('Failed to fetch past communications:', error);
    return [];
  }
};

// Mock API functions for Admin Module
export const getCompanies = async () => {
  try {
    // Simulating fetching company data (replace with actual API call)
    const companies = [
      { id: 1, name: 'Company A', details: 'Details of Company A' },
      { id: 2, name: 'Company B', details: 'Details of Company B' },
    ];
    return companies;
  } catch (error) {
    console.error('Failed to fetch companies:', error);
    return [];
  }
};

export const addCompany = async (company) => {
  try {
    // Simulating an API POST request to add a company (replace with actual API call)
    const response = await fetch('/api/companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(company),
    });
    const data = await response.json();
    return { success: data.success, message: data.message };
  } catch (error) {
    console.error('Failed to add company:', error);
    return { success: false, message: 'Error occurred while adding company' };
  }
};

export const updateCompany = async (company) => {
  try {
    // Simulating an API PUT request to update a company (replace with actual API call)
    const response = await fetch(`/api/companies/${company.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(company),
    });
    const data = await response.json();
    return { success: data.success, message: data.message };
  } catch (error) {
    console.error('Failed to update company:', error);
    return { success: false, message: 'Error occurred while updating company' };
  }
};

export const deleteCompany = async (companyId) => {
  try {
    // Simulating an API DELETE request to remove a company (replace with actual API call)
    const response = await fetch(`/api/companies/${companyId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return { success: data.success, message: data.message };
  } catch (error) {
    console.error('Failed to delete company:', error);
    return { success: false, message: 'Error occurred while deleting company' };
  }
};
