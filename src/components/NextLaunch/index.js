import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components/macro';
import { Location } from '@styled-icons/evil/Location';
import { CalendarEvent } from'@styled-icons/bootstrap/CalendarEvent';
import { Rocket } from '@styled-icons/ionicons-outline/Rocket';
import { Hash } from '@styled-icons/boxicons-regular/Hash';

const axios = require('axios');

const Section = styled.section`
  width: 100%;
  height: 90vh;
  background-color: ${props => props.theme.colors.background4};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 20px; 
`;

const HashIcon = styled(Hash)`
  width: 20px;
  margin-right: 5px;
`

const RocketType = styled(Rocket)`
  width: 20px;
  margin-right: 5px;
`

const CalendarIcon = styled(CalendarEvent)`
  width: 20px;
  margin-right: 10px;
`;

const LocationIcon = styled(Location)`
  width: 30px;
`;

const Spec = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 300;
`;

const Link = styled.a.attrs(props => ({
  target: "_black"
}))`
  border-radius: 2px;
  padding: 0.7rem 0;
  margin: 2rem 1rem 0 1rem;
  width: 11rem;
  text-decoration: none;
  background: transparent;
  font-weight: 600;
  font-size: 20px;
  text-align: center;

  ${props => props.primary && css`
    background: white;
    color: ${props => props.theme.colors.red};
  `}

  &:hover {
    background: black;
    color: white;
  }
`;

export default function GetNextLaunch() {
  const [nextLaunch, setNextLaunch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get('https://api.spacexdata.com/v3/launches/next');
        
        const mission = {
          missionName: request.data.mission_name,
          missionDetails: request.data.details,
          flightNumber: request.data.flight_number,
          launchDateLocal: moment(request.data.launch_date_local).format('MMMM Do YYYY, h:mm:ss a'),
          launchSite: request.data.launch_site.site_name_long,
          missionPatch: request.data.links.mission_patch_small,
          redditCampaign: request.data.links.reddit_campaign,
          rocketName: request.data.rocket.rocket_name,
        }
  
        setNextLaunch(mission)
        return request;
      } 
      catch (err) {
        console.log(err.message)
      }
    } 
    fetchData()

  }, []);

  return (
    <Section>
      <Container>
        <SubHeader> {nextLaunch.missionName} </SubHeader>
        <Spec> <HashIcon /> {nextLaunch.flightNumber} </Spec>
        <Spec> <RocketType /> {nextLaunch.rocketName} </Spec>
        <Spec> <CalendarIcon /> {nextLaunch.launchDateLocal} </Spec>
        <Spec> <LocationIcon /> {nextLaunch.launchSite} </Spec>
        <Link 
          href={nextLaunch.redditCampaign} 
          primary
          > 
          Reddit Threads 
        </Link>
      </Container>
    </Section>
  )
};