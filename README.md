# 🚗 Apex Auto Mods Server

A powerful Node.js backend API for managing automotive modifications, builds, and services. Built with Express.js, MongoDB, and modern ES6+ features.

## 🌟 Features

### 🔐 Authentication System

- User registration and login
- JWT-based authentication
- Protected routes with middleware
- User profile management

### 🚙 Vehicle Management

- Add, view, update, and delete vehicles
- Track vehicle details (make, model, year, color, odometer)
- User-specific vehicle collections

### 🔧 Build Management

- Create custom car builds
- Track car model, color, and wheel color
- Manage selected parts and modifications
- User-specific build galleries

### 🛠️ Service Management

- Create and manage automotive services
- Service pricing and descriptions
- CRUD operations for service catalog

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JaninduDiz/apex-auto-mods-server.git
   cd apex-auto-mods-server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://your-connection-string
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```

4. **Start the server**

   **Development mode (with auto-restart):**

   ```bash
   npm run dev
   ```

   **Production mode:**

   ```bash
   npm start
   ```

5. **Verify installation**
   Open your browser and visit `http://localhost:3000`

   You should see:

   ```json
   {
     "message": "🚗 Welcome to Apex Auto Mods API Server!",
     "status": "Online ✅",
     "version": "1.0.0",
     "endpoints": {
       "auth": "/api/v1/auth",
       "vehicles": "/api/v1/vehicles",
       "builds": "/api/v1/builds",
       "services": "/api/v1/services"
     }
   }
   ```

## 📚 API Documentation

### Base URL

- **Local Development:** `http://localhost:3000`
- **Production:** `https://your-vercel-deployment.vercel.app`

### API Endpoints

#### 🔐 Authentication (`/api/v1/auth`)

| Method | Endpoint    | Description       | Auth Required |
| ------ | ----------- | ----------------- | ------------- |
| POST   | `/register` | Register new user | No            |
| POST   | `/login`    | User login        | No            |
| GET    | `/profile`  | Get user profile  | Yes           |

#### 🚙 Vehicles (`/api/v1/vehicles`)

| Method | Endpoint | Description         | Auth Required |
| ------ | -------- | ------------------- | ------------- |
| GET    | `/`      | Get all vehicles    | Yes           |
| POST   | `/`      | Create new vehicle  | Yes           |
| GET    | `/user`  | Get user's vehicles | Yes           |
| GET    | `/:id`   | Get vehicle by ID   | Yes           |
| PUT    | `/:id`   | Update vehicle      | Yes           |
| DELETE | `/:id`   | Delete vehicle      | Yes           |

#### 🔧 Builds (`/api/v1/builds`)

| Method | Endpoint | Description       | Auth Required |
| ------ | -------- | ----------------- | ------------- |
| GET    | `/`      | Get all builds    | Yes           |
| POST   | `/`      | Create new build  | Yes           |
| GET    | `/user`  | Get user's builds | Yes           |
| GET    | `/:id`   | Get build by ID   | Yes           |
| PUT    | `/:id`   | Update build      | Yes           |
| DELETE | `/:id`   | Delete build      | Yes           |

#### 🛠️ Services (`/api/v1/services`)

| Method | Endpoint | Description        | Auth Required |
| ------ | -------- | ------------------ | ------------- |
| GET    | `/`      | Get all services   | No            |
| POST   | `/`      | Create new service | Yes           |
| GET    | `/:id`   | Get service by ID  | Yes           |
| PUT    | `/:id`   | Update service     | Yes           |
| DELETE | `/:id`   | Delete service     | Yes           |

### Request/Response Examples

#### Register User

```bash
POST /api/v1/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Create Vehicle

```bash
POST /api/v1/vehicles
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "make": "Toyota",
  "carModel": "Supra",
  "year": 2024,
  "color": "Red",
  "odoRead": 5000
}
```

#### Create Build

```bash
POST /api/v1/builds
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "carModel": "Honda Civic",
  "color": "Blue",
  "wheelColor": "Black",
  "selectedParts": ["Cold Air Intake", "Exhaust System", "Lowering Springs"]
}
```

## 🏗️ Project Structure

```
apex-auto-mods-server/
├── 📁 config/
│   └── db.js                 # Database connection
├── 📁 controllers/
│   ├── auth.controller.js    # Authentication logic
│   ├── build.controller.js   # Build management logic
│   ├── service.controller.js # Service management logic
│   └── vehicle.controller.js # Vehicle management logic
├── 📁 middlewares/
│   ├── authToken.js         # JWT authentication middleware
│   └── logger.js            # Logging middleware
├── 📁 models/
│   ├── build.model.js       # Build data schema
│   ├── service.model.js     # Service data schema
│   ├── user.model.js        # User data schema
│   └── vehicle.model.js     # Vehicle data schema
├── 📁 repositories/
│   ├── auth.repository.js   # User data access
│   ├── build.repository.js  # Build data access
│   ├── service.repository.js# Service data access
│   └── vehicle.repository.js# Vehicle data access
├── 📁 routes/
│   ├── auth.routes.js       # Authentication routes
│   ├── build.routes.js      # Build routes
│   ├── service.routes.js    # Service routes
│   ├── vehicle.routes.js    # Vehicle routes
│   └── index.js             # Route aggregator
├── 📁 services/
│   ├── auth.service.js      # Authentication business logic
│   ├── build.service.js     # Build business logic
│   ├── service.service.js   # Service business logic
│   └── vehicle.service.js   # Vehicle business logic
├── app.js                   # Express app configuration
├── index.js                 # Server entry point
├── package.json             # Project dependencies
└── vercel.json             # Vercel deployment config
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**

   ```bash
   npm install -g vercel
   vercel login
   vercel link
   ```

2. **Set Environment Variables**
   In your Vercel dashboard, add:

   - `MONGO_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`

3. **Deploy**
   ```bash
   vercel --prod
   ```

### GitHub Actions (Automated)

The project includes GitHub Actions for automatic deployment:

- Pushes to `main` branch trigger production deployment
- Pull requests create preview deployments

Required GitHub Secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## 🛠️ Development

### Available Scripts

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Run tests (when available)
npm test

# Build project
npm run build
```

### Code Style

- ES6+ modules with import/export
- Async/await for asynchronous operations
- RESTful API design patterns
- Repository pattern for data access
- Service layer for business logic

## 🔧 Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt
- **Environment:** dotenv
- **CORS:** cors middleware
- **Development:** nodemon
- **Deployment:** Vercel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Janindu Dissanayake**

- GitHub: [@JaninduDiz](https://github.com/JaninduDiz)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the API documentation above
2. Ensure all environment variables are set correctly
3. Verify MongoDB connection
4. Check server logs for error details

---

Made with ❤️ for the automotive enthusiast community
