import React, { useState } from 'react';
import './HospitalCSS/HospitalUploadService.css';

const HospitalUpdateService = () => {
  const [serviceName, setServiceName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [hospitalName, setHospitalName] = useState('');

  const handleUpdateService = async () => {
    await updateData('http://localhost:8080/postService',
     { service: serviceName });
  };

  const handleUpdateDoctor = async () => {
    await updateData('http://localhost:8080/postdoctor', 
    { doctor: doctorName });
  };

  const handleUpdateHospital = async () => {
    await updateData('http://localhost:8080/posthospital', 
    { hospital: hospitalName });
  };

  const updateData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Query submitted');
        window.location.reload();
      } else {
        alert('Failed to Update. Please try again.');
      }
    } catch (error) {
      console.error('Error during Update:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <center>
        <h3 id='upd-serv'>Update Services, Doctors, and Hospitals</h3>
      </center>
      <div className='upd-serv'>
        <div>
          <h4 id='upd-serv'>Update Service:</h4>
          <input
            className='upd-servinput'
            type='text'
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <button id='upd-servBtn' onClick={handleUpdateService}>
            Update Service
          </button>
        </div>
        <div>
          <h4>Update Doctor:</h4>
          <input
            className='upd-servinput'
            type='text'
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
          />
          <button id='upd-servBtn' onClick={handleUpdateDoctor}>
            Update Doctor
          </button>
        </div>
        <div>
          <h4>Update Hospital:</h4>
          <input
            className='upd-servinput'
            type='text'
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
          />
          <button id='upd-servBtn' onClick={handleUpdateHospital}>
            Update Hospital
          </button>
        </div>
      </div>
    </>
  );
};

export default HospitalUpdateService;
