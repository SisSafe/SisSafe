import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


interface IChart { }

const data = [
  {
    name: '12:00',
    pv: 2400,
  },
  {
    name: '16:00',
    pv: 1398,
  },
  {
    name: '18:00',
    pv: 9800,
  },
  {
    name: '20:00',
    pv: 3908,
  },
  {
    name: '22:00',
    pv: 4800,
  },
];

export const Chart: React.FC<IChart> = () => {

  return (
    <ResponsiveContainer width="100%" height={151}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          left: -14
        }}
      >
        <XAxis axisLine={false} tickLine={false} dataKey="name" />
        <YAxis axisLine={false} tickLine={false} />
        <Line type="monotone" dataKey="pv" dot={false} stroke="rgba(133, 121, 250, 1)" fill="rgba(133, 121, 250, 1)" />
      </LineChart>
    </ResponsiveContainer>
  );
}
