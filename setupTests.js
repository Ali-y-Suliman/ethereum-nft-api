const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env.test file
dotenv.config({ path: path.resolve(__dirname, '.env.test') });

// Set default values for required environment variables if they're not set
process.env.BAYC_ADDRESS = process.env.BAYC_ADDRESS || '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';
process.env.COOL_ADDRESS = process.env.COOL_ADDRESS || '0x1A92f7381B9F03921564a437210bB9396471050C';
process.env.ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || 'test_api_key';