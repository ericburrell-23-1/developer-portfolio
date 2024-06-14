import React from "react";
import ProjectHeader from "../../components/projects/ProjectHeader";
import DropdownMenu from "../../components/dropdownMenu/DropdownMenu";
import ProjectBackground from "../../components/projects/ProjectBackground";
import TechUsed from "../../components/projects/TechUsed";
import Description from "../../components/projects/Description";
import SourceCode from "../../components/projects/SourceCode";
import ProjectCSSColorFormat from "../../utilities/functions/ProjectCSSColorFormat";
import { ORDERS_DASHBOARD_LINK } from "../../utilities/constants/projectLinks";

const OrdersDashboardPage = () => {
  const colors = {
    primary: "#cc0000",
    secondary: "#000",
    primaryOpaque: "#cc000030",
    secondaryOpaque: "#0003",
    detail: "#fff",
    contrast: "#000",
    background1: "#222",
    background2: "#77555530",
  };

  return (
    <div style={ProjectCSSColorFormat(colors)}>
      <ProjectHeader
        title="D&M Orders Dashboard"
        thumbnail="orders-dashboard-thumbnail.png"
        link={ORDERS_DASHBOARD_LINK}
      />
      <DropdownMenu />
      <ProjectBackground
        text={
          <>
            So here is what happened Lorem Ipsum and then some stuff and synergy
            software made a thing it did a thing and it went boom and now it
            works and it does a thing that the thing needed it to do. It is
            great you should do it.
            <br />
            <br />
            This is a new line.
          </>
        }
      />
      <TechUsed
        techStacks={["React", "Node.js", "Express.js", "MongoDB"]}
        description={
          <>
            This is a full-stack project that integrates a backend server built
            using Express.js running in a Node environment with a frontend
            developed with react. It stores order data in a MongoDB database.
          </>
        }
      />
      <Description
        whatItDoes={
          <>
            The orders dashboard is a very complex application meant to be used
            by both customers in the lab (with the help of employees on-site)
            for the purpose of entering orders, and by employees to monitor and
            update the status of orders and sensitive data.
            <br />
            The order-entry dashboard allows users to select photos and
            corresponding products in order to place orders, and once the order
            is confirmed, moves the order data to the database, moves images
            into the correct location in the file system, and prints an order
            invoice for the customer.
          </>
        }
        deployment={
          <>
            This application was deployed on-site to the local network of D&M.
            The server allows any computer on the network to access the backend
            resources and frontend UI.
            <br />
            The portfolio demo of this project was deployed to Heroku as a web
            app, with an AtlasDB storage location.
          </>
        }
        howToUse={
          <>
            Upon navigating to the main page of the app, choose either button to
            begin an order (either via selecting an image first, or a product).
            Follow the instructions to (quickly) register a profile, or use the
            fake name "John Photoguy" with the last four digits "1234".
            <br />
            <i>Why confirm phone number?</i> Most of our customers have no
            interest in creating a password to use on-site. However, a phone
            number is a good technique to verify identity. This isn't so much a
            security measure as it is making sure the wrong profile wasn't
            selected on accident.
          </>
        }
      />
      <SourceCode
        githubLink="https://github.com/ericburrell-23-1/DM-Order-Tracking"
        projectName="DM-Order-Tracking"
      />
    </div>
  );
};

export default OrdersDashboardPage;
