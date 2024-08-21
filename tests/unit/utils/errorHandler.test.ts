import { Request, Response } from 'express';
import { errorHandler } from '../../../src/utils/errorHandler';

describe('errorHandler', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should respond with 500 status and error message', () => {
    const error = new Error('Test error');

    errorHandler(error, mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'error',
      message: 'An unexpected error occurred',
    });
  });

  it('should log the error stack', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const error = new Error('Test error');

    errorHandler(error, mockRequest as Request, mockResponse as Response);

    expect(consoleSpy).toHaveBeenCalledWith(error.stack);

    consoleSpy.mockRestore();
  });
});