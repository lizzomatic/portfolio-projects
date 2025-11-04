"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

export default function NotionContent({ recordMap }) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={false}
    />
  );
}
