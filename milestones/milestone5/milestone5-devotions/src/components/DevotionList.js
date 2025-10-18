// src/components/DevotionList.js
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getAllDevotions, deleteDevotion } from '../api';
import { useNavigate } from 'react-router-dom';

function DevotionList() {
  const [devotions, setDevotions] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadDevotions();
  }, []);

  function loadDevotions() {
    getAllDevotions().then(data => setDevotions(data));
  }

function handleDelete(id) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This action will permanently delete the devotion.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteDevotion(id).then(() => loadDevotions());
    }
  });
}

  const filtered = devotions.filter(d => {
    const q = search.toLowerCase();
    return (
      d.title.toLowerCase().includes(q) ||
      d.content.toLowerCase().includes(q)
    );
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Devotions</h2>
        <button
          className="btn btn-success"
          onClick={() => navigate('/add')}
        >
          + New Devotion
        </button>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or content..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="alert alert-light text-muted border">
          No devotions found.
        </div>
      ) : (
        <ul className="list-group">
          {filtered.map(devotion => (
            <li
              key={devotion.id}
              className="list-group-item mb-3 shadow-sm rounded"
              style={{ border: '1px solid #ddd' }}
            >
              <h5 className="mb-1">{devotion.title}</h5>
              <p className="mb-2 text-muted">{devotion.content}</p>
              <p className="small mb-2">
                <strong>Date:</strong>{' '}
                {new Date(devotion.date).toLocaleDateString()}
              </p>
              <div>
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => navigate(`/edit/${devotion.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(devotion.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DevotionList;