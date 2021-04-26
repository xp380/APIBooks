import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Index() {
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur"
      )
      .then((res) => {
        setMoedas(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
                <h1 className="header">Liste des crypto monnaies</h1>

                <table id='tblUser' className="Users">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix Actuel</th>
                            <th>Symbole</th>
                            <th>Changement de prix</th>
                        </tr>
                    </thead>
                    <tbody>

                        {moedas.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.current_price}</td>
                                <td>{user.symbol}</td>
                                <td>{user.price_change_percentage_24h.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
  );
}
