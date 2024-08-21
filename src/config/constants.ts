function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

export const PORT: number = parseInt(process.env.PORT || '3000', 10);
export const COOL_ADDRESS: string = requireEnv('COOL_ADDRESS');
export const BAYC_ADDRESS: string = requireEnv('BAYC_ADDRESS');
export const ALCHEMY_API_KEY: string = requireEnv('ALCHEMY_API_KEY');
export const NODE_ENV: string = process.env.NODE_ENV || 'development';
