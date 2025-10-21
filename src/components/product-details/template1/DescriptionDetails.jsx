"use client"

import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const DescriptionDetails = () => {
    return (
        <div className="shadow-md w-full rounded-md bg-white mb-5 mt-4 p-5 xls:p-3 xms:p-3 xs:p-3">
            <div className="pb-5">
                <Tabs>
                    <div className="tab">
                        <TabList>
                            <Tab>
                                <span className="text-black">Description</span>
                            </Tab>
                            <Tab>
                                <span className="text-black">Guideline</span>
                            </Tab>
                        </TabList>
                    </div>

                    {/* Description Tab */}
                    <TabPanel>
                        <div className="pt-3">
                            <span className="text-black">
                                This product is made from premium quality materials to ensure
                                durability and comfort. Perfect for everyday use, it combines
                                functionality with style.
                            </span>
                        </div>
                    </TabPanel>

                    {/* Guideline Tab */}
                    <TabPanel>
                        <div className="pt-3">
                            <span className="text-black">
                                To maintain quality, keep the product in a cool, dry place.
                                Clean with a soft cloth and avoid direct exposure to sunlight
                                for prolonged periods.
                            </span>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>

    )
}

export default DescriptionDetails