import React from 'react';

const RecallBadge = ({ classification }) => {
  const isClass1 = classification === 'Class I';
  const isClass2 = classification === 'Class II';
  
  if (isClass1) {
    return (
      <span className="badge-critical">
        Class I Recall
      </span>
    );
  }

  if (isClass2) {
    return (
      <span className="badge-warning">
        Class II Alert
      </span>
    );
  }

  return (
    <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
      {classification}
    </span>
  );
};

export default RecallBadge;
