import App from '@/components/app/app';
import * as React from 'react';

export interface ContactsProps {}

const Contacts: React.SFC<ContactsProps> = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default Contacts;
