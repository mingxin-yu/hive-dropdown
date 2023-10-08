'use client'

import React, { useState } from 'react';
import SingleSelectExample from "./singleSelectExample.js";
import MultiSelectExample from "./mutiSelectExample.js"
import DisableExample from "./disableExample.js"
import WarningExample from "./warningExample.js"
import LotsOptionsExample from "./LotsOptionsExample.js";

export default function Home() {
    return (
      <div className="p-24">
        <div className="h1">
          Hive - Dropdown Demo
        </div>
        <SingleSelectExample />
        <MultiSelectExample />
        <WarningExample />
        <DisableExample />
        <LotsOptionsExample />
        <div className="h1 mt-16">
            Possible improvement for this project:
        </div>
          <div>
            <div>1. I didn't implement any hover effects, but I can add them if requested. </div>
            <div>2. If the options input is too long (e.g., 100 or more options), it would be beneficial to implement lazy loading and search functionality for the list section.</div>
        </div>
      </div>
    )
}
