# API Contracts - Katlego Seiphemo Portfolio

## Contact Form Submission

### POST /api/contact
Saves a contact form submission to MongoDB.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "message": "string (required)"
}
```

**Response (201 Created):**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "message": "string",
  "created_at": "datetime",
  "status": "new"
}
```

**Error Response (422):**
```json
{
  "detail": "Validation error message"
}
```

---

## Frontend Integration

### Current Mock Data Location
- `/app/frontend/src/data/mock.js` - Contains personal info, skills, projects

### Contact Form Component
- `/app/frontend/src/components/ContactSection.jsx`
- Currently uses mock submission with setTimeout
- Needs to call `POST /api/contact` endpoint

### Integration Steps
1. Create Contact model in backend
2. Create POST /api/contact endpoint
3. Update ContactSection.jsx to call the API
4. Handle success/error states
