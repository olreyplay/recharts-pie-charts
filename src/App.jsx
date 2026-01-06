import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const userPlanData = [
  { name: "Free", value: 400 },
  { name: "Basic", value: 300 },
  { name: "Pro", value: 200 },
  { name: "Enterprise", value: 100 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>User Distribution by Plan</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={userPlanData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {userPlanData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
