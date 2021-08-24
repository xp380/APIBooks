import React, { useContext } from "react";
import { Card, Row } from "antd";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";

export default function Covid() {
    const { covidDelta } = useContext(GlobalContext);
    const history = useHistory();
    console.log(covidDelta);

    function HandleRoute() {
        history.push("/covids");
    }

    return (
        <>
            <Card>
                {covidDelta.map((id, item) => {
                    return (
                        <>
                            Nb de Morts: {item.deaths}
                            Nb de Rétablis: {item.recovered}
                            Nb de Cas: {item.cases}
                        </>
                    );
                })}
            </Card>
        </>
    );
}
