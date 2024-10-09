import React, { useState } from "react";
import EntrepreneurCard from "../../../components/EntrepreneurCard/EntrepreneurCard";
import "./EntrepreneurPage.css";
import { enterprisesAdapter } from "../../../adapters/enterprises.adapter";
import { fetchEnterprises } from "../../../services/fetchEnterprises.service";

const EntrepreneursPage = () => {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEnterprises = async () => {
    try {
      const enterprises = enterprisesAdapter(await fetchEnterprises());
      setEnterprises(enterprises);
    } catch (err) {}
  };

  return (
    <div className="entrepreneurs-page">
      <div className="entrepreneur-cards-container">
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          enterprises.map((entrepreneur, index) => (
            <EntrepreneurCard
              key={index}
              logo={entrepreneur.logo}
              name={entrepreneur.name}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default EntrepreneursPage;
