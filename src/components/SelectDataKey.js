import React from 'react'

function SelectDataKey({ onChange }) {
  return (
    <>
      <label htmlFor='key-select'>请选择指标: </label>
      <select id='key-select' onChange={onChange}>
        <option value='cases'>累计确诊病例</option>
        <option value='todayCases'>今日确诊病例</option>
        <option value='deaths'>累计死亡病例</option>
        <option value='recovered'>治愈人数</option>
        <option value='active'>现存确诊人数</option>
      </select>
    </>
  );
}

export default SelectDataKey;