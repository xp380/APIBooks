import React, { useState, useEffect } from "react";
import throttle from "lodash.throttle";
import { Progress } from "antd";

function getPageHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.scrollHeight,
        html.offsetHeight
    );
}

export default function Test() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const { scrollY, innerHeight } = window;
            const pageHeight = getPageHeight();

            setProgress(
                !scrollY
                    ? 0
                    : scrollY + innerHeight >= pageHeight
                    ? 100
                    : Math.round(
                          ((scrollY + innerHeight * (scrollY / pageHeight)) /
                              pageHeight) *
                              100
                      )
            );
        }, 100);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <Progress
                percent={progress}
                strokeWidth={10}
                style={{ width: 100 }}
            />
        </>
    );
}
