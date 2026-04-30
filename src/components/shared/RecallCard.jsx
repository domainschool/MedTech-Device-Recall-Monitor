import React, { useState } from 'react';
import { ShieldAlert, AlertCircle, Info, Calendar, MapPin, ExternalLink } from 'lucide-react';
import RecallBadge from './RecallBadge';
import { formatDate } from '../../utils/dateUtils';

const RecallCard = ({ recall }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 180;

  const {
    id,
    manufacturer,
    productName,
    reason,
    riskLevel,
    initiationDate,
    distribution,
    status
  } = recall;

  const isTruncated = reason.length > maxLength;
  const displayReason = isExpanded || !isTruncated 
    ? reason 
    : `${reason.substring(0, maxLength)}...`;

  const isCritical = riskLevel === 'Class I';

  return (
    <div className={`alert-card flex flex-col h-full border-l-4 ${isCritical ? 'border-l-recall-critical' : 'border-l-recall-warning'}`}>
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <RecallBadge classification={riskLevel} />
          <div className="flex flex-col items-end">
            <code className="text-[10px] font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
              {id}
            </code>
            <span className="text-[9px] text-slate-400 mt-1 uppercase font-medium">
              Status: {status}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-slate-900 mb-1 leading-snug line-clamp-2" title={productName}>
          {productName}
        </h3>
        
        <p className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-wide text-[10px] flex items-center gap-1">
          <Info className="w-3 h-3" />
          {manufacturer}
        </p>

        <div className={`rounded p-3 transition-colors duration-200 ${isCritical ? 'bg-red-50 border border-red-100' : 'bg-amber-50 border border-amber-100'}`}>
          <div className="flex gap-2">
            {isCritical ? (
              <ShieldAlert className="w-4 h-4 text-recall-critical shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-recall-warning shrink-0 mt-0.5" />
            )}
            <div>
              <p className="text-xs text-slate-800 leading-relaxed italic">
                "{displayReason}"
              </p>
              {isTruncated && (
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`text-[10px] font-bold mt-2 uppercase tracking-tighter hover:underline ${isCritical ? 'text-recall-critical' : 'text-recall-warning'}`}
                >
                  {isExpanded ? 'Show Less' : 'Read Full Reason'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex justify-between items-center mt-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase">
            <Calendar className="w-3 h-3" />
            {formatDate(initiationDate)}
          </div>
          {distribution && (
            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase truncate max-w-[120px]" title={distribution}>
              <MapPin className="w-3 h-3" />
              {distribution.length > 20 ? distribution.substring(0, 20) + '...' : distribution}
            </div>
          )}
        </div>
        <button className={`text-xs font-bold uppercase tracking-tight flex items-center gap-1 hover:opacity-80 transition-opacity ${isCritical ? 'text-recall-critical' : 'text-recall-warning'}`}>
          Details
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default RecallCard;
