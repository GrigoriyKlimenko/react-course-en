import React, { ReactNode } from 'react';
import { Header } from '@components/Header';
import { Route, Routes } from 'react-router-dom';
import { ROUTES_ITEMS } from '@data/routesItems';
import './styles.css';

type PageWrapperProps = {
  title: string;
  page: ReactNode;
};

export class CommonPage extends React.Component {
  render() {
    return (
      <div className="commonPageContainer">
        <Routes>
          {ROUTES_ITEMS.map((item) => (
            <Route
              key={item.title}
              path={item.path}
              element={<PageWrapper title={item.title} page={item.component} />}
            ></Route>
          ))}
        </Routes>
      </div>
    );
  }
}

class PageWrapper extends React.Component<PageWrapperProps> {
  render() {
    return (
      <>
        <Header currentPageTitle={this.props.title} />
        {this.props.page}
      </>
    );
  }
}
