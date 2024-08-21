# Ethereum NFT API

## Overview

Ethereum NFT API is a robust, TypeScript-based service that provides information about NFT ownership on the Ethereum blockchain. This API focuses on two prominent NFT collections: Bored Ape Yacht Club (BAYC) and Cool Cats (COOL). It leverages the Alchemy blockchain gateway service to efficiently fetch and process blockchain data.

## Features

- Retrieve Ethereum accounts owning both BAYC and COOL NFTs
- Fetch balance of owners possessing both NFT types
- Rate limiting for API protection
- Comprehensive error handling and logging
- Containerized deployment support with Docker
- Extensive test suite with unit and integration tests

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Alchemy SDK
- Jest
- Docker

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Ali-y-Suliman/ethereum-nft-api.git
   cd ethereum-nft-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   ALCHEMY_API_KEY=0LsI32ATnlsLU_cQHJ0oJ8-Abe2Nv9s3
   BAYC_ADDRESS=0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
   COOL_ADDRESS=0x1A92f7381B9F03921564a437210bB9396471050C
   NODE_ENV=development
   ```

## Running the Application

### Development Mode

```
npm run dev
```

### Production Mode

```
npm run build
npm start
```

### Using Docker

Build and start the container:
```
npm run docker:up
```

Stop the container:
```
npm run docker:down
```

## API Endpoints

1. **Get Common Owners**
   - `GET /api/nft/common-owners`
   - Returns a list of Ethereum accounts owning both BAYC and COOL NFTs.
   - Response format:
     ```json
     {
       "status": "ok",
       "data": [
         {"address": "0x1234..."},
         {"address": "0x5678..."}
       ]
     }
     ```

2. **Get Owner Balance**
   - `GET /api/nft/owner-balance/:address`
   - Returns the balance of an owner possessing both NFT types.
   - Response format:
     ```json
     {
       "status": "ok",
       "balance": "1000000000000000000"
     }
     ```

## Input Validation

The API uses Joi for input validation. For example, Ethereum addresses are validated using the following middleware:

```typescript
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateAddress = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    address: Joi.string()
      .pattern(/^0x[a-fA-F0-9]{40}$/)
      .required(),
  });

  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json({ status: 'error', message: error.details[0].message });
  }

  next();
};
```

This middleware ensures that the provided address is a valid Ethereum address before processing the request.


## Testing

Run unit tests:
```
npm run test:unit
```

Run integration tests:
```
npm run test:integration
```

Run all tests:
```
npm test
```

Generate test coverage report:
```
npm run test:coverage
```

## Error Handling

The API implements centralized error handling, ensuring all errors are logged and return standardized JSON responses with appropriate HTTP status codes.

## Logging

Winston is used for logging. In development mode, logs are written to the console. In production, logs are written to files (`error.log` for errors, `combined.log` for all logs).
