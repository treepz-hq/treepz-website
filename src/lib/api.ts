import { ApiResponse, FormData } from "./types";

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return 'Network error. Please check your internet connection and try again.';
    }
    return 'An unexpected error occurred. Please try again later.';
  }
  return 'An error occurred. Please try again later.';
};

// Function to retry an API call multiple times with an interval
export const retryRequest = async (formData: FormData, delay: number = 2000, maxDuration: number = 60000): Promise<ApiResponse> => {
  const startTime = Date.now(); 
  let attempt = 0;

  while (true) {
    try {
      const response = await submitReport(formData); 
      return response;
    } catch (error) {
      attempt++;
      const elapsedTime = Date.now() - startTime;
      
      // If max duration is exceeded, stop retrying
      if (elapsedTime >= maxDuration) {
        console.log('Max retry duration reached, stopping.');
        return { success: false, message: 'Multiple attempts failed. Please try again later or contact support.' };
      }

      console.error(`Attempt ${attempt} failed:`, error);
      console.log(`Retrying in ${delay / 1000} seconds...`);

      await new Promise((resolve) => setTimeout(resolve, delay)); 
    }
  }
};

// The main function that submits the report
export const submitReport = async (formData: FormData): Promise<ApiResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    console.error('API base URL is not defined in environment variables.');
    return { success: false, message: 'API endpoint is not available. Please try again later.' };
  }

  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData?.message || 'Something went wrong while submitting your request.';
      return { success: false, message: errorMessage };
    }

    const data: ApiResponse = await response.json();
    return data;

  } catch (error) {
    console.error('Error submitting report:', error);
    return { success: false, message: getErrorMessage(error) };
  }
};