import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createDevotion, updateDevotion, getDevotionById } from '../api';

function DevotionForm({ onSaved }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [devotion, setDevotion] = useState({ title: '', content: '', date: '' });

  useEffect(() => {
    if (id) {
      getDevotionById(id).then(data => setDevotion(data));
    }
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setDevotion(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const action = id
      ? updateDevotion(id, devotion)
      : createDevotion(devotion);

    action.then(() => {
      onSaved(id ? 'Updated successfully!' : 'Created successfully!');
      navigate('/');
    });
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4">{id ? 'Edit Devotion' : 'New Devotion'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={devotion.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter a short title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              id="content"
              name="content"
              value={devotion.content}
              onChange={handleChange}
              className="form-control"
              rows="5"
              placeholder="Write the devotional content here..."
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="form-label">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={devotion.date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">
              {id ? 'Update' : 'Create'}
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DevotionForm;