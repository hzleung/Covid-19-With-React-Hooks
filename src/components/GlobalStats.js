import React from "react"

function Stat({number, color}) {
  return <span style={{ color: color, fontWeight: "bold"}}>{number}</span>;
}

function GlobalStats({ stats }) {
  const { cases, deaths, recovered, active, updated } = stats;

  return (
    <div className='global-stats'>
      <small>数据更新于 {new Date(updated).toLocaleString()}</small>
      <table>
        <tr>
          <td>
            累计确诊: <Stat number={cases} color='red' />
          </td>
          <td>
            死亡人数: <Stat number={deaths} color='gray' />
          </td>
          <td>
            治愈人数: <Stat number={recovered} color='green' />
          </td>
          <td>
            现有确诊: <Stat number={active} color='orange' />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default GlobalStats;