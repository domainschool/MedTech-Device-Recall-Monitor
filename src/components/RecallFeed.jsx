import React, { useState, useEffect } from 'react';
import { Search, Filter, RefreshCw, AlertTriangle, WifiOff } from 'lucide-react';
import { useRecalls } from '../hooks/useRecalls';
import RecallCard from './shared/RecallCard';
import AnalyticsSummary from './AnalyticsSummary';

const RecallSkeleton = () => (
  <div className="alert-card animate-pulse">
    <div className="p-5">
      <div className="flex justify-between items-start mb-4">
        <div className="h-5 w-24 bg-slate-200 rounded"></div>
        <div className="h-4 w-16 bg-slate-100 rounded"></div>
      </div>
      <div className="h-6 w-3/4 bg-slate-200 rounded mb-2"></div>
      <div className="h-4 w-1/2 bg-slate-100 rounded mb-4"></div>
      <div className="h-20 bg-slate-50 rounded border border-slate-100"></div>
    </div>
    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex justify-between">
      <div className="h-3 w-20 bg-slate-200 rounded"></div>
      <div className="h-3 w-12 bg-slate-200 rounded"></div>
    </div>
  </div>
);

const RecallFeed = () => {
  const { recalls, loading, error, lastSync, filters, updateFilters, refresh } = useRecalls();
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilters({ manufacturer: searchTerm });
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleClassificationChange = (e) => {
    updateFilters({ classification: e.target.value });
  };

  return (
    <div className="space-y-6">
      <AnalyticsSummary recalls={recalls} loading={loading} />
      
      {/* Search and Filter Header */}
      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by manufacturer (e.g. Medtronic)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200 text-sm transition-all"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2 grow md:grow-0">
            <Filter className="w-4 h-4 text-slate-500" />
            <select
              value={filters.classification}
              onChange={handleClassificationChange}
              className="bg-white border border-slate-200 rounded-md px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              <option value="Class I">Class I (Most Urgent)</option>
              <option value="Class II">Class II (Moderate)</option>
              <option value="Class III">Class III (Minor)</option>
            </select>
          </div>
          
          <button
            onClick={refresh}
            disabled={loading}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors disabled:opacity-50"
            title="Force Refresh"
          >
            <RefreshCw className={`w-4 h-4 text-slate-600 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Error / System Offline State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <div className="bg-white p-2 rounded-full shadow-sm">
            {error.includes('Offline') ? (
              <WifiOff className="w-5 h-5 text-red-600" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-red-600" />
            )}
          </div>
          <div>
            <h4 className="text-sm font-bold text-red-900">System Alert</h4>
            <p className="text-xs text-red-800 mb-2">{error}</p>
            {lastSync && (
              <p className="text-[10px] text-red-600 font-mono uppercase">
                Last Successful Sync: {new Date(lastSync).toLocaleString()}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && recalls.length === 0 ? (
          // Initial loading skeletons
          Array.from({ length: 6 }).map((_, i) => <RecallSkeleton key={i} />)
        ) : recalls.length > 0 ? (
          // Render recalls
          recalls.map((recall) => (
            <RecallCard key={recall.id} recall={recall} />
          ))
        ) : !loading && (
          // Empty state
          <div className="col-span-full py-20 text-center">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-slate-900 font-bold">No Recalls Found</h3>
            <p className="text-slate-500 text-sm">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>

      {/* Loading Overlay for background refreshes */}
      {loading && recalls.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white shadow-lg border border-slate-200 px-4 py-2 rounded-full flex items-center gap-2 animate-bounce">
          <RefreshCw className="w-4 h-4 text-recall-critical animate-spin" />
          <span className="text-xs font-bold text-slate-600">Updating Feed...</span>
        </div>
      )}
    </div>
  );
};

export default RecallFeed;
