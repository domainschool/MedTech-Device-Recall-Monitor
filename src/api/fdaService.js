/**
 * API Service for openFDA Device Enforcement
 * Documentation: https://open.fda.gov/apis/device/enforcement/
 */

const BASE_URL = 'https://api.fda.gov/device/enforcement.json';

/**
 * Normalizes raw openFDA JSON response into a clean UI-friendly object
 * @param {Object} rawItem - Single result item from openFDA
 * @returns {Object} Normalized item
 */
export const normalizeRecallData = (rawItem) => {
  return {
    id: rawItem.res_event_number,
    manufacturer: rawItem.recalling_firm,
    productName: rawItem.product_description,
    reason: rawItem.reason_for_recall,
    riskLevel: rawItem.classification,
    status: rawItem.status,
    initiationDate: rawItem.recall_initiation_date,
    distribution: rawItem.distribution_pattern,
    eventNumber: rawItem.event_number,
    city: rawItem.city,
    state: rawItem.state,
    country: rawItem.country,
  };
};

/**
 * Fetches device enforcement data from openFDA API
 * @param {Object} options - Search options
 * @param {string} options.classification - 'Class I', 'Class II', or 'Class III'
 * @param {string} options.manufacturer - Search term for recalling_firm
 * @param {number} options.limit - Number of results to return
 * @returns {Promise<Array>} Normalized results
 */
export const fetchDeviceRecalls = async ({
  classification = 'Class I',
  manufacturer = '',
  limit = 20,
} = {}) => {
  try {
    // Construct search query
    // Example: search=classification:"Class I"+AND+recalling_firm:"Medtronic"
    let searchQuery = `classification:"${classification}"`;
    
    if (manufacturer) {
      // openFDA uses '+' for spaces in query values or AND/OR logic
      searchQuery += `+AND+recalling_firm:"${manufacturer}"`;
    }

    const url = `${BASE_URL}?search=${searchQuery}&limit=${limit}&sort=recall_initiation_date:desc`;

    const response = await fetch(url);
    
    if (!response.ok) {
      // Handle 429 (Rate Limit) or other errors
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(errorData.error?.message || `API Request failed with status ${response.status}`);
      error.status = response.status;
      throw error;
    }

    const data = await response.json();
    
    // openFDA returns results in a 'results' array
    if (!data.results) {
      return [];
    }

    return data.results.map(normalizeRecallData);
  } catch (error) {
    console.error('FDA API Error:', error);
    throw error;
  }
};
