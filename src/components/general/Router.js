//Libraries
import React, {Component} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//Components

//Constants
import routes from '../../utils/routes';
import Barbershops from "../barbershops/Barbershops";
import BarbershopForm from "../barbershops/BarbershopForm";
import BarbershopDetail from "../barbershops/BarbershopDetail";
import Services from "../services/Services";
import ServiceForm from "../services/ServiceForm";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={routes.barbershopsRoutes.home} element={<Barbershops />} />
          <Route exact path={routes.barbershopsRoutes.barbershopDetail} element={<BarbershopDetail />} />
          <Route exact path={routes.services} element={<Services />} />

          <Route path={'*'} element={<Navigate to={routes.barbershopsRoutes.home } />} />
        </Routes>
      </BrowserRouter>
    );
  };
}

export default Router;