import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Pricing plans to suit small and big pharmacies</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Medsway Basic</PricingCardPlan>
                <PricingCardCost>INR 2499</PricingCardCost>
                <PricingCardLength>per year</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Up to 2 logins</PricingCardFeature>
                  <PricingCardFeature>Instant inventory setup</PricingCardFeature>
                  <PricingCardFeature>Seamless billing integration</PricingCardFeature>
                  <PricingCardFeature>Real time sales dashboard</PricingCardFeature>
                  <PricingCardFeature>Automated expiry alerts</PricingCardFeature>
                  <PricingCardFeature>Whatsapp integration</PricingCardFeature>
                  <PricingCardFeature>24-48 hr window service support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Medsway Plus</PricingCardPlan>
                <PricingCardCost>INR 4499</PricingCardCost>
                <PricingCardLength>per year</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Up to 3 logins</PricingCardFeature>
                  <PricingCardFeature>Enhanced sales dashboard</PricingCardFeature>
                  <PricingCardFeature>Exclusive stock deals</PricingCardFeature>
                  <PricingCardFeature>12 hr window guaranteed support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Medsway PRO</PricingCardPlan>
                <PricingCardCost>INR 9999</PricingCardCost>
                <PricingCardLength>per year</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited user logins</PricingCardFeature>
                  <PricingCardFeature>Pharmacy e-commerce set up</PricingCardFeature>
                  <PricingCardFeature>Purchase and delivery support</PricingCardFeature>
                  <PricingCardFeature>Live dedicated agent support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing