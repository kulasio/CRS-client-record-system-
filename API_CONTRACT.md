# API Contract: Client Record System

## Base URL
```
/api/clients
```

---

## 1. Get All Clients
- **Endpoint:** `GET /api/clients`
- **Description:** Returns a list of all clients.
- **Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "phone": "123-456-7890",
    "email": "john@example.com",
    "address": "123 Main St",
    "notes": "VIP client",
    "date_added": "2024-06-01T12:34:56Z"
  },
  ...
]
```

---

## 2. Get Single Client
- **Endpoint:** `GET /api/clients/:id`
- **Description:** Returns details for a single client.
- **Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "phone": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main St",
  "notes": "VIP client",
  "date_added": "2024-06-01T12:34:56Z"
}
```

---

## 3. Add New Client
- **Endpoint:** `POST /api/clients`
- **Description:** Adds a new client.
- **Request Body:**
```json
{
  "name": "Jane Smith",
  "phone": "987-654-3210",
  "email": "jane@example.com",
  "address": "456 Elm St",
  "notes": "New client"
}
```
- **Response:** (created client object, including `id` and `date_added`)
```json
{
  "id": 2,
  "name": "Jane Smith",
  "phone": "987-654-3210",
  "email": "jane@example.com",
  "address": "456 Elm St",
  "notes": "New client",
  "date_added": "2024-06-02T09:00:00Z"
}
```

---

## 4. Update Client
- **Endpoint:** `PUT /api/clients/:id`
- **Description:** Updates an existing client.
- **Request Body:** (any updatable fields)
```json
{
  "name": "Jane Smith",
  "phone": "987-654-3210",
  "email": "jane.smith@example.com",
  "address": "456 Elm St",
  "notes": "Updated notes"
}
```
- **Response:** (updated client object)
```json
{
  "id": 2,
  "name": "Jane Smith",
  "phone": "987-654-3210",
  "email": "jane.smith@example.com",
  "address": "456 Elm St",
  "notes": "Updated notes",
  "date_added": "2024-06-02T09:00:00Z"
}
```

---

## 5. Delete Client
- **Endpoint:** `DELETE /api/clients/:id`
- **Description:** Deletes a client.
- **Response:**
```json
{ "message": "Client deleted successfully." }
```

---

## 6. Error Response Example
- **Status:** `400` or `404`
- **Response:**
```json
{ "error": "Client not found." }
```

---

## Notes
- All data is in JSON.
- `date_added` is in ISO 8601 format.
- All endpoints return appropriate HTTP status codes (`200`, `201`, `400`, `404`, etc.). 