import React, {useContext} from 'react'
import { CryptoContext } from '../Context'
import { Card, Button, Row } from 'antd'

const CryptoSort = () => {
    const { sortedCrypto, sortType, setSortType, cryptosData, setSortedCrypto } = useContext(CryptoContext)

    const sortByPrice = () => {
        const sortedList = [...cryptosData].sort((a, b) => {
          if (sortType === "asc") {
            setSortType("des");
            return a.current_price - b.current_price;
          } else {
            setSortType("asc");
            return b.current_price - a.current_price;
          }
        });
        setSortedCrypto(sortedList);
      };
      const sortByVolume = () => {
        const sortedList = [...cryptosData].sort((a, b) => {
          if (sortType === "asc") {
            setSortType("des");
            return a.total_volume - b.total_volume;
          } else {
            setSortType("asc");
            return b.total_volume - a.total_volume;
          }
        });
        setSortedCrypto(sortedList);
      };

      return(
          <>
          <Button
          onClick={sortByPrice}
          size='middle'
          style={{ marginLeft: "50px" }}
        >
          {sortType === "asc" ? "Trier par Prix croissantes" : "Trier par Prix décroissantes"}
        </Button>
        <Button
          onClick={sortByVolume}
          size='middle'
          style={{ marginLeft: "50px" }}
        >
          {sortType === "asc" ? "Trier par Volume croissante" : "Trier par Volume décroissantes"}
        </Button>
        {sortedCrypto.length > 0 ? (
        sortedCrypto.map((crypto, id) => {
          return (
            <Row gutter={16}>
             <Card key={id} style={{ width: 300, margin: 10 }} bordered={true} hoverable >
                    <p>
                        Quantité totale: {crypto.total_volume}
                        <br />
                        Prix actuel: {crypto.current_price}
                        <br />
                        Last updated: {crypto.last_updated}
                        <br />
                        Nom: {crypto.name}
                        <br />
                        <img src={crypto.image} alt="Smiley face" height="42" width="42"></img>
                    </p>
                </Card>
            </Row>
          );
        })) : (<p>No search result...!</p>
      )}
          </>
      )
}

export default CryptoSort;