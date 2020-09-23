import './style.scss';
import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import { UserCards, UserAddresses } from "../../components";

function TabPanel(props) {
  const { Component, value, index, tabPanelId, tabPanelAria, ...other } = props;


  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={tabPanelId}
      aria-labelledby={tabPanelAria}
      {...other}
    >
      <Box p={3}>
        { value === index && <Component /> }
      </Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  Component: PropTypes.func.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    fontSize: 15
  },
  tabPanel: {
    fontSize: 13
  }
}));

export default function UserSettings() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  // const tabs = [
  //   {
  //     title: "Card Information",
  //     index: 0,
  //     component: UserCards
  //   },
  //   {
  //     title: "Shipping Address",
  //     index: 1,
  //     component: UserAddresses
  //   },
  // ]

  return (
    <div className={`${classes.root} user-settings`}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="users settings"
        >
          {/* {tabs.map(tab =>
            <Tab
              key={tab.index}
              label={tab.title}
              id={`user-settings-tab-${tab.index}`}
              aria-controls={`user-settings-tabpanel-${tab.index}`}
              className={classes.tab}
            />
          )} */}

        </Tabs>
      </AppBar>

      {/* {tabs.map(tab =>
        <TabPanel
          key={tab.index}
          value={value}
          index={tab.index}
          Component={tab.component}
          className={classes.tabPanel}
          tabPanelId={`user-settings-tabpanel-${tab.index}`}
          tabPanelAria={`user-settings-tab-${tab.index}`}
        />
      )} */}
    </div>
  );
}
