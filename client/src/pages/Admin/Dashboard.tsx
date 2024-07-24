// import CardList from "../../components/Product/ProductList/ProductList";
// import Sales from "../../components/Sells/Sales";

// const Dashboard: React.FC = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {/* <CardList /> */}
//       <Sales/>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
// import CardList from "../../components/Product/ProductList/CardList";
import Sales from "../../components/Sales/Sales";
import ProductList from '../../components/Product/ProductList/ProductList';

const Dashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('products');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'products':
        return <ProductList />;
      case 'sales':
        return <Sales />;
      default:
        return <Sales />;
    }
  };

  return (
    <div className="d-flex">
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Dashboard </div>
        <div className="list-group list-group-flush">
          <a 
            href="#" 
            className={`list-group-item list-group-item-action ${activeComponent === 'products' ? 'active' : ''}`} 
            onClick={() => setActiveComponent('products')}
          >
            Productos
          </a>
          <a 
            href="#" 
            className={`list-group-item list-group-item-action ${activeComponent === 'sales' ? 'active' : ''}`} 
            onClick={() => setActiveComponent('sales')}
          >
            Ventas
          </a>
        </div>
      </div>
      <div className="container-fluid">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Dashboard;
