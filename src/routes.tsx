import React from 'react';
import { Switch, Route, RouteComponentProps, Link } from 'react-router-dom';

import { ComponentType } from 'react';

import Home from '@/pages/home';
import Contacts from '@/pages/contacts';

interface RouteI {
  link: string;
  title: string;
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

export const Pages: Array<RouteI> = [
  {
    link: '/',
    title: 'Home',
    component: Home,
  },
  {
    link: '/contacts',
    title: 'Contacts',
    component: Contacts,
  },
];

const Routes: React.FC = () => {
  // const Wrap = (
  //   Component: React.FC<RouteComponentProps>,
  //   props: RouteComponentProps,
  // ) => {
  //   return <Component {...props} />;
  // };

  return (
    <React.Fragment>
      <div className="menu">
        {Pages.map((page, index) => (
          <Link to={page.link} key={index}>
            {page.title}
          </Link>
        ))}
      </div>
      <Switch>
        {Pages.map((page, index) => (
          <Route
            exact
            path={page.link}
            component={page.component}
            key={index}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
