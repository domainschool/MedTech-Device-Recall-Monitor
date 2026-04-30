/**
 * Formats FDA date string (YYYYMMDD) to a human-readable format
 * @param {string} dateString - YYYYMMDD
 * @returns {string} MMM DD, YYYY
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  
  const date = new Date(year, month - 1, day);
  
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};
