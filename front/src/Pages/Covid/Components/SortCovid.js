import React, { useContext} from 'react'
import { CovidContext } from '../Context'
import { Card, Button, Row } from 'antd'

const CovidSort = () => {
    const { sortedCovid ,sortType, setSortType, covidData, setSortedCovid,  } = useContext(CovidContext)

    const sortByDeaths = () => {
        const sortedList = [...covidData].sort((a, b) => {
          if (sortType === "asc") {
            setSortType("des");
            return a.Deaths - b.Deaths;
          } else {
            setSortType("asc");
            return b.Deaths - a.Deaths;
          }
        });
        setSortedCovid(sortedList);
      };
      const sortByRecovered = () => {
        const sortedList = [...covidData].sort((a, b) => {
          if (sortType === "asc") {
            setSortType("des");
            return a.Recovered - b.Recovered;
          } else {
            setSortType("asc");
            return b.Recovered - a.Recovered;
          }
        });
        setSortedCovid(sortedList);
      };

      return(
          <>
          {/* <Row> */}
        <Button
          onClick={sortByDeaths}
          size='middle'
          style={{ marginLeft: "50px" }}
        >
          {sortType === "asc" ? "Trier par morts croissantes" : "Trier par morts décroissantes"}
        </Button>
        <Button
          onClick={sortByRecovered}
          size='middle'
          style={{ marginLeft: "50px" }}
        >
          {sortType === "asc" ? "Trier par rétablis croissante" : "Trier par rétablis décroissantes"}
        </Button>
      {/* </Row> */}
      {sortedCovid.length > 0 ? (
        sortedCovid.map((covid, id) => {
          return (
            <Row gutter={16}>
             <Card
                    key={id}
                    style={{ width: 300, margin: 10 }} bordered={true}
                    hoverable
                >
                    <p>
                        NB de Confirmés: {covid.Confirmed}
                        <br />
                        NB de décès: {covid.Deaths}
                        <br />
                        NB de Rétablis: {covid.Recovered}
                        <br />
                        Date: {covid.Date}
                    </p>
              </Card>
            </Row>
          );
        })) : (<p>No search result...!</p>
      )}
          </>
      )
}

export default CovidSort