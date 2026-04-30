import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Users, AlertCircle } from 'lucide-react';

const AnalyticsSummary = ({ recalls, loading }) => {
  const stats = useMemo(() => {
    if (!recalls.length) return { totalClass1: 0, topManufacturers: [], velocityData: [] };

    // 1. Total Class I
    const totalClass1 = recalls.filter(r => r.riskLevel === 'Class I').length;

    // 2. Top Manufacturers
    const manufacturerCounts = recalls.reduce((acc, curr) => {
      acc[curr.manufacturer] = (acc[curr.manufacturer] || 0) + 1;
      return acc;
    }, {});

    const topManufacturers = Object.entries(manufacturerCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([name, count]) => ({ name, count }));

    // 3. Recall Velocity (by Month)
    // Format: YYYYMM -> Month Name
    const monthMap = {
      '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
      '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'
    };

    const velocityCounts = recalls.reduce((acc, curr) => {
      const monthKey = curr.initiationDate.substring(4, 6);
      const monthName = monthMap[monthKey] || monthKey;
      acc[monthName] = (acc[monthName] || 0) + 1;
      return acc;
    }, {});

    const velocityData = Object.entries(velocityCounts).map(([month, count]) => ({
      month,
      count
    }));

    return { totalClass1, topManufacturers, velocityData };
  }, [recalls]);

  if (loading && !recalls.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-pulse">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-32 bg-white rounded-lg border border-slate-200 shadow-sm"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      {/* Metric 1: Total Class I */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Critical Recalls</p>
            <h3 className="text-3xl font-black text-recall-critical">{stats.totalClass1}</h3>
          </div>
          <div className="bg-red-50 p-2 rounded-lg">
            <AlertCircle className="w-6 h-6 text-recall-critical" />
          </div>
        </div>
        <p className="text-[10px] text-slate-400 mt-4 font-mono">ACTIVE CLASS I ENFORCEMENTS</p>
      </div>

      {/* Metric 2: Top Manufacturers */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-slate-400" />
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Impacted Firms</p>
        </div>
        <div className="space-y-3">
          {stats.topManufacturers.length > 0 ? (
            stats.topManufacturers.map((m, i) => (
              <div key={m.name} className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700 truncate max-w-[150px]" title={m.name}>
                  {i + 1}. {m.name}
                </span>
                <span className="text-xs font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                  {m.count}
                </span>
              </div>
            ))
          ) : (
            <p className="text-xs text-slate-400 italic">No data available</p>
          )}
        </div>
      </div>

      {/* Metric 3: Velocity Chart */}
      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-2 px-2">
          <TrendingUp className="w-4 h-4 text-slate-400" />
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recall Velocity</p>
        </div>
        <div className="h-24 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.velocityData}>
              <XAxis 
                dataKey="month" 
                hide 
              />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }}
                contentStyle={{ fontSize: '10px', borderRadius: '4px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="count" radius={[2, 2, 0, 0]}>
                {stats.velocityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.count > 5 ? '#b91c1c' : '#94a3b8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[9px] text-center text-slate-400 font-mono mt-1 uppercase">Volume by Month (90 Days)</p>
      </div>
    </div>
  );
};

export default AnalyticsSummary;
