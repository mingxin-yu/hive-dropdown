'use client'

import React, { useState } from 'react';
import Dropdown from './dropdown.js';
import SingleSelectExample from "./singleSelectExample";
import MultiSelectExample from "./mutiSelectExample"
import DisableExample from "./disableExample"
import WarningExample from "./warningExample"

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
      </div>
    )
}
