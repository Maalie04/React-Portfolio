import React from "react";
import {Tooltip} from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TipOverlay() {
    const sites = [
        {
            name: "Github",
            url: "https://github.com/maalie04",
            iconClass: "bi bi-github",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/",
            iconClass: "bi bi-linkedin",
        },
    ];

    const renderIcon = (sites) => {
        if(sites.name === "Github") {
            return <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>;
        } else {
            return <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>;
        }
    };
    return (
        <div className="d-flex flex-row">
        {sites.map((site) => (
            <li className="ms-3">
                <OverlayTrigger
                    key={site.name}
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-${site.name}`}>
                            {site.name}
                        </Tooltip>
                    }
                >
                    <button className="footer-icon">
                        <a
                            className="text-muted"
                            target="blank"
                            href={site.url}
                        >
                            {renderIcon(site)}
                        </a>
                    </button>
                </OverlayTrigger>
            </li>
        ))}
    </div>
);
}