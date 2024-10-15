'use client';

import { useState } from 'react';

interface LayoutProps {
  type: React.ReactNode;
  report: React.ReactNode;
  emails: React.ReactNode;
}

export default function Layout({ type, report, emails }: LayoutProps) {
  const [state, setState] = useState('type');

  const changeState = (newState: 'type' | 'report' | 'emails') => {
    setState(newState);
  };

  return (
    <>
      <ul className="page-menu">
        <li key={'type'}>
          <button onClick={() => changeState('type')}>Typ akce</button>
        </li>
        <li key={'report'}>
          <button onClick={() => changeState('report')}>Zpráva z akce</button>
        </li>
        <li key={'emails'}>
          <button onClick={() => changeState('emails')}>Doplňující informace</button>
        </li>
      </ul>
      {state === 'type' ? <>{type}</> : state === 'report' ? <>{report}</> : <>{emails}</>}
    </>
  );
}
