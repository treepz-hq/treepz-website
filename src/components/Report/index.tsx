'use client';
import { useModal } from '@/contexts/ModalContext';

import React from 'react'
import ShareDialog from '../Modal/shareDialog'
import RideSharingStats from '../RideSharing';
import BetterTogetherComponent from '../Trips';
import GetACopy from '../GetCopy';
import HeroComponent from './hero';

const ReportComponent = () => {
  return (
    <div>
      <HeroComponent/>
      <ShareDialog />
      <RideSharingStats />
      <GetACopy />
      <BetterTogetherComponent />
    </div>
  )
}

export default ReportComponent