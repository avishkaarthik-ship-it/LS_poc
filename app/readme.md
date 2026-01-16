# Human Labs POC

A Go-based RESTful API service for managing annotation tasks with Label Studio integration. This project provides task assignment, user management, and role-based access control (RBAC) capabilities for annotation workflows.

## 🏗️ Project Structure

```
app/
├── main.go                 # Application entry point
├── go.mod                  # Go module dependencies
├── index.html              # Frontend interface
├── appError/               # Custom error handling
│   ├── appError.go        # AppError struct and methods
│   └── codes.go           # Error code constants
├── label_studio/           # Label Studio integration
│   ├── interface.go       # LabelStudioHelper interface
│   └── label_studio.go    # Label Studio client implementation
├── models/                 # Data models
│   └── model.go           # Database entity structs
├── query/                  # Database layer
│   ├── interface.go       # DbHelper interface
│   ├── psql.go            # PostgreSQL client initialization
│   ├── query.go           # Query implementations
│   └── util.go            # Query utility functions
├── routes/                 # HTTP routing layer
│   ├── auth.go            # Authentication middleware
│   ├── routes.go          # Route definitions
│   └── utils.go           # Route helper functions
└── service/                # Business logic layer
    ├── rbac.go            # Role-based access control
    ├── service.go         # Service initialization
    └── task.go            # Task-related business logic
```

## 📦 Core Components

### 1. **main.go**
The application entry point that:
- Initializes the database helper (PostgreSQL)
- Creates Label Studio client instance
- Sets up the service layer with dependencies
- Configures and starts the HTTP server on port 3000

### 2. **appError/**
Custom error handling package that provides:
- `AppError` struct with error codes, HTTP status, and messages
- Standardized error codes for different failure scenarios
- Consistent error responses across the application

### 3. **label_studio/**
Integration layer for Label Studio annotation platform:
- `LabelStudioHelper` interface for abstraction
- HTTP client for Label Studio API
- Methods for fetching tasks and adding annotations
- Handles authentication and request formatting

### 4. **models/**
Database entity definitions:
- `HL_USER` - Platform user information
- `HL_USER_PROJECT_ROLE` - User-project role mappings
- `HL_PROJECT` - Annotation project details
- `PROJECT_PIPELINE_STAGE` - Project workflow stages
- `HL_TASK` - Annotation task entities
- `HL_TASK_ASSIGNMENT` - Task assignment tracking

### 5. **query/**
Database access layer:
- `DbHelper` interface for database operations
- PostgreSQL implementation using pgx/v5 driver
- Query methods for tasks, users, and assignments
- Utility functions for result mapping
- Connection pooling and context management

### 6. **routes/**
HTTP routing and request handling:
- RESTful API endpoints using Gin framework
- Request validation and parameter extraction
- Response formatting utilities
- Middleware for authentication

### 7. **service/**
Business logic layer:
- `HumanLabsService` struct coordinating database and Label Studio operations
- Task retrieval with permission validation (RBAC)
- Task assignment logic
- Annotation submission workflows
- User authorization checks based on project roles

## 🔌 API Endpoints

### Health Check
- **GET /** - Health check endpoint
  ```bash
  curl -X GET http://localhost:3000/
  ```

### Task Management
- **GET /task/:id** - Fetch task by ID (requires `x-platform-user-id` header)
  ```bash
  curl -X GET http://localhost:3000/task/1 \
    -H "x-platform-user-id: 1"
  ```

- **POST /task/assign** - Assign a task to a user
  ```bash
  curl -X POST http://localhost:3000/task/assign \
    -H "Content-Type: application/json" \
    -d '{"taskId": 1, "platformUserId": 1}'
  ```

- **POST /task/approve** - Approve a task (requires `x-platform-user-id` header)
  ```bash
  curl -X POST http://localhost:3000/task/approve \
    -H "Content-Type: application/json" \
    -H "x-platform-user-id: 1" \
    -d '{"taskId": 1}'
  ```

- **POST /task/reject** - Reject a task with reason (requires `x-platform-user-id` header)
  ```bash
  curl -X POST http://localhost:3000/task/reject \
    -H "Content-Type: application/json" \
    -H "x-platform-user-id: 1" \
    -d '{"taskId": 1, "annotationId": 1, "reason": "Incorrect labeling"}'
  ```

### Annotations
- **POST /annotations** - Add annotations to a task (requires `x-platform-user-id` header)
  ```bash
  curl -X POST http://localhost:3000/annotations \
    -H "Content-Type: application/json" \
    -H "x-platform-user-id: 1" \
    -d '{"taskId": 1, "annotations": [{"value": {...}, "type": "labels"}]}'
  ```

> 💡 **Tip**: See [api-contracts.sh](api-contracts.sh) for a complete executable script with all API examples.

## 🛠️ Technology Stack

- **Language**: Go 1.25.5
- **Web Framework**: Gin (v1.11.0)
- **Database**: PostgreSQL with pgx driver (v5.8.0)
- **External Service**: Label Studio (annotation platform)
- **Architecture**: Layered architecture with dependency injection

## 🚀 Getting Started

### Prerequisites
- Go 1.25.5 or higher
- PostgreSQL database
- Docker (for running Label Studio)

### Installation

1. **Clone and install dependencies**
   ```bash
   go mod download
   ```

2. **Start Label Studio with Docker**
   ```bash
   docker run -e LABEL_STUDIO_ENABLE_LEGACY_API_TOKEN=true -p 8080:8080 <image>
   ```

3. **Connect to PostgreSQL**
   ```bash
   psql -h 127.0.0.1 -U hl_admin -d human_labs
   ```

4. **Configuration**
   - Update database connection string in `query/psql.go`
   - Configure Label Studio access token and URL in `label_studio/label_studio.go`

5. **Run the application**
   ```bash
   go run main.go
   ```
   Server will start on `http://localhost:3000`

## 🏛️ Architecture Pattern

This project follows a **layered architecture** pattern:

1. **Presentation Layer** (routes/) - Handles HTTP requests/responses
2. **Business Logic Layer** (service/) - Contains application logic and orchestration
3. **Data Access Layer** (query/) - Manages database operations
4. **External Service Layer** (label_studio/) - Integrates with third-party services
5. **Models Layer** (models/) - Defines data structures
6. **Error Handling Layer** (appError/) - Centralized error management

### Dependency Flow
```
main.go → service → query + label_studio → models
              ↓
           routes
```

### Design Principles
- **Dependency Injection**: Services receive their dependencies through constructors
- **Interface Segregation**: Database and Label Studio operations use interfaces for testability
- **Single Responsibility**: Each package has a clear, focused purpose
- **Error Handling**: Centralized error types with contextual information

## 🔐 Security Features

- Role-Based Access Control (RBAC) for task access
- User authentication middleware
- Project-level permission validation
- Secure database query practices

## 📊 Database Schema

The application uses the following main tables:
- `hl_user` - User accounts
- `hl_user_project_role` - User permissions per project
- `hl_project` - Annotation projects
- `hl_task` - Annotation tasks
- `hl_user_task` - Task assignments to users
- `project_pipeline_stage` - Project workflow stages

