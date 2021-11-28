import React from "react";
import BannerImage from "./Content/BannerImage.svg";
import { Image, Form, Button } from "react-bootstrap";

const BannerSection = () => {
  return (
    <div>
      <Image src={BannerImage} alt="BannerImage" className="banner-image" fluid />
      <div className="caption">
        <h1>Share your experience!</h1>
        <br />
        {/*<p>Support your favourite brand</p>
           <p>Write, Rate & Explore</p>*/}

        <Form className="search-input">
        <Form.Control type="search" placeholder="Look for any brand..."/>
          <Button variant="dark">Search</Button>
        </Form>
      </div>
    </div>
  );
};

export default BannerSection;
