const API_BASE = 'http://localhost:3000/api/devotions';

export async function getAllDevotions() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function getDevotionById(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
}

export async function createDevotion(devotion) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(devotion),
  });
  return res.json();
}

export async function updateDevotion(id, devotion) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(devotion),
  });
  return res.json();
}

export async function deleteDevotion(id) {
  await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
}