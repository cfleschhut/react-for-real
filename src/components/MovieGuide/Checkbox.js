import React from 'react';

export default function Checkbox({ checked, onChange, name, label }) {
  return (
    <div className="flex mw4">
      <label className="pr2">
        {label}{' '}
        <input
          type="checkbox"
          name={name}
          onChange={event => onChange(event.target.checked)}
          checked={checked}
        />
      </label>
    </div>
  );
}
