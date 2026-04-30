import { useState, useEffect, useCallback } from 'react';
import { fetchDeviceRecalls } from '../api/fdaService';

/**
 * Custom hook to manage FDA Device Recall data and state
 * @returns {Object} { recalls, loading, error, lastSync, updateFilters }
 */
export const useRecalls = () => {
  const [recalls, setRecalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastSync, setLastSync] = useState(null);
  const [filters, setFilters] = useState({
    classification: 'Class I',
    manufacturer: '',
  });

  const loadRecalls = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchDeviceRecalls({
        classification: filters.classification,
        manufacturer: filters.manufacturer,
      });

      setRecalls(data);
      setLastSync(new Date().toISOString());
    } catch (err) {
      // Specific handling for API rate limits (429)
      if (err.status === 429) {
        setError('API Rate Limit Exceeded. Please wait a moment before trying again.');
      } else if (err.message === 'Failed to fetch') {
        setError('FDA API Connection Failed. System may be offline.');
      } else {
        setError(err.message || 'An unexpected error occurred while fetching recall data.');
      }
      
      // Note: We don't clear 'recalls' on error so the UI can still show 
      // the last successful data if available (Graceful Failure)
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    loadRecalls();
  }, [loadRecalls]);

  /**
   * Updates filters without a page reload
   * @param {Object} newFilters - Partial or complete filter object
   */
  const updateFilters = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  return {
    recalls,
    loading,
    error,
    lastSync,
    filters,
    updateFilters,
    refresh: loadRecalls,
  };
};
