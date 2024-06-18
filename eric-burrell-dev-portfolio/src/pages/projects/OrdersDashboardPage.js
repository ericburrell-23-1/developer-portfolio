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
            When I first started at D&M Imaging, a photo-printing lab, I noticed
            a need to automate quite a few processes; we had several different
            ordering softwares that would move order data and images to
            different locations in the file system, and usually not where they
            needed to be in order to move them to the printers. So, with the
            hopes of some day fully automating the order process - such that ALL
            orders received could be sent to the printers with a single click -
            I began building the Orders Dashboard.
            <br />
            <br />
            The Dashboard needed to be both an order entry terminal for
            customers to use in-store, and a way for employees to view and
            manage the status of all existing orders. As an old-school company,
            everything before this was done on paper - the only way to check the
            status of an order was to find the paperwork that was created at the
            time of receiving the order and reading whatever hand-written notes
            had been scribbled on it. If the paperwork was lost or reprinted,
            confusion could easily ensue. And getting orders from customers who
            came into the store was a mess as well. Imagine an employee fumbling
            around with a flash drive, and scrambling to find scrap paper to
            write down the customer's contact info and which size they wanted
            their images printed. A digital solution was desperately needed.
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
