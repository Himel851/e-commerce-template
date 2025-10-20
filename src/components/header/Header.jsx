// @ts-nocheck
"use client";

import React from 'react'
import { useAppSelector } from '@/store/store';
import { getHeaderByTemplate } from './HeaderTemplate';

const Header = () => {
    const activeTemplate = useAppSelector((s) => s.template.activeTemplate);
    const ResolvedHeader = getHeaderByTemplate(activeTemplate);
    return <ResolvedHeader />;
}

export default Header