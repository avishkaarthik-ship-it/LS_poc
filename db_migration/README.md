# Prisma + PostgreSQL Setup with Docker Compose

This guide will help you set up Prisma with PostgreSQL using Docker Compose.

## Prerequisites

- Docker and Docker Compose installed
- Node.js and npm installed

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start PostgreSQL with Docker Compose

Start the PostgreSQL database container:

```bash
docker-compose up -d
```

This will:
- Start a PostgreSQL container named `hl_postgres_db`
- Expose PostgreSQL on port `5432`
- Create a database named `human_labs`
- Use credentials: `hl_admin` / `hl_password`

Verify the container is running:

```bash
docker ps
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with your database connection string:

```env
DATABASE_URL="postgresql://hl_admin:hl_password@localhost:5432/human_labs?schema=public"
```

### 4. Run Prisma Migrations

For **development**, use:

```bash
npx prisma migrate dev
```

This will:
- Create the database if it doesn't exist
- Apply all pending migrations
- Generate Prisma Client

For **production/deployment**, use:

```bash
npx prisma migrate deploy
```

This will:
- Apply all pending migrations
- Not generate new migrations
- Not regenerate Prisma Client

### 5. Generate Prisma Client

If you need to regenerate the Prisma Client:

```bash
npx prisma generate
```

## Common Prisma Commands

### View Database in Prisma Studio

```bash
npx prisma studio
```

Opens a visual editor for your database at `http://localhost:5555`

### Create a New Migration

After modifying `prisma/schema.prisma`:

```bash
npx prisma migrate dev --name description_of_changes
```

### Reset Database

⚠️ **WARNING**: This will delete all data!

```bash
npx prisma migrate reset
```

### Check Migration Status

```bash
npx prisma migrate status
```

### Format Prisma Schema

```bash
npx prisma format
```

### Validate Prisma Schema

```bash
npx prisma validate
```

## Running Scripts

Run your custom scripts (in the `scripts/` folder):

NOTE: just run the this script with the following args to init enough data for POC 
    project Id can you can get from LS just check the network tab
```bash
node scripts/init.js {LABEL_STUDIO_LEGACY_TOKEN} {LS_PROJECT_ID} 
```

```bash
node scripts/createUsers.js
node scripts/createUserRole.js
node scripts/project.js
node scripts/task.js
```

## Docker Commands

### Stop PostgreSQL

```bash
docker-compose down
```

### Stop and Remove Volumes (⚠️ deletes all data)

```bash
docker-compose down -v
```

### View Logs

```bash
docker-compose logs -f postgres_db
```

### Access PostgreSQL CLI

```bash
docker exec -it hl_postgres_db psql -U hl_admin -d human_labs
```

## Troubleshooting

### Connection Refused

If you get a connection error, ensure:
1. Docker container is running: `docker ps`
2. Port 5432 is not in use by another process
3. DATABASE_URL in `.env` is correct

### Migration Conflicts

If you encounter migration conflicts:

```bash
npx prisma migrate reset
npx prisma migrate dev
```

### Prisma Client Out of Sync

If you get "Prisma Client is not up to date" errors:

```bash
npx prisma generate
```

## Project Structure

```
.
├── docker-compose.yml          # PostgreSQL container configuration
├── prisma/
│   ├── schema.prisma          # Prisma schema definition
│   └── migrations/            # Migration history
├── scripts/                   # Database scripts
└── generated/                 # Generated Prisma Client
```

## Database Credentials

- **Host**: localhost
- **Port**: 5432
- **Database**: human_labs
- **User**: hl_admin
- **Password**: hl_password

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Migrate Guide](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
