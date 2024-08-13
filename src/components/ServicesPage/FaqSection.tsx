"use client";
import b2bvector from "@/../public/images/b2b-vector.svg";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, Skeleton, theme } from "antd";
import Image from "next/image";
import { Suspense, type CSSProperties } from "react";
import {
  FaDatabase,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaPhoneVolume,
} from "react-icons/fa";
import { FaPeopleGroup, FaTableList } from "react-icons/fa6";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: (
      <div className="flex gap-2 items-center">
        <FaDatabase />
        <h3 className="font-medium">Data Enrichment</h3>
      </div>
    ),
    children: (
      <p>
        LinkedIn data enrichment, Leads Appending and Data Entry, Data
        Appending/Enrichment, Web Research, Cell Phone Number Enrichment , Any
        Site Data Collection
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: (
      <div className="flex gap-2 items-center">
        <FaTableList />
        <h3 className="font-medium">Lead Generation</h3>
      </div>
    ),
    children: (
      <p>
        We are professional lead generation specialist with over 6 years+ of
        expertise in B2B Lead Generation, Email List Building, Skip Tracing,
        Contact Finding, and other related areas.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: (
      <div className="flex gap-2 items-center">
        <FaEnvelopeOpenText />
        <h3 className="font-medium">Email List Building</h3>
      </div>
    ),
    children: (
      <p>
        Email Verify with NeverBounce and also Send Emails by mail to check
        Bounce rate. So you will get a 100% Verified List with zero Bounce.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: (
      <div className="flex gap-2 items-center">
        <FaPeopleGroup />
        <h3 className="font-medium">Terget Person</h3>
      </div>
    ),
    children: (
      <p>
        We Can Provide 100% Verified List From Any Targeted -( Company, Niche,
        Industry, Title, Location, Keyword Related )
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: (
      <div className="flex gap-2 items-center">
        <FaEnvelope />
        <h3 className="font-medium">Email Filtering</h3>
      </div>
    ),
    children: (
      <p>
        We Can Provide 100% Verified E-mail and Personal and Business Email List
        From Any Targeted -( Company, Niche, Industry, Title, Location, Keyword
        Related)
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "6",
    label: (
      <div className="flex gap-2 items-center">
        <FaPhoneVolume />
        <h3 className="font-medium">Cell Phone and Direct Phone</h3>
      </div>
    ),
    children: (
      <p>
        We Can Provide 100% Verified E-mail and Direct Phone Number List From
        Any Targeted -( Company, Niche, Industry, Title, Location, Keyword
        Related ) & Any phone number all premium tools, Zoominfo , Lusha ,
        seamless and Kaspr
      </p>
    ),
    style: panelStyle,
  },
];

function FaqSection() {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: "rgb(249 250 251)",
    borderRadius: token.borderRadiusLG,
    border: "none",
    boxShadow:
      " 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  };
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-6">
        <div className="flex-1 mt-10">
          <h1 className="text-3xl font-medium mb-2">Our Services:</h1>
          <Collapse
            bordered={false}
            accordion
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            expandIconPosition="end"
            style={{ background: token.colorBgContainer }}
            items={getItems(panelStyle)}
          />
        </div>
        <div className="flwx-1 min-[900px]:block hidden">
          <Suspense fallback={<Skeleton.Image active={true} />}>
            <Image src={b2bvector} alt="b2b" width={500} height={500} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
