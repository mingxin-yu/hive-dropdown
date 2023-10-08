'use client'

import React, { useState } from 'react';
import Dropdown from './dropdown.js';
import SingleSelectExample from "./singleSelectExample";
import MultiSelectExample from "./mutiSelectExample"

export default function Home() {
    return (
      <div className="p-24">
        <div className="h1">
          Hive - dropdown
        </div>
        <SingleSelectExample />
        <MultiSelectExample />
      </div>
    )
}
