import React, { useState, useEffect } from 'react';

import './CheckBox.css';

interface CheckBoxProps {
  /**
   * 獨立id
   */
  id: number;
  /**
   * 標題
   */
  title: string;
  /**
   * 狀態
   */
  isDone: boolean;
  /**
   * 處理函數
   */
  onHandle?: (isDone: boolean) => void;
  testProps?: boolean;
}

export const CheckBox = ({ title, isDone, id, ...props }: CheckBoxProps) => {
  const [done, setDone] = useState(isDone);
  useEffect(() => {
    setDone(isDone)
  }, [isDone])
  return (
    <div className={done ? "checkBox__done checkBox" : "checkBox"} >
      <input className="input" type="checkbox" id={`checkbox_${id}`}  {...props} onChange={(e) => {
        setDone(e.target.checked)
      }} />
      <label className="label" htmlFor="checkbox">{title}</label>
    </div>
  );
}